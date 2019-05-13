<template>
    <div class="home">
        <h2># Home</h2><br>
        <router-link to="/screenshot">Screenshot</router-link>
        <br><br>
        <router-link to="/pdf">PDF</router-link>
    </div>
</template>

<script>
	export default {
		name: 'Home',
		props: {}
	}
</script>

<style scoped>

</style>
