# SVELTE COMPONENT PACKAGE STARTER

My template for creating Svelte Component Packages

- [TypeScript](https://www.typescriptlang.org/)
- [SvelteKit](https://kit.svelte.dev/)
- TS to JS
- ESLint
- [TailwindCSS](https://tailwindcss.com/)
- [Jest](https://jestjs.io/)
- [Playwright](https://playwright.dev/)

NPM link: [@el3um4s/svelte-component-package-starter](https://www.npmjs.com/package/@el3um4s/svelte-component-package-starter)

### Getting Started

To create a new project based on this template using degit:

```bash
npx degit el3um4s/svelte-component-package-starter
```

Then install the dependecies with:

```bash
npm install
```

Now update the name field in package.json with your desired package name. Then update the homepage field in package.json. And finally add your code.

You can clean up the sample code with:

```bash
npm run clean
```

### Build the package

Run

```bash
npm run build
```

### Create the package

```bash
npm run package
```

### Test the package

You can test the code with Jest

```bash
npm run test
```

You can find the test coverage in `coverage/lcov-report/index.html`.

You can use Playwright to perform a visual regression test:

```bash
npm run test:e2e
```

### Check dependencies

You can check and upgrade dependencies to the latest versions, ignoring specified versions. with [npm-check-updates](https://www.npmjs.com/package/npm-check-updates):

```bash
npm run check-updates
```

You can also use `npm run check-updates:minor` to update only patch and minor.

Instead `npm run check-updates:patch` only updates patch.

### Publish

First commit the changes to GitHub. Then login to your [NPM](https://www.npmjs.com) account (If you don’t have an account you can do so on [https://www.npmjs.com/signup](https://www.npmjs.com/signup))

```bash
npm login
```

Then run publish:

```bash
npm publish
```

If you're using a scoped name use:

```bash
npm publish --access public
```

### Bumping a new version

To update the package use:

```bash
npm version patch
```

and then

```bash
npm publish
```

### Install and use the package

To use the package in a project:

```bash
npm i @el3um4s/svelte-component-package-starter
```

and then in a svelte file:

```html
<script lang="ts">
	import { GridColors } from '@el3um4s/svelte-component-package-starter';
</script>

<GridColors />
```
