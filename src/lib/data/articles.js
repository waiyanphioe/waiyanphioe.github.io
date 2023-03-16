import { browser } from '$app/environment';
import { format } from 'date-fns';
import { parse } from 'node-html-parser';
import readingTime from 'reading-time/lib/reading-time.js';

// we require some server-side APIs to parse all metadata
if (browser) {
	throw new Error(`posts can only be imported server-side`);
}

// Get all posts and add metadata
export const articles = Object.entries(import.meta.glob('/articles/**/*.md', { eager: true }))
	.map(([filepath, article]) => {
		const html = parse(article.default.render().html);
		const preview = article.metadata.preview
			? parse(article.metadata.preview)
			: html.querySelector('p');

		return {
			...article.metadata,

			// generate the slug from the file path
			slug: filepath
				.replace(/(\/index)?\.md/, '')
				.split('/')
				.pop(),

			// whether or not this file is `my-post.md` or `my-post/index.md`
			// (needed to do correct dynamic import in posts/[slug].svelte)
			isIndexFile: filepath.endsWith('/index.md'),

			// format date as yyyy-MM-dd
			date: article.metadata.date
				? format(
						// offset by timezone so that the date is correct
						addTimezoneOffset(new Date(article.metadata.date)),
						'yyyy-MM-dd'
				  )
				: undefined,

			preview: {
				html: preview.toString(),
				// text-only preview (i.e no html elements), used for SEO
				text: preview.structuredText ?? preview.toString()
			},

			// get estimated reading time for the post
			readingTime: readingTime(html.structuredText).text
		};
	})
	// sort by date
	.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
	// add references to the next/previous post
	.map((article, index, allArticles) => ({
		...article,
		next: allArticles[index - 1],
		previous: allArticles[index + 1]
	}));

function addTimezoneOffset(date) {
	const offsetInMilliseconds = new Date().getTimezoneOffset() * 60 * 1000;
	return new Date(new Date(date).getTime() + offsetInMilliseconds);
}
