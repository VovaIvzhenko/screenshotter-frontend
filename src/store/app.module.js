import {
	OPEN_DRAWER,
	SET_MOBILE
} from "./mutation.type";

const state = {
	drawerOpened: false,
	isMobile: false
};

const getters = {
	drawerOpened(state) {
		return state.drawerOpened;
	},
	isMobile(state) {
		return state.isMobile;
	}
};

const actions = {};

const mutations = {
	[OPEN_DRAWER](state, opened) {
		state.drawerOpened = opened;
	},
	[SET_MOBILE](state, isMobile) {
		state.isMobile = isMobile;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};