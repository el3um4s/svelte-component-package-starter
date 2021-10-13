<script>
	import '../app.css';
</script>

<main>
	<slot />
</main>

<style lang="postcss">
	main {
		@apply w-screen h-screen flex-1 flex flex-col mt-0 mr-2 ml-2 box-border;
	}
</style>
