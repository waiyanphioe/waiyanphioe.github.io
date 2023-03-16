import { articles } from '$lib/data/articles';
import { paginate } from '$lib/utils';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	let page = params.page ? parseInt(params.page) : 1;
	let limit = 10;

	const articlesForPage = paginate(articles, { limit, page });

	if (articlesForPage.length === 0 && page > 1) {
		throw error(404, 'Page not found');
	}

	return {
		articles: articlesForPage,
		page,
		limit
	};
}
