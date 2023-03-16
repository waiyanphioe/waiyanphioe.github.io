import { articles } from '$lib/data/articles';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const { slug } = params;

	// get post with metadata
	const article = articles.find((article) => slug === article.slug);

	if (!article) {
		throw error(404, 'Post not found');
	}

	return {
		article
	};
}
