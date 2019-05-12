<template>
    <div class="screen-shotter">
        <v-layout row wrap>
            <v-flex xs12>
                   <v-text-field
                           v-model="site"
                           :label="label"
                           append-icon="fas fa-camera"
                           @click:append="fetchScreenShot"
                           @keyup.enter="fetchScreenShot"
                           solo-inverted
                           flat
                   ></v-text-field>
            </v-flex>
            <v-flex lg4 md4 xs12>
                <v-card>
                    <v-card-title class="headline font-weight-regular blue-grey white--text">
                        Browser options
                    </v-card-title>
                    <v-card-text>
                        <v-switch v-model="screenOpts.fullPage" label="Full page"></v-switch>
                        <v-autocomplete
                                v-model="screenOpts.device"
                                :items="deviceItems"
                                item-text="text"
                                item-value="value"
                                label="Resolution:"
                                persistent-hint
                        >
                        </v-autocomplete>
                        <v-container fluid grid-list-lg>
                            <v-layout row wrap>
                                <v-flex xs9>
                                    <v-slider v-model="screenOpts.width" :max="10000" label="Width"></v-slider>
                                </v-flex>
                                <v-flex xs3>
                                    <v-text-field v-model="screenOpts.width" type="number"></v-text-field>
                                </v-flex>

                                <v-flex xs9>
                                    <v-slider v-model="screenOpts.height" :max="10000" label="Height"></v-slider>
                                </v-flex>
                                <v-flex xs3>
                                    <v-text-field v-model="screenOpts.height" type="number"></v-text-field>
                                </v-flex>
                                <!--
                                <v-flex xs9>
                                    <v-slider v-model="blue" :max="500" label="Zoom"></v-slider>
                                </v-flex>
                                <v-flex xs3>
                                    <v-text-field v-model="blue" type="number"></v-text-field>
                                </v-flex>-->
                            </v-layout>
                        </v-container>
                    </v-card-text>
                </v-card>
                <v-card>
                    <v-card-title class="headline font-weight-regular blue-grey white--text">
                        Image options
                    </v-card-title>
                    <v-card-text>
                        <v-radio-group v-model="screenOpts.type" row>
                            <v-radio label="PNG" value="png"></v-radio>
                            <v-radio label="JPEG" value="jpeg"></v-radio>
                        </v-radio-group>
                        <v-slider
                                v-model="screenOpts.quality"
                                label="Quality:"
                                min="0"
                                max="100"
                                step="1"
                                thumb-label
                        ></v-slider>
                    </v-card-text>
                </v-card>
                <v-card v-if="isMobile">
                    <v-btn block color="error" dark>
                        Shot <v-icon right dark>fas fa-camera</v-icon>
                    </v-btn>
                </v-card>
            </v-flex>
            <v-flex lg8 md8 xs12>
                <v-card>
                    <v-card-title class="headline font-weight-regular blue-grey white--text">
                        Screenshot
                    </v-card-title>
                    <v-card-text>
                        <img v-if="screenShot && !isLoading"
                             alt="Vue logo"
                             :src="screenShot"
                             style="display: block; width: 100%;"
                        >
                        <div v-else-if="isLoading">
                            loading...
                            <v-progress-linear :indeterminate="true"></v-progress-linear>
                        </div>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import store from '@/store';
import { mapGetters } from 'vuex'
import {FETCH_DEVICES, FETCH_SCREEN_SHOT} from "../store/action.type";

export default {
    name: 'ScreenShotter',
    props: {},
    computed: {
        deviceItems() {
			return this.getDevices.devices.map((device) => {
				return {
					text: `${device.name} - ${device.viewport.height} x ${device.viewport.width}`,
                    value: device.name
                }
			})
		},
        isMobile() {
        	return window.innerWidth < 480
        },
        ...mapGetters(["getDevices", "screenShot", "isLoading"])
    },
    beforeRouteEnter(to, from, next) {
    	Promise.all([
    		//TODO:: get ('/screenshot/get/devices') slug from 'to'
    		store.dispatch(FETCH_DEVICES, '/screenshot/get/devices')
        ]).then(() => {
        	next();
        })
    },
	data () {
		return {
			site: 'https://google.com',
            label: 'https://www.wikipedia.org',
			model: null,
			screenOpts: {
				fullPage: true,
				device: null,
				type: 'png',
				quality: 100,
                width: 0,
                height: 0
            }
		}
	},
    methods: {
    	fetchScreenShot() {
    		if (this.isLoading) return;

    		this.site = this.site ? this.site : this.label;

            store.dispatch(FETCH_SCREEN_SHOT, {
				site: encodeURIComponent(this.site),
				screenOpts: this.screenOpts
			})
		}
    }
}
</script>

<style scoped>

</style>
