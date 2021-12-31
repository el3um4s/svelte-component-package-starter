<script lang="ts">
	import Slider from '$lib/components/Slider.svelte';
	import infoSvelteComponents from './infoSvelteComponents.json';
	import { SvelteInfo } from '@el3um4s/svelte-component-info';

	let steps = 8;
	let label = "Test";
	$: label = `Test ${steps.toString().padStart(2, "0")}`
</script>

<main>
	<SvelteInfo
		name="Slider"
		description="Svelte Component Package Starter"
		info={infoSvelteComponents['Slider.svelte']}
		urlPackage="@el3um4s/svelte-component-package-starter"
	>
    	<Slider bind:steps {label} slot="demo"/>
    </SvelteInfo>
</main>
