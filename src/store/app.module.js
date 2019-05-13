import {
	OPEN_DRAWER,
	SET_MOBILE,
	SET_SNACK_BAR_OPTS
} from "./mutation.type";

const state = {
	drawerOpened: false,
	isMobile: false,
	snackBar: {
		active: false,
		timeout: 6000,
		color: 'info',
		mode: 'multi-line',
		text: 'Hello, I\'m a snackbar'
	}
};

const getters = {
	drawerOpened(state) {
		return state.drawerOpened;
	},
	isMobile(state) {
		return state.isMobile;
	},
	getSnackBar(state) {
		return state.snackBar;
	}
};

const actions = {};

const mutations = {
	[OPEN_DRAWER](state, opened) {
		state.drawerOpened = opened;
	},
	[SET_MOBILE](state, isMobile) {
		state.isMobile = isMobile;
	},
	[SET_SNACK_BAR_OPTS](state, snackBarOpts) {
		for (let i in snackBarOpts) {
			state.snackBar[i] = snackBarOpts[i];
		}
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};