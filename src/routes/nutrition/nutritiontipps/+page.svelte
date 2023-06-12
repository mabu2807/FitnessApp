<script lang="ts">
	import { each } from 'svelte/internal';
	import articles from '../../../lib/testData/articles.json';
	import Article from './article.svelte';
	import Footer from '../../../components/Footer.svelte';
	import type { PageData } from './$types';
	export let data:PageData
</script>

<main>
	<div class="content">
		<div class="banner">
			<img class="img" src="/bannerNutrition.png" alt="test" />
		</div>
		<div class="articles">
			{#if data.articles != undefined}
				{#each data.articles as article}
					<Article data={article} />
				{/each}
				{:else}
				<p>Keine Artikel gefunden!</p>
			{/if}
			
			
		</div>
	</div>
    <form method="POST">
        <button type="submit">Test</button>
    </form>
</main>
<Footer />

<style lang="css">
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.banner {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100vw;
		height: auto;
	}
	.img {
		width: 100%;
		height: 100%;
	}
	.articles {
		width: 90vw;
		display: flex;
		flex-direction: column-reverse;
	}
</style>
