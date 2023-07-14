<script lang="ts">
	import { getStartedData } from '../stores/Data';
	import { onMount } from 'svelte';

	let picsource = 'final15.png';
	let sliderValue: string;

	function updateSliderValue(event: Event) {
		$getStartedData[2].value = sliderValue;
		sliderValue = (event.target as HTMLInputElement).value;
		let val = parseInt((event.target as HTMLInputElement).value);
		if (val < 60) {
			picsource = 'final5.png';
		} else if (val < 70) {
			picsource = 'final10.png';
		} else if (val < 80) {
			picsource = 'final15.png';
		} else if (val < 90) {
			picsource = 'final20.png';
		} else if (val < 100) {
			picsource = 'final25.png';
		} else if (val < 110) {
			picsource = 'final30.png';
		} else if (val < 120) {
			picsource = 'final35.png';
		} else {
			picsource = 'final40.png';
		}
		const updatedRow = { title: 'Gewicht', value: parseInt(sliderValue) };
		getStartedData.update((data) => {
			return data.map((item) => {
				if (item.title === 'Gewicht') {
					return updatedRow;
				}
				return item;
			});
		});
		console.log($getStartedData);
	}
	function startValue() {
		sliderValue = $getStartedData[2].value.toString();
	}

	onMount(startValue);
</script>

<section class="h-80">
	<div class="flex justify-center md:gap-6 sm:gap-4 gap-2 sm:my-12 my-8">
		<img class="w-24" src={picsource} alt="person" />
		<div class="flex items-center justidy-center w-28">
			<h2 class="h2 flex items-center" title="weightValue">{sliderValue} kg</h2>
		</div>
	</div>

	<input
		title="weightSlider"
		type="range"
		min="50"
		max="130"
		bind:value={sliderValue}
		on:input={updateSliderValue}
	/>
</section>
