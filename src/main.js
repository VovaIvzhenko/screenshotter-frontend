import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import router from './router';
import store from './store';
import ApiServices from './common/api.service'
import 'vuetify/dist/vuetify.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import {CREATE_ACTIVITY_LOG} from "./store/action.type";

Vue.config.productionTip = false;

Vue.use(Vuetify, {
	iconfont: 'fa'
});

ApiServices.init();

router.beforeEach((to, from, next) => {
	Promise.all([
		store.dispatch(CREATE_ACTIVITY_LOG, {
			action: 'visit',
			subject: to.fullPath,
			userId:0
		})
	]).then(() => {
		next();
	})
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
