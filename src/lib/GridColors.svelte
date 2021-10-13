<script lang="ts">
	import { getColors, stringToColorStyle, ColorStyle } from './functions/ChromaColors';
	import Slider from './Slider.svelte';

	export let firstColor = '#fafa6e';
	export let secondColor = 'red';
	export let steps = 9;

	firstColor = stringToColorStyle(firstColor).hex;
	secondColor = stringToColorStyle(secondColor).hex;

	let colorList: ColorStyle[] = getColors({ firstColor, secondColor, steps });

	$: colorList = getColors({ firstColor, secondColor, steps });
</script>

<section>
	<header>
		<label for="choose-first-color">From</label>
		<input
			type="color"
			bind:value={firstColor}
			id="choose-first-color"
			data-testid="choose-first-color"
		/>

		<label for="choose-second-color">To</label>
		<input
			type="color"
			bind:value={secondColor}
			id="choose-second-color"
			data-testid="choose-second-color"
		/>

		<Slider bind:steps />
	</header>

	<table class="border-collaps">
		<thead>
			<tr>
				<th>Color</th>
				<th>HEX</th>
				<th>RGB</th>
				<th>HLS</th>
			</tr>
		</thead>
		<tbody>
			{#each colorList as c}
				<tr>
					<td data-color-background style="background-color:{c.hex}" />
					<td data-color-hex class="uppercase">{c.hex}</td>
					<td data-color-rgb>{c.rgb}</td>
					<td data-color-hsl>{c.hsl}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</section>

<style lang="postcss">
	table {
		@apply bg-gray-50;
	}

	thead {
		@apply border-b-2 border-gray-500;
	}

	th,
	td {
		@apply border-l border-r border-gray-500;
		@apply p-1 text-center;
	}

	tr {
		@apply border-b border-gray-500;
	}
	tbody tr:hover {
		@apply bg-gray-200;
	}
</style>
