<script lang="ts">
	import { getStartedData } from '../stores/Data';
</script>

<section class="h-80">
	<div class="justify-center flex sm:my-12 my-8">
		<div class="grid md:grid-cols-3 grid-cols-2 gap-y-8 md:gap-x-14 gap-x-8">
			{#each $getStartedData as page, i}
			{#if i<6}
				<div>
					<p class="sm:text-base text-sm font-bold">{page.title}</p>
					<p class="sm:text-base text-sm text-secondary-400 dark:text-secondary-300">
						{page.value}
					</p>
				</div>
			{/if}
			{/each}
		</div>
	</div>
</section>
