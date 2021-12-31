import preprocess from 'svelte-preprocess';
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			style: "postcss",
			script: "typescript",
			postcss: true,
		}),
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		package: {
			dir: 'package',
			emitTypes: true
		},
		adapter: adapter({
			pages: "build",
			assets: "build",
			fallback: null,
		}),
		paths: {
			base: "/svelte-component-package-starter",
		},
	}
};

export default config;