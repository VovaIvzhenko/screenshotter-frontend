import ApiServices from '@/common/api.service';

import {
	CREATE_ACTIVITY_LOG,
	GENERATE_PDF
} from "./action.type";

import {
	SET_PDF_BUFFER,
	SET_LOADING, SET_SNACK_BAR_OPTS
} from "./mutation.type";

const state = {
	pdfBuffer: ''
};

const getters = {
	pdfBuffer(state) {
		return state.pdfBuffer;
	}
};

const actions = {
	async [GENERATE_PDF](context, params) {
		context.commit(SET_LOADING, true);
		const {data} = await ApiServices.query(`/pdf/site/${params.site}`, params.pdfOpts);

		if (data.error) {
			context.commit(SET_SNACK_BAR_OPTS, {
				active: true,
				color: 'error',
				text: data.error
			})
		}
		context.commit(SET_PDF_BUFFER, data);
		context.commit(SET_LOADING, false);

		context.dispatch(CREATE_ACTIVITY_LOG, {
			action: 'click',
			subject: GENERATE_PDF,
			userId: context.getters['getUserId'] || 0,
			extra: params.pdfOpts
		});
		return data;
	}
};

const mutations = {
	[SET_PDF_BUFFER](state, buffer) {
		state.pdfBuffer = buffer;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};