<script lang="ts">
	import GridColors from '$lib/components/GridColors.svelte';
	import infoSvelteComponents from './infoSvelteComponents.json';
	import { SvelteInfo } from '@el3um4s/svelte-component-info';

	const settings = {
		firstColor: 'khaki',
		secondColor: 'teal',
		steps: 9
	};
</script>

<main>
	<SvelteInfo
		name="GridColors"
		description="Svelte Component Package Starter"
		info={infoSvelteComponents['GridColors.svelte']}
		urlPackage="@el3um4s/svelte-component-package-starter"
	>
		<GridColors {...settings} --border-color="orange" slot="demo" />
	</SvelteInfo>
</main>
