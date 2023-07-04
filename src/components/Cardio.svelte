<script lang="ts">
	import { onMount } from 'svelte';
	import { cardioData } from '../stores/Data';
	

	let cardioValue: string;

	function updateSliderValue(event: Event) {
		cardioValue = (event.target as HTMLInputElement).value;
		$cardioData.title = cardioValue;
	}

	function startValue() {
		cardioValue = $cardioData.title === '' ? 'Laufen' : $cardioData.title;
		$cardioData.title = cardioValue;
	}

	onMount(startValue);
</script>

<section class="h-80">
	<div class="flex flex-col items-center sm:my-12 my-8 px-5">
		<select
			class="select card card-hover bg-success-400 dark:bg-success-400 text-black dark:text-black w-48 h-10 sm:text-lg text-base mb-10"
			value={cardioValue}
			on:input={updateSliderValue}
		>
			<option class="text-black dark:text-white" value="Laufen">Laufen</option>
			<option class="text-black dark:text-white" value="Radfahren">Radfahren</option>
			<option class="text-black dark:text-white" value="Schwimmen">Schwimmen</option>
		</select>

		<div class="flex md:flex-row flex-col justify-center gap-6 mb-4">
			<div class="flex flex-col">
				<p class="lg:text-lg text-base mb-3">Distanz in km</p>
				<input
					class="input bg-success-400 dark:bg-surface-800 text-black placeholder-secondary-400 dark:text-white dark:placeholder-white px-3 py-1 mb-2 lg:text-base text-sm"
					type="number"
					placeholder="..."
					bind:value={$cardioData.distance}
				/>
			</div>
			<div class="flex flex-col">
				<p class="lg:text-lg text-base mb-3">Zeit in min</p>
				<input
					class="input bg-success-400 dark:bg-surface-800 text-black placeholder-secondary-400 dark:text-white dark:placeholder-white px-3 py-1 lg:text-base text-sm"
					type="number"
					placeholder="..."
					bind:value={$cardioData.time}
				/>
			</div>
		</div>
	</div>
</section>
