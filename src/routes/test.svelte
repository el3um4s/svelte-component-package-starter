<script lang="ts">
	import GridColors from '$lib/components/GridColors.svelte';
	import { stringToColorStyle } from '../lib/functions/ChromaColors';

	const settings = {
		firstColor: 'khaki',
		secondColor: 'teal',
		steps: 9
	};

	settings.firstColor = stringToColorStyle(settings.firstColor).hex;
	settings.secondColor = stringToColorStyle(settings.secondColor).hex;

	let borderColor = 'orange';

	$: settings.firstColor = stringToColorStyle(settings.firstColor).hex;
	$: settings.secondColor = stringToColorStyle(settings.secondColor).hex;

	const changeBorderColor = () => (borderColor = borderColor === 'orange' ? 'green' : 'orange');
	const changeFirstColor = () =>
		(settings.firstColor =
			settings.firstColor === stringToColorStyle('khaki').hex ? 'tomato' : 'khaki');
	const changeSecondColor = () =>
		(settings.secondColor =
			settings.secondColor === stringToColorStyle('teal').hex ? 'dimgray' : 'teal');
	const reset = () => {
		settings.firstColor = 'khaki';
		settings.secondColor = 'teal';
		settings.steps = 9;
	};
</script>

<main>
	<h1>Visual Regression Test</h1>
	<p>Use this page to test component graphics changes</p>
	<div id="grid-colors">
		<GridColors {...settings} --border-color={borderColor} />
	</div>

	<section>
		<button id="change-border-color" on:click={changeBorderColor}>Change border color</button>
		<button id="change-first-color" on:click={changeFirstColor}>Change first color</button>
		<button id="change-second-color" on:click={changeSecondColor}>Change second color</button>

		<div>
			<span>Steps:</span>
			{#each Array(23) as array, i}
				<label>
					<input type="radio" bind:group={settings.steps} value={i + 2} />
					{i + 2}
				</label>
			{/each}
		</div>

		<button id="reset" on:click={reset}>Reset</button>
	</section>
</main>

<style lang="postcss">
	#grid-colors {
		@apply mb-2 mt-2;
	}

	main {
		@apply overflow-y-auto;
	}

	section {
		@apply flex flex-col space-y-1;
	}
</style>
