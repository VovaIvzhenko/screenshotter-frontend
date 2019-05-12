<template>
    <div class="pdf">
        <v-layout row wrap>
            <v-flex xs12>
                <v-text-field
                        v-model="site"
                        :label="label"
                        append-icon="fas fa-file-pdf"
                        @click:append="fetchPdf"
                        @keyup.enter="fetchPdf"
                        solo-inverted
                        flat
                ></v-text-field>
            </v-flex>
            <v-flex lg4 md4 xs12>
                <v-card>
                    <v-card-title class="headline font-weight-regular blue-grey white--text">
                        PDF options
                    </v-card-title>
                    <v-card-text>
                        <v-slider
                                v-model="pdfOpts.scale"
                                label="Scale:"
                                min="0.1"
                                max="2"
                                step="0.1"
                                thumb-label
                        ></v-slider>
                        <v-switch v-model="pdfOpts.printBackground" label="Print background graphics"></v-switch>
                        <v-switch v-model="pdfOpts.displayHeaderFooter" label="Display header and footer"></v-switch>

                        <v-tooltip top>
                            <template v-slot:activator="{ on }">
                                <v-radio-group v-model="pdfOpts.landscape">
                                    <v-radio label="Book" :value="false" v-on="on"></v-radio>
                                    <v-radio label="Landscape" :value="true" v-on="on"></v-radio>
                                </v-radio-group>
                            </template>
                            <span>Paper orientation.</span>
                        </v-tooltip>

                    </v-card-text>
                </v-card>
                <!--<v-card>
                    <v-card-title class="headline font-weight-regular blue-grey white--text">
                        Image options
                    </v-card-title>
                    <v-card-text>
                        #Image options
                    </v-card-text>
                </v-card>
                <v-card>
                    <v-btn block color="error" dark>
                        Shot <v-icon right dark>fas fa-camera</v-icon>
                    </v-btn>
                </v-card>-->
            </v-flex>
            <v-flex lg8 md8 xs12>
                <v-card>
                    <v-card-title class="headline font-weight-regular blue-grey white--text">
                        PDF
                    </v-card-title>
                    <v-card-text>
                        <embed v-if="pdfBuffer && !isLoading"
                               width="700"
                               height="450"
                               :src="pdfBuffer"
                               style="display: block; width: 100%;"
                        >
                        <div v-else-if="isLoading">
                            loading...
                            <v-progress-linear :indeterminate="true"></v-progress-linear>
                        </div>
                        <div v-else>
                            <h2>Enter the site and generate PDF right now :D</h2>
                        </div>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import store from '@/store';
import { mapGetters } from "vuex";
import {FETCH_PDF} from "../store/action.type";

export default {
    name: 'Pdf',
    props: {},
    computed: {
		...mapGetters(["isLoading", "pdfBuffer"])
	},
	data () {
		return {
			site: 'https://google.com',
			label: 'https://www.wikipedia.org',
			pdfOpts: {
				scale: 1,
				displayHeaderFooter: false,
				printBackground: true,
				landscape: false,
                json: true
            }
		}
	},
	methods: {
		fetchPdf() {
            if (this.isLoading) return false;

			this.site = this.site ? this.site : this.label;

			store.dispatch(FETCH_PDF, {
				site: encodeURIComponent(this.site),
				pdfOpts: this.pdfOpts
            })
		}
    }
}
</script>

<style scoped>

</style>
