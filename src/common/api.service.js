import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import {API_URL} from "./config";

const ApiServices = {
	init() {
		Vue.use(VueAxios, axios);
		Vue.axios.defaults.baseURL = API_URL;
	},

	query(resource, params) {
		return Vue.axios.get(resource, {params}).catch(error => {
			throw new Error(`ApiService ${error}`);
		})
	},

	get(resource, slug = "") {
		return Vue.axios.get(`${resource}/${slug}`).catch(error => {
			throw new Error(`ApiService ${error}`);
		});
	},

	post(resource, params) {
		return Vue.axios.post(`${resource}`, params);
	}
};

export default ApiServices;