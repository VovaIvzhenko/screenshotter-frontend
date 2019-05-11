import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: "/",
			component: () => import('@/views/Home')
		},
		{
			path: "/screen-shotter",
			component: () => import('@/views/ScreenShotter')
		},
		{
			path: "/pdf",
			component: () => import('@/views/Pdf')
		},
		{
			path: "/login",
			component: () => import('@/views/ScreenShotter')
		},
		{
			path: "/register",
			component: () => import('@/views/ScreenShotter')
		}
	]
})