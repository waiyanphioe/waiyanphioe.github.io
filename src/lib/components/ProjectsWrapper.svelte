<script>
	export let projects;
	import ProjectCard from './ProjectCard.svelte';
</script>

<div class="grid grid-cols-2 md:grid-cols-1 gap-4 my-16">
	{#each projects as project}
		<ProjectCard projectDetail={project} />
	{/each}
</div>
