<script lang="ts">
	import { stringToColorStyle } from '../functions/ChromaColors';

	export let firstColor: string = 'white';
	export let secondColor: string = 'black';

	$: firstColor = stringToColorStyle(firstColor).hex;
	$: secondColor = stringToColorStyle(secondColor).hex;
</script>

<div>
	<label for="choose-first-color">From</label>
	<input
		type="color"
		bind:value={firstColor}
		id="choose-first-color"
		data-testid="choose-first-color"
	/>
</div>

<div>
	<label for="choose-second-color">To</label>
	<input
		type="color"
		bind:value={secondColor}
		id="choose-second-color"
		data-testid="choose-second-color"
	/>
</div>

<style lang="postcss">
	input {
		-webkit-appearance: none;
		@apply p-0 m-0 border-0;
	}

	div {
		display: flex;
		flex-direction: row;
		column-gap: 4px;
	}
</style>
