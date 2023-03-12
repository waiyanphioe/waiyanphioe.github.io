<script>
	import { info } from '$lib/utils/info';
	import Head from '$lib/components/head.svelte';
	import Hero from '$lib/sections/hero.svelte';
	import Experience from '$lib/sections/experience.svelte';
	import ProjectsWrapper from '../lib/components/ProjectsWrapper.svelte';
</script>

<Head name="Wai Yan Phioe" />

<Hero name={info.name} />
<Experience title={'EDUCATION'} details={info.education} />
<ProjectsWrapper projects={info.projects} />
