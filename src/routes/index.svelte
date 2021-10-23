<script lang="ts">
	import GridColors from '$lib/components/GridColors.svelte';
	import { Slider } from '$lib/index';

	const settings = {
		firstColor: 'khaki',
		secondColor: 'teal',
		steps: 9
	};
</script>

<main>
	<Slider label="Slider" />
	<GridColors {...settings} --border-color="orange" />
</main>
