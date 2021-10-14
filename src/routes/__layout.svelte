<script>
	import '../app.css';
</script>

<main>
	<slot />
</main>

<style lang="postcss">
	main {
		@apply w-screen h-screen flex-1 flex flex-col p-1 box-border;
	}
</style>
