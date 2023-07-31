export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.cfba97f5.js","app":"_app/immutable/entry/app.c3d4db49.js","imports":["_app/immutable/entry/start.cfba97f5.js","_app/immutable/chunks/scheduler.b7db4573.js","_app/immutable/chunks/singletons.98b408d8.js","_app/immutable/chunks/index.409ab502.js","_app/immutable/entry/app.c3d4db49.js","_app/immutable/chunks/scheduler.b7db4573.js","_app/immutable/chunks/index.9e29058b.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/thankyou",
				pattern: /^\/thankyou\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
