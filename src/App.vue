<template>
  <div id="app">
    <v-app>
      <Drawer/>
      <Header/>
      <v-container grid-list-xs grid-list-sm gird-list-md>
        <transition name="component-fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-container>
      <SnackBar/>
    </v-app>
  </div>
</template>

<script>
import store from '@/store'
import {SET_MOBILE} from "./store/mutation.type";
import Header from './components/Header.vue'
import Drawer from './components/Drawer.vue'
import SnackBar from './components/SnackBar.vue'

export default {
	name: 'app',
	components: {
		Header,
		Drawer,
		SnackBar,
	},
    methods: {
		setMobile() {
			store.commit(SET_MOBILE, window.innerWidth <= 960)
		}
    },
    mounted() {
		this.setMobile();
		window.addEventListener('resize', this.setMobile)
	},
	destroyed(){
		document.removeEventListener('resize', this.setMobile);
	}
}
</script>

<style>
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .2s ease;
}
.component-fade-enter, .component-fade-leave-to
  /* .component-fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}
</style>
