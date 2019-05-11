import ApiServices from '@/common/api.service';
import {FETCH_DEVICES} from "./action.type";
import {SET_DEVICES} from "./mutation.type";

const state = {
	devices: []
};

const getters = {
	getDevices(state) {
		return state.devices
	}
};

const actions = {
	async [FETCH_DEVICES](context, slug) {
		const {data} = await ApiServices.get(slug);
		context.commit(SET_DEVICES, data);
		return data;
	}
};

const mutations = {
	[SET_DEVICES](state, devices) {
		state.devices = devices;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};