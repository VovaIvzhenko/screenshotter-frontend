<template>
    <div class="header">
        <v-toolbar
            color="#455A64"
            :dark="true"
            :dense="true"
            :fixed="true"
            :flat="true"
        >
            <v-toolbar-side-icon v-if="isMobile" @click="isOpened = !isOpened"></v-toolbar-side-icon>
            <router-link to="/" tag="span" exact style="cursor: pointer;">
                <v-toolbar-title>
                    <v-icon right dark>fas fa-camera</v-icon> ScreenShotter
                </v-toolbar-title>
            </router-link>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn to="/" flat>ScreenShot</v-btn>
                <v-btn to="pdf" flat>PDF Generator</v-btn>
                <v-btn to="login" flat>Login</v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
import store from '@/store';
import {mapGetters} from 'vuex'
import {OPEN_DRAWER} from "../store/mutation.type";

export default {
    name: 'Header',
    props: {},
    computed: {
        isOpened: {
            get() {
                return this.drawerOpened
            },
            set(value) {
                store.commit(OPEN_DRAWER, value)
            }
        },
        ...mapGetters(["drawerOpened", "isMobile"])
    },
    methods: {}
}
</script>

<style scoped>

</style>
