import ApiServices from '@/common/api.service';

import {
	FETCH_DEVICES,
	CREATE_SCREEN_SHOT,
	CREATE_ACTIVITY_LOG,
} from "./action.type";

import {
	SET_DEVICES,
	SET_SCREEN_SHOT_BUFFER,
	SET_LOADING,
	SET_SNACK_BAR_OPTS,
} from "./mutation.type";

const state = {
	devices: [],
	screenShotBuffer: '',
	isLoading: false
};

const getters = {
	getDevices(state) {
		return state.devices
	},
	screenShot(state) {
		return state.screenShotBuffer
	},
	isLoading(state) {
		return state.isLoading
	}
};

const actions = {
	async [FETCH_DEVICES](context) {
		if (context.getters['getDevices'].length) {
			return false;
		}
		const {data} = await ApiServices.get('/screenshot/get/devices');
		context.commit(SET_DEVICES, data.devices);

		return data;
	},
	async [CREATE_SCREEN_SHOT](context, params) {
		context.commit(SET_LOADING, true);
		const {data} = await ApiServices.query(`/screenshot/site/${params.site}`, params.screenOpts);

		if (data.error) {
			context.commit(SET_SNACK_BAR_OPTS, {
				active: true,
				color: 'error',
				text: data.error
			})
		}
		context.commit(SET_LOADING, false);
		context.commit(SET_SCREEN_SHOT_BUFFER, data);

		context.dispatch(CREATE_ACTIVITY_LOG, {
			action: 'click',
			subject: CREATE_SCREEN_SHOT,
			userId: context.getters['getUserId'] || 0,
			extra: params.screenOpts
		});
		return data;
	}
};

const mutations = {
	[SET_DEVICES](state, devices) {
		state.devices = devices;
	},
	[SET_SCREEN_SHOT_BUFFER](state, buffer) {
		state.screenShotBuffer = buffer;
	},
	[SET_LOADING](state, isLoading) {
		state.isLoading = isLoading;
	},
};

export default {
	state,
	getters,
	actions,
	mutations
};