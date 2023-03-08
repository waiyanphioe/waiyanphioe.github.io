<script>
	import '../app.css';
	import Footer from '../components/footer.svelte';
	import Header from '../components/header.svelte';
</script>

<div class="max-w-6xl my-0 mx-auto">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>
