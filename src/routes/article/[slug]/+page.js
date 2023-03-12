export async function load({ data }) {
	const component = data.post.isIndexFile
		? await import(`../../../../articles/${data.post.slug}/index.md`)
		: await import(`../../../../articles/${data.post.slug}.md`);

	return {
		post: data.post,
		component: component.default,
		layout: {
			fullWidth: true
		}
	};
}
