import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const titleDefault = 'ScreenShotter';

export default new Router({
	mode: 'history',
	routes: [
		{
			path: "/",
			component: () => import('@/views/ScreenShotter'),
			meta: {title: `${titleDefault} | Screenshot page`}
		},
		{
			path: "/pdf",
			component: () => import('@/views/Pdf'),
			meta: {title: `${titleDefault} | PDF Generator page`}
		},
		{
			path: "/login",
			component: () => import('@/views/Login'),
			meta: {title: `${titleDefault} | Login page`}
		},
		{
			path: "/register",
			component: () => import('@/views/ScreenShotter'),
			meta: {title: `${titleDefault} | Register page`}
		}
	]
})