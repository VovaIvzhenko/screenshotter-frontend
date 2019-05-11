<template>
    <div class="header">
        <v-toolbar
            color="#455A64"
            :dark="true"
            :dense="true"
            :fixed="true"
            :flat="true"
        >
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title>ScreenShotter</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn to="screen-shotter" flat>ScreenShot</v-btn>
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
