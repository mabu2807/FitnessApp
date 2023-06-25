<script lang="ts">
	import type { article } from '../nutrition/nutritionTypes';

	export let data: article;
</script>

<main
	class="flex flex-col w-full items-center justify-start mt-[3vh] h-auto lg:flex-row lg:h-[400px]"
>
	<img class="w-[500px]" src={data.imagePath} alt={data.title} />
	<div class="flex flex-col pl-[3%] w-4/5 lg:m-2">
		<p class="text-2xl font-semibold">{data.title}</p>
		<p>{data.text}</p>
		<a href={data.link} target="_blank">Weiterlesen...</a>
	</div>
</main>
