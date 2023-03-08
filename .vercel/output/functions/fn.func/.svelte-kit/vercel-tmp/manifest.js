export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.08397fda.mjs","imports":["_app/immutable/entry/start.08397fda.mjs","_app/immutable/chunks/index.7850c6d5.mjs","_app/immutable/chunks/singletons.df65f3a1.mjs"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.f77dd7ec.mjs","imports":["_app/immutable/entry/app.f77dd7ec.mjs","_app/immutable/chunks/index.7850c6d5.mjs"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/blogs",
				pattern: /^\/blogs\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
