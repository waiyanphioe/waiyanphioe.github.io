<script>
	import '../app.css';
	import Footer from '../components/footer.svelte';
	import Header from '../components/header.svelte';
	import { info } from '$lib/data/info';
</script>

<svelte:head>
	<title>Portfolio - {info.name}</title>
</svelte:head>

<Header links={info.navLinks} name={info.name} />
<main class="container">
	<slot />
</main>
<Footer />
