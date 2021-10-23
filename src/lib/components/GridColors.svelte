<script lang="ts">
	import { getColors, stringToColorStyle, ColorStyle } from '../functions/ChromaColors';
	import Slider from './Slider.svelte';
	import InputColors from './_InputColors.svelte';

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
		<InputColors bind:firstColor bind:secondColor />
		<Slider bind:steps label="Steps" />
	</header>

	<table>
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
					<td data-color-hex>{c.hex}</td>
					<td data-color-rgb>{c.rgb}</td>
					<td data-color-hsl>{c.hsl}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</section>

<style lang="postcss">
	* {
		--default-color-border: #6b7280;
	}

	section {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	header {
		display: flex;
		flex-direction: row;
		column-gap: 16px;
		align-items: center;
	}

	/* div {
		display: flex;
		flex-direction: row;
		column-gap: 4px;
	} */
	/* 
	input {
		-webkit-appearance: none;
		@apply p-0 m-0 border-0;
	} */
	table {
		@apply bg-gray-50 table border-collapse box-border border-transparent text-center;
	}

	thead {
		border-bottom: 2px solid var(--border-color, var(--default-color-border));
	}

	th,
	td {
		text-transform: uppercase;
		padding: 0.25rem;
		border-left: 1px solid var(--border-color, var(--default-color-border));
		border-right: 1px solid var(--border-color, var(--default-color-border));
	}

	tr {
		border-bottom: 1px solid var(--border-color, var(--default-color-border));
	}
	tbody tr:hover {
		@apply bg-gray-200;
	}
</style>
