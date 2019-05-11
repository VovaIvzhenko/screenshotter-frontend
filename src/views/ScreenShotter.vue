<template>
    <div class="screen-shotter">
        <v-layout row wrap>
            <v-flex xs12>
                   <v-text-field
                           label="https://www.wikipedia.org..."
                           solo-inverted
                           flat
                   ></v-text-field>
            </v-flex>
            <v-flex xs4>
                <v-card>
                    <v-card-title class="headline font-weight-regular blue-grey white--text">
                        Browser options
                    </v-card-title>
                    <v-card-text>
                        # in develop
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs8>
                <v-card>
                    <v-card-title class="headline font-weight-regular blue-grey white--text">
                        Screen shot
                    </v-card-title>
                    <v-card-text>
                        # Screen shot
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import store from '@/store';
import { mapGetters } from 'vuex'
import {FETCH_DEVICES} from "../store/action.type";

export default {
    name: 'ScreenShotter',
    props: {},
    computed: {
        ...mapGetters(["getDevices"])
    },
    beforeRouteEnter(to, from, next) {
    	Promise.all([
    		store.dispatch(FETCH_DEVICES, '/screenshot/get/devices')
        ]).then(() => {
        	next();
        })
    }
}
</script>

<style scoped>

</style>
