<template>
    <v-snackbar
            v-model="getSnackBar.active"
            :color="getSnackBar.color"
            :multi-line="getSnackBar.mode === 'multi-line'"
            :timeout="getSnackBar.timeout"
            :vertical="getSnackBar.mode === 'vertical'"
    >
        {{ getSnackBar.text }}
        <v-btn
                dark
                flat
                @click="getSnackBar.active = false"
        >
            Close
        </v-btn>
    </v-snackbar>
</template>

<script>
import store from '@/store';
import {mapGetters} from 'vuex';
import {SHOW_SNACK_BAR} from "../store/action.type";

export default {
    name: 'SnackBar',
	computed: {
		snackBarOpts: {
			get() {
				return this.getSnackBar
			},
			set(value) {
				console.log('snackBarOpts -> SnackBar.vue -> ', value);
				store.commit(SHOW_SNACK_BAR, value)
			}
		},
		...mapGetters(["getSnackBar"])
	},
	methods: {}
}
</script>

<style scoped>
    ._skel {
        display: block;
        height: 100%;
        width: 100%;
        background: red;
    }
</style>










