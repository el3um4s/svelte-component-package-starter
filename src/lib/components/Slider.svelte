<script lang="ts">
	export let steps: number = 9;
	export let label: string = 'Steps';

	$: label = label || '';
</script>

<div>
	{#if label.length > 0}
		<label for="choose-steps">{label}</label>
	{/if}
	<input
		type="range"
		data-testid="choose-steps"
		id="choose-steps"
		bind:value={steps}
		min="2"
		max="24"
	/>
</div>

<style lang="postcss">
	div {
		display: flex;
		flex-direction: row;
		gap: 4px;
	}
	input {
		-webkit-appearance: none;
		@apply bg-gray-200 w-max rounded-xl box-content border-2 border-gray-300 p-0 m-0;
	}

	input::-webkit-slider-thumb {
		-webkit-appearance: none;
		@apply border-2 border-solid h-full w-6 rounded-xl bg-yellow-500 cursor-pointer border-yellow-800;
	}

	input::-webkit-slider-runnable-track {
		-webkit-appearance: none;
		@apply w-full h-full cursor-pointer;
	}
</style>
