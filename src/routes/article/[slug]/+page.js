export async function load({ data }) {
	const component = data.article.isIndexFile
		? await import(`../../../../articles/${data.article.slug}/index.md`)
		: await import(`../../../../articles/${data.article.slug}.md`);

	return {
		article: data.article,
		component: component.default,
		layout: {
			fullWidth: true
		}
	};
}
