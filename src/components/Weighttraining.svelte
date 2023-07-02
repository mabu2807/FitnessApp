<script lang="ts">
	import { weightData } from '../stores/Data';
	
</script>

<section class="h-80">
	<div class="justify-center flex sm:my-12 my-8 md:px-5 px-0">
		<div class="grid grid-cols-2 gap-y-8 lg:gap-x-20 gap-x-8">
			{#each $weightData as exercise, i}
				<div>
					<p class="md:text-base text-sm font-semibold mb-2">{exercise.title}</p>
					<div class="flex md:flex-row flex-col justify-center md:gap-4 gap-0 md:mb-4 mb-0">
						<div class="flex flex-col">
							<p class="lg:text-base text-sm">Wiederholungen</p>
							<input
								class="input bg-success-400 dark:bg-surface-800 text-black placeholder-secondary-400 dark:text-white dark:placeholder-white px-3 py-1 mb-2 lg:text-base text-sm"
								type="number"
								placeholder="..."
								bind:value={exercise.rep}
							/>
						</div>
						<div class="flex flex-col">
							<p class="lg:text-base text-sm">Gewicht in kg</p>
							<input
								class="input bg-success-400 dark:bg-surface-800 text-black placeholder-secondary-400 dark:text-white dark:placeholder-white px-3 py-1 lg:text-base text-sm"
								type="number"
								placeholder="..."
								bind:value={exercise.weight}
							/>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
