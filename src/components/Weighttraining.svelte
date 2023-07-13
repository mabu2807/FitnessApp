<script lang="ts">
	import { weightData } from '../stores/Data';
	import { onMount } from 'svelte';
	let now = new Date(),
		month,
		day,
		year;
	
	let dateString: string;

	function updateValues() {
		weightData.update((data) => {
  			return data.map((item) => ({ ...item, date: "afdsad" }));
		});
	}

	onMount(() => {
		(month = '' + (now.getMonth() + 1)), (day = '' + now.getDate()), (year = now.getFullYear());

		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;

		dateString = [year, month, day].join('-');
	});
</script>

<section>
	<input
		class="input bg-success-400 dark:bg-surface-800 text-black placeholder-secondary-400 dark:text-white dark:placeholder-white px-3 py-1 lg:text-base text-sm w-auto mt-3"
		type="date"
		bind:value={dateString}
		on:input={updateValues}
	/>
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
								on:input={updateValues}
							/>
						</div>
						<div class="flex flex-col">
							<p class="lg:text-base text-sm">Gewicht in kg</p>
							<input
								class="input bg-success-400 dark:bg-surface-800 text-black placeholder-secondary-400 dark:text-white dark:placeholder-white px-3 py-1 lg:text-base text-sm"
								type="number"
								placeholder="..."
								bind:value={exercise.weight}
								on:input={updateValues}
							/>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
