<script>
	import Inter from '$lib/fonts/Inter/Inter-Light.ttf';
	import Outfit from '$lib/fonts/Outfit/Outfit-SemiBold.ttf';
	export let name;
</script>

<svelte:head>
	<title>{name}</title>
	<link rel="preload" href={Inter} as="font" crossorigin />
	<link rel="preload" href={Outfit} as="font" crossorigin />
</svelte:head>
