<template>
    <v-footer
            dark
            height="auto"
    >
        <v-card
                class="flex"
                flat
                tile
        >
            <v-card-title class="teal">

                <v-spacer></v-spacer>
            </v-card-title>

            <v-card-actions class="grey darken-3 justify-center">
                <span>EMAIL - ivzhen4@gmail.com</span>
            </v-card-actions>
        </v-card>
    </v-footer>
</template>

<script>
	export default {
		name: 'Footer',
		props: {}
	}
</script>

<style scoped>
    .footer {
        display: block;
        height: 100%;
        width: 100%;
        background: red;
    }
</style>
