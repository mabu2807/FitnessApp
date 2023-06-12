<script lang="ts">
	import { getStartedData } from '../routes/getStarted/Data';

	let goalsBackend = [
		{ title: 'Lose Weight', description: 'Gewicht reduzieren und Fett abbauen' },
		{ title: 'Gain Muscle', description: 'Muskeln aufbauen und Körper definieren' },
		{ title: 'Stay Fit', description: 'Allgemeine Fitness erhalten und verbessern' }
	];

	function selectCard(value:string) {
		$getStartedData[0].value = value;
	}
</script>

<section class="h-80">

	<div class="flex justify-center md:gap-6 sm:gap-4 gap-2 sm:my-12 my-8">
		{#each goalsBackend as goal}
			<button
				class="card card-hover flex flex-col items-center justify-center p-3 border w-52 h-52 {$getStartedData[0].value === goal.title ? "bg-tertiary-400 border-tertiary-700 dark:bg-primary-500 dark:border-primary-700" : "bg-white dark:bg-gray-300 dark:text-white border-black "}"
				on:click={() => selectCard(goal.title)}
			>
				<h5 class="h5 dark:text-black font-bold">{goal.title}</h5>
				<p class="mt-3 dark:text-black text-sm">{goal.description}</p>
	</button>
		{/each}
	</div>

</section>
