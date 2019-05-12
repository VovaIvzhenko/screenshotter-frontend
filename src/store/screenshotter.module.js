import ApiServices from '@/common/api.service';

import {
	FETCH_DEVICES,
	FETCH_SCREEN_SHOT
} from "./action.type";

import {
	SET_DEVICES,
	SET_SCREEN_SHOT_BUFFER,
	SET_LOADING
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
	async [FETCH_DEVICES](context, slug) {
		const {data} = await ApiServices.get(slug);
		context.commit(SET_DEVICES, data);
		return data;
	},
	async [FETCH_SCREEN_SHOT]({commit}, params) {
		commit(SET_LOADING, true);
		const {data} = await ApiServices.query(`/screenshot/site/${params.site}`, params.screenOpts);
		commit(SET_SCREEN_SHOT_BUFFER, data);
		commit(SET_LOADING, false);
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