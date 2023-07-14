<script lang="ts">
	import { onMount } from 'svelte';
	import { getStartedData } from '../stores/Data';

	let sliderValue: string;

	function updateSliderValue(event: Event) {
		const updatedRow = { title: 'Körpergröße', value: parseInt(sliderValue) };
		getStartedData.update((data) => {
			return data.map((item) => {
				if (item.title === 'Körpergröße') {
					return updatedRow;
				}
				return item;
			});
		});
		console.log($getStartedData);
	}

	function startValue() {
		sliderValue = $getStartedData[1].value === '' ? '180' : $getStartedData[1].value.toString();
		$getStartedData[1].value = sliderValue;
	}

	onMount(startValue);
</script>

<section class="h-80">
	<div class="sm:my-12 my-8">
		<h2 class="h2 text-center mb-7" title="heightValue">{sliderValue} cm</h2>
		<div class="w-full h-64 flex items-center justify-center">
			<input
				type="range"
				min="140"
				max="220"
				bind:value={sliderValue}
				on:input={updateSliderValue}
				title="sizeSlider"
			/>
		</div>
	</div>
</section>
