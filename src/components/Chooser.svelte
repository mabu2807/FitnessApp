<script lang="ts">
	import { onMount } from 'svelte';
	import { selectedCategory } from '../stores/Data';

	let chooserValue: string;

	function updateSliderValue(event: Event) {
		chooserValue = (event.target as HTMLInputElement).value;
		$selectedCategory = chooserValue;
	}

	function startValue() {
		chooserValue = $selectedCategory === '' ? 'Krafttraining' : $selectedCategory;
		$selectedCategory = chooserValue;
	}

	onMount(startValue);
</script>

<section class="h-80">
	<div class="sm:my-12 my-8">
		<select
			class="select card card-hover bg-success-400 dark:bg-success-400 text-black dark:text-black w-48 h-10 sm:text-lg text-base"
			value={chooserValue}
			on:input={updateSliderValue}
		>
			<option class="text-black dark:text-white" value="Krafttraining">Krafttraining</option>
			<option class="text-black dark:text-white" value="Ausdauer">Ausdauer</option>
			<option class="text-black dark:text-white" value="Yoga">Yoga</option>
		</select>
	</div>
</section>
