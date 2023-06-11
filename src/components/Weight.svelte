<script lang="ts">
	import { getStartedData } from '../routes/getStarted/Data';
	import { onMount } from 'svelte';

	let picsource = 'final15.png';
	let sliderValue: string;

	function updateSliderValue(event:Event) {
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
	}
	function startValue() {
		sliderValue = $getStartedData[2].value === '' ? '90' : $getStartedData[2].value;
		$getStartedData[2].value = sliderValue;
	}

	onMount(startValue);
</script>

<section class="h-80">

	<div class="flex justify-center md:gap-6 sm:gap-4 gap-2 sm:my-12 my-8">
			<img class="w-24" src={picsource} alt="person" />
			<h2 class="h2 flex items-center">{sliderValue} kg</h2>
		</div>
	
		<input
			type="range"
			min="50"
			max="130"
			bind:value={sliderValue}
			on:input={updateSliderValue}
		/>



	
</section>

