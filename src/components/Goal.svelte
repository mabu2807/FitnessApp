<script lang="ts">
	import { getStartedData, lockedGoal } from '../stores/Data';

	let goalsBackend = [
		{ title: 'Lose Weight', description: 'Gewicht reduzieren und Fett abbauen' },
		{ title: 'Gain Muscle', description: 'Muskeln aufbauen und Körper definieren' },
		{ title: 'Stay Fit', description: 'Allgemeine Fitness erhalten und verbessern' }
	];

	function selectCard(newValue: string) {
		const updatedRow = { title: 'Ziele', value: newValue };
		getStartedData.update((data) => {
			return data.map((item) => {
				if (item.title === updatedRow.title) {
					return updatedRow;
				}
				return item;
			});
		});
		lockedGoal.set(false);
	}
</script>

<section class="h-80">
	<div class="flex justify-center md:gap-6 sm:gap-4 gap-2 sm:my-12 my-8">
		{#each goalsBackend as goal}
			<button
				class="card card-hover flex flex-col items-center justify-center p-3 border w-52 h-52 {$getStartedData[0]
					.value === goal.title
					? 'bg-tertiary-500 border-tertiary-700 dark:bg-primary-500 dark:border-primary-700'
					: 'bg-success-400 dark:bg-success-400 border-black dark:border-white'}"
				on:click={() => selectCard(goal.title)}
				title="goalCard"
			>
				<h5 class="h5 dark:text-black font-bold">{goal.title}</h5>
				<p class="mt-3 dark:text-black text-sm">{goal.description}</p>
			</button>
		{/each}
	</div>
</section>
