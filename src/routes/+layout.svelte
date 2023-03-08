<script>
	import '../app.css';
	import '../fonts.css';
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
</script>

<div class="max-w-6xl my-0 mx-auto">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>
