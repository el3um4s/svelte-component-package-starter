<script lang="ts">
	import GridColors from '$lib/GridColors.svelte';

	const settings = {
		firtColor: 'khaki',
		secondColor: 'teal',
		steps: 9
	};
</script>

<GridColors {...settings} />
