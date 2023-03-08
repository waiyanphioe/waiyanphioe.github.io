<script>
	import { info } from '$lib/utils/info';
	import Head from '$lib/components/head.svelte';
	import Hero from '$lib/sections/hero.svelte';
	import Projects from '$lib/components/projects.svelte';
</script>

<Head name="Wai Yan Phioe" />

<Hero name={info.name} about={info.about} />
<Hero name={info.name} />
<Projects />
<Hero name={info.name} />
<Hero name={info.name} />
