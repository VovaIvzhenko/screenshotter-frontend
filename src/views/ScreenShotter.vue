<template>
    <div class="screen-shotter">
        <v-layout row wrap>
            <v-flex xs12>
                   <v-text-field
                           v-model="site"
                           label="https://www.wikipedia.org..."
                           solo-inverted
                           flat
                           @keyup.enter="fetchScreenShot"
                   ></v-text-field>
            </v-flex>
            <v-flex xs4>
                <v-card>
                    <v-card-title class="headline font-weight-regular blue-grey white--text">
                        Browser options
                    </v-card-title>
                    <v-card-text>
                        <v-switch v-model="browserOpts.fullSize" :label="`Full size`"></v-switch>
                        <v-autocomplete
                                v-model="browserOpts.device"
                                :items="deviceItems"
                                :label="`Resolution:`"
                                persistent-hint
                        >
                        </v-autocomplete>
                    </v-card-text>
                </v-card>
                <v-card>
                    <v-card-title class="headline font-weight-regular blue-grey white--text">
                        Image options
                    </v-card-title>
                    <v-card-text>
                        <v-radio-group v-model="imageOpts.type" row>
                            <v-radio label="PNG" value="png"></v-radio>
                            <v-radio label="JPEG" value="jpeg"></v-radio>
                        </v-radio-group>
                        <v-slider
                                v-model="imageOpts.quality"
                                label="Quality:"
                                min="0"
                                max="100"
                                step="1"
                                thumb-label
                        ></v-slider>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs8>
                <v-card>
                    <v-card-title class="headline font-weight-regular blue-grey white--text">
                        Screen shot
                    </v-card-title>
                    <v-card-text>
                        <img v-if="screenShot && !isLoading"
                             alt="Vue logo"
                             :src="screenShot"
                             style="display: block; width: 100%;"
                        >
                        <div v-if="isLoading">
                            loading...
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
			return this.getDevices.devices.map((device, key) => {
    			return `${device.name} - ${device.viewport.height} x ${device.viewport.width}`
            })
        },
        ...mapGetters(["getDevices", "screenShot", "isLoading"])
    },
    beforeRouteEnter(to, from, next) {
    	Promise.all([
    		store.dispatch(FETCH_DEVICES, '/screenshot/get/devices')
        ]).then(() => {
        	next();
        })
    },
	data () {
		return {
			site: 'https://google.com',
			model: null,
			browserOpts: {
				fullSize: true,
				device: null,
            },
            imageOpts: {
				type: 'png',
				quality: 100
            }
		}
	},
    methods: {
    	fetchScreenShot() {
			const params = {
                browserOpts: this.browserOpts,
                imageOpts: this.imageOpts
            };
			const slug = `/screenshot/site/${encodeURIComponent(this.site)}`;
            store.dispatch(FETCH_SCREEN_SHOT, slug, params)
		}
    }
}
</script>

<style scoped>

</style>
