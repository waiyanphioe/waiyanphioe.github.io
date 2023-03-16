// This is an endpoint that generates a basic rss feed for your posts.
// It is OK to delete this file if you don't want an RSS feed.
// credit: https://scottspence.com/posts/make-an-rss-feed-with-sveltekit#add-posts-for-the-rss-feed

import { articles } from '$lib/data/articles';
import { info } from '$lib/utils/info';

export const prerender = true;

// update this to something more appropriate for your website
const websiteDescription = `${info.name}'s blog`;
const articlesUrl = `${info.baseUrl}/articles`;

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function GET({ setHeaders }) {
	setHeaders({
		'Cache-Control': `max-age=0, s-max-age=600`,
		'Content-Type': 'application/xml'
	});

	const xml = `<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
      <channel>
        <title>${info.name}</title>
        <link>${info.baseUrl}</link>
        <description>${websiteDescription}</description>
        <atom:link href="${info.baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
        ${articles
					.map(
						(article) =>
							`
              <item>
                <guid>${articlesUrl}/${article.slug}</guid>
                <title>${article.title}</title>
                <description>${article.preview.text}</description>
                <link>${articlesUrl}/${article.slug}</link>
                <pubDate>${new Date(article.date).toUTCString()}</pubDate>
            </item>
          `
					)
					.join('')}
      </channel>
    </rss>`;

	return new Response(xml);
}
