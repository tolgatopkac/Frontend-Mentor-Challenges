

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/thankyou/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.2c562b92.js","_app/immutable/chunks/scheduler.b7db4573.js","_app/immutable/chunks/index.9e29058b.js","_app/immutable/chunks/store.aea907e5.js","_app/immutable/chunks/index.409ab502.js"];
export const stylesheets = [];
export const fonts = [];
