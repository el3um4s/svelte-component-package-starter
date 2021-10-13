# SVELTE COMPONENT PACKAGE STARTER

**WIP**



in `svelte.config.js`

```js
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		target: '#svelte',
		package: {
			dir: 'package',
			emitTypes: true
		}
	}
};

export default config;
```

poi aggiungi [svelte2tsx](https://www.npmjs.com/package/svelte2tsx)

```bash
npm i svelte2tsx
```

poi aggiungi in `package.json`:

```json
"scripts":{
    "package": "svelte-kit package"
}
```

Esegui 

```bash
npm run package
```

Non funziona perché manca un entry point per il pacchetto. Creo `index.ts` in `src/lib` (il contenuto di `lib` diverrà parte del package)

```ts
export { default as GridColors } from './GridColors.svelte';
export { default as Slider } from './Slider.svelte'; 
```