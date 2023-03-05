<script>
	import { info } from '$lib/data/info';
	import Hero from '../components/hero.svelte';
	import Experience from '../components/experience.svelte';
</script>

<Hero name={info.name} about={info.about} />
<Experience title="EXPERIENCE" details={info.experience} />
<Experience title="EDUCATION" details={info.education} />
