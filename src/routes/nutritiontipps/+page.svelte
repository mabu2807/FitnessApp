<script lang="ts">
	import Article from './article.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	import { page } from '$app/stores';
</script>

<main class="mt-24">
	<div class="flex flex-col justify-center items-center">
		<div class="flex items-center justify-center w-screen h-auto">
			<img class="w-full h-full" src="/bannerNutrition.png" alt="test" />
		</div>
		<div class="flex w-[90vw] flex-col-reverse">
			{#if data.articles != undefined}
				{#each data.articles as article}
					<Article data={article} />
				{/each}
			{:else}
				<p>Keine Artikel gefunden!</p>
			{/if}
		</div>
	</div>
</main>
