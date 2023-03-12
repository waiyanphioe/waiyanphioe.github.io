<script>
	import { name } from '$lib/info.js';

	/** @type {import('./$types').PageData} */
	export let data;

	$: isFirstPage = data.page === 1;
	$: hasNextPage = data.articles[data.articles.length - 1]?.previous;
</script>

<svelte:head>
	<title>{name} | Posts</title>
</svelte:head>

<div>
	{#each data.articles as article}
		<h1>{article.title}</h1>
	{/each}
</div>
