import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import router from './router';

Vue.config.productionTip = false

Vue.use(Vuetify, {
	iconfont: 'fa'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
