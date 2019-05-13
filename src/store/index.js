import Vue from 'vue';
import Vuex from 'vuex';

import screenShotterModule from './screenshotter.module';
import pdfModule from './pdf.module';
import appModule from './app.module';
import logModule from './log.module';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		screenShotterModule,
		pdfModule,
		appModule,
		logModule
	}
})