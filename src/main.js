import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import router from './router';
import store from './store';
import ApiServices from './common/api.service'
import 'vuetify/dist/vuetify.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.config.productionTip = false;

Vue.use(Vuetify, {
	iconfont: 'fa'
});

ApiServices.init();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
