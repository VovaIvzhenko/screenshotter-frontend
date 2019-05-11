import ApiServices from '@/common/api.service';

import {
	FETCH_DEVICES,
	FETCH_SCREEN_SHOT
} from "./action.type";

import {
	SET_DEVICES,
	SET_SCREEN_SHOT_BUFFER
} from "./mutation.type";

const state = {
	devices: [],
	screenShotBuffer: ''
};

const getters = {
	getDevices(state) {
		return state.devices
	},
	screenShot(state) {
		return state.screenShotBuffer
	}
};

const actions = {
	async [FETCH_DEVICES](context, slug) {
		const {data} = await ApiServices.get(slug);
		context.commit(SET_DEVICES, data);
		return data;
	},

	async [FETCH_SCREEN_SHOT](context, slug, params) {
		const {data} = await ApiServices.query(slug, params);
		context.commit(SET_SCREEN_SHOT_BUFFER, data);
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
};

export default {
	state,
	getters,
	actions,
	mutations
};