<script>
	import '../app.css';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Home - Wai Yan Phioe</title>
</svelte:head>

<div class="container">
	<slot />
</div>

<style>
	.container {
		width: 100%;
		height: 100vh;
		align-items: center;
		text-align: center;
	}
</style>
