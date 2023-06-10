<script lang="ts">
	import type { article } from '../nutritionTypes';

	export let data: article;
</script>

<main class="article">
		<img src={data.imagePath} alt={data.title} />
		<div class="textContent">
			<h3>{data.title}</h3>
			<p>{data.Text}</p>
			<a href={data.link} target="_blank">Weiterlesen...</a>
		</div>
</main>

<style lang="css">
	@media (min-width: 1000px) {
		.article {
            display: flex;
			flex-direction: row;
			width: 100%;
			height: 400px;
			justify-content: start;
			align-items: center;
		}
        .textContent {
		display: flex;
		flex-direction: column;
		padding-left: 3%;
		width: calc(90vw - 550px);
	}
	}
	@media (max-width: 1000px) {
		.article {
			display: flex;
			flex-direction: column;
			width: 100%;
			height: auto;
			justify-content: start;
			align-items: center;
            margin-top: 3vh;
		}
        .textContent {
		display: flex;
		flex-direction: column;
		padding-left: 3%;
		width: 80%;
	}
	}
	img {
		width: 500px;
		
	}
</style>
