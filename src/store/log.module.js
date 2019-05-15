import ApiServices from '@/common/api.service';

import {
	CREATE_ACTIVITY_LOG
} from "./action.type";

import {
	SET_ACTIVITY_DATA,
	RESET_ACTIVITY_DATA,
} from "./mutation.type";

const initialActivityData = {
	action: '',
	subject: '',
	userId: 0,
	extra: null
};

const state = {
	activity: {
		data: {...initialActivityData},
		resolution: `${screen.width}x${screen.height}`,
		userAgent: navigator.userAgent,
		referrer: document.referrer
	},
};

const getters = {
	getActivity(state) {
		return state.activity;
	}
};

const actions = {
	async [CREATE_ACTIVITY_LOG](context, params) {
		context.commit(SET_ACTIVITY_DATA, params);
		const url = 'http://api.screenshotter.online/api/v1/log/activity';
		await ApiServices.post(url, context.getters['getActivity'])
		.catch(() => {}).then(() => {
			context.commit(RESET_ACTIVITY_DATA);
		});
	}
};

const mutations = {
	[SET_ACTIVITY_DATA](state, data) {
		state.activity.data = data;
	},
	[RESET_ACTIVITY_DATA](state) {
		state.activity.data = initialActivityData;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};