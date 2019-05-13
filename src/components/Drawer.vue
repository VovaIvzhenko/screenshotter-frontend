<template>
    <v-navigation-drawer
            v-model="isOpened"
            temporary
            fixed
    >
        <v-list class="pa-1">
            <v-list-tile avatar>
                <v-list-tile-avatar>
                    <img src="https://randomuser.me/api/portraits/men/85.jpg">
                </v-list-tile-avatar>

                <v-list-tile-content>
                    <v-list-tile-title>Happy Face</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>

        <v-list class="pt-0" dense>
            <v-divider></v-divider>
            <v-list-tile
                    v-for="item in items"
                    :key="item.title"
                    :to="item.path"
                    @click=""
            >
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import store from '@/store'
import {OPEN_DRAWER} from "../store/mutation.type";
import {mapGetters} from 'vuex'

export default {
    name: 'Drawer',
    props: {},
    data () {
        return {
            drawer: null,
			items: [
				{
					title: 'Screenshot',
                    icon: 'fas fa-camera',
                    path: '/'
                },
				{
					title: 'PDF Generator',
                    icon: 'fas fa-file-pdf',
                    path: '/pdf'
				}
			]
        }
    },
    computed: {
		isOpened: {
			get() {
				return this.drawerOpened
			},
			set(value) {
				store.commit(OPEN_DRAWER, value)
			}
		},
		...mapGetters(["drawerOpened"])
    },
    methods: {}
}
</script>

<style scoped>

</style>
