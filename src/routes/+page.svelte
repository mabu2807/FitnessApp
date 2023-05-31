<script lang="ts">
	import { onMount } from 'svelte';

	onMount(async () => {
		try {
			let records = await fetch('/');
			let data = await records.json();
			console.log(data);
		} catch (error) {
			console.error('Error fetching records:', error);
		}
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
