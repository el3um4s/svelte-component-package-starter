<script lang="ts">
	export let steps = 9;
</script>

<label for="choose-steps">Steps</label>
<input
	type="range"
	data-testid="choose-steps"
	id="choose-steps"
	bind:value={steps}
	min="2"
	max="24"
/>

<style lang="postcss">
	input {
		-webkit-appearance: none;
		@apply bg-transparent w-max;
	}

	input::-webkit-slider-thumb {
		-webkit-appearance: none;
		@apply border h-4 w-4 rounded-xl bg-yellow-500 cursor-pointer;
	}

	input::-webkit-slider-runnable-track {
		@apply w-full h-full cursor-pointer bg-gray-300;
	}
</style>
