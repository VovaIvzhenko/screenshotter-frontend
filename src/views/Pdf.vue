<template>
    <div class="pdf">
        <h2># PDF</h2>
        <v-btn @click="test">
            Click
        </v-btn>
        {{getDevices}}
        <v-autocomplete
                v-model="model"
                :hint="!isEditing ? 'Click the icon to edit' : 'Click the icon to save'"
                :items="states"
                :label="`State — ${isEditing ? 'Editable' : 'Readonly'}`"
                persistent-hint
                prepend-icon="mdi-city"
        >
            <template v-slot:append-outer>
                <v-slide-x-reverse-transition
                        mode="out-in"
                >
                    <v-icon
                            :key="`icon-${isEditing}`"
                            :color="isEditing ? 'success' : 'info'"
                            @click="isEditing = !isEditing"
                            v-text="isEditing ? 'mdi-check-outline' : 'mdi-circle-edit-outline'"
                    ></v-icon>
                </v-slide-x-reverse-transition>
            </template>
        </v-autocomplete>
    </div>
</template>

<script>
import store from '@/store';
import { mapGetters } from "vuex";
import { FETCH_DEVICES } from "../store/action.type";

export default {
    name: 'Pdf',
    props: {},
    methods: {
        test() {
            store.dispatch(FETCH_DEVICES, '/screenshot/get/devices');
        }
    },
    computed: {
		...mapGetters(["getDevices"])
	},
	data () {
		return {
			isEditing: false,
			model: null,
			states: [
				'Alabama', 'Alaska', 'American Samoa', 'Arizona',
				'Arkansas', 'California', 'Colorado', 'Connecticut',
				'Delaware', 'District of Columbia', 'Federated States of Micronesia',
				'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
				'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
				'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
				'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
				'Missouri', 'Montana', 'Nebraska', 'Nevada',
				'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
				'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
				'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
				'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
				'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
				'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
			]
		}
	}
}
</script>

<style scoped>

</style>
