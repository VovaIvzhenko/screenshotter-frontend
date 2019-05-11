<template>
    <div class="pdf">
        <h2># PDF</h2>
        <v-btn @click="test">
            Click
        </v-btn>
        {{getDevices}}
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
	}
}
</script>

<style scoped>

</style>
