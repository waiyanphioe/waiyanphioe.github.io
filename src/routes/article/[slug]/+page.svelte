<script>
	import { info } from '$lib/utils/info.js';
	import PostDate from '$lib/components/ArticleData.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	// generated open-graph image for sharing on social media.
	// see https://og-image.vercel.app/ for more options.
	const ogImage = `https://og-image.vercel.app/**${encodeURIComponent(
		data.article.title
	)}**?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg`;

	const url = `${info.baseUrl}/${data.article.slug}`;
</script>

<svelte:head>
	<title>{data.article.title} - {info.name}</title>
	<meta name="description" content={data.article.preview.text} />
	<meta name="author" content={info.name} />

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={data.article.title} />
	<meta property="og:description" content={data.article.preview.text} />
	<meta property="og:image" content={ogImage} />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content={info.baseUrl} />
	<meta property="twitter:url" content={url} />
	<meta name="twitter:title" content={data.article.title} />
	<meta name="twitter:description" content={data.article.preview.text} />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>

<article>
	<header class="flex flex-col">
		<h1 class="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
			{data.article.title}
		</h1>

		<PostDate class="text-sm sm:text-base" post={data.article} decorate collapsed />
	</header>

	<!-- render the post -->
	<div class="prose dark:prose-invert ">
		<svelte:component this={data.component} />
	</div>
</article>
