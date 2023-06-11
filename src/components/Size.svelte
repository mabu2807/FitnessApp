<script lang="ts">
	import { onMount } from 'svelte';
	import { getStartedData } from '../routes/getStarted/Data'; 

	let sliderValue:string;

	function updateSliderValue(event: Event) {
		sliderValue = (event.target as HTMLInputElement).value;
		$getStartedData[1].value = sliderValue;
	}

	function startValue() {
		sliderValue = $getStartedData[1].value === '' ? '175' : $getStartedData[1].value;
		$getStartedData[1].value = sliderValue;
	}

	onMount(startValue);
</script>

<section class="h-80">

	<div class="sm:my-12 my-8">
		<h2 class="h2 text-center mb-7">{sliderValue} cm</h2>
	
		<input
			type="range"
			min="140"
			max="220"
			bind:value={sliderValue}
			on:input={updateSliderValue}
		/>

</div>


</section>
