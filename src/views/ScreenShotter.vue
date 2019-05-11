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
                        <v-container
                                fluid
                                grid-list-lg
                        >
                            <v-layout
                                    row
                                    wrap
                            >
                                <v-flex xs9>
                                    <v-slider
                                            v-model="red"
                                            :max="255"
                                            label="R"
                                    ></v-slider>
                                </v-flex>

                                <v-flex xs3>
                                    <v-text-field
                                            v-model="red"
                                            class="mt-0"
                                            type="number"
                                    ></v-text-field>
                                </v-flex>

                                <v-flex xs9>
                                    <v-slider
                                            v-model="green"
                                            :max="255"
                                            label="G"
                                    ></v-slider>
                                </v-flex>

                                <v-flex xs3>
                                    <v-text-field
                                            v-model="green"
                                            class="mt-0"
                                            type="number"
                                    ></v-text-field>
                                </v-flex>

                                <v-flex xs9>
                                    <v-slider
                                            v-model="blue"
                                            :max="255"
                                            label="B"
                                    ></v-slider>
                                </v-flex>

                                <v-flex xs3>
                                    <v-text-field
                                            v-model="blue"
                                            class="mt-0"
                                            type="number"
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-container>
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
	export default {
		name: 'ScreenShotter',
		props: {},
		data () {
			return {
				red: 64,
				green: 128,
				blue: 0
			}
		}
	}
</script>

<style scoped>

</style>
