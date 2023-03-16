import { articles } from '$lib/data/articles';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {
		articles: articles.slice(0, 5)
	};
}
