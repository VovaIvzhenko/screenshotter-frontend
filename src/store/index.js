import Vue from 'vue';
import Vuex from 'vuex';

import screenShotter from './screenshotter.module';
import pdf from './pdf.module';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		screenShotter,
		pdf
	}
})