import ApiServices from '@/common/api.service';

import {
	FETCH_PDF
} from "./action.type";

import {
	SET_PDF_BUFFER,
	SET_LOADING
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
	async [FETCH_PDF]({commit}, params) {
		commit(SET_LOADING, true);
		const {data} = await ApiServices.query(`/pdf/site/${params.site}`, params.pdfOpts);
		commit(SET_PDF_BUFFER, data);
		commit(SET_LOADING, false);
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