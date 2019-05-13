<template>
    <div class="header">
        <v-toolbar
            color="#455A64"
            :dark="true"
            :dense="true"
            :fixed="true"
            :flat="true"
        >
            <router-link to="/" tag="span" exact style="cursor: pointer;">
                <v-toolbar-title>
                    <v-icon right dark>fas fa-camera</v-icon> ScreenShotter
                </v-toolbar-title>
            </router-link>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn to="screenshot" flat>ScreenShot</v-btn>
                <v-btn to="pdf" flat>PDF</v-btn>
                <v-btn to="login" flat>Login</v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
	export default {
		name: 'Header',
		props: {}
	}
</script>

<style scoped>

</style>
