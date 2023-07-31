

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.a0a8b2b2.js","_app/immutable/chunks/scheduler.b7db4573.js","_app/immutable/chunks/index.9e29058b.js"];
export const stylesheets = ["_app/immutable/assets/0.7e194212.css"];
export const fonts = [];
