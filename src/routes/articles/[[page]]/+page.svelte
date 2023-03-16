<script>
	import { info } from '$lib/utils/info.js';

	/** @type {import('./$types').PageData} */
	export let data;
	$: isFirstPage = data.page === 1;
	$: hasNextPage = data.articles[data.articles.length - 1]?.previous;
</script>

<svelte:head>
	<title>{info.name} | Articles</title>
</svelte:head>

<div>
	{#each data.articles as article}
		<a href={`./article/${article.slug}`}><h1>{article.title}</h1></a>
	{/each}
</div>
