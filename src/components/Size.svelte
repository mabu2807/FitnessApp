<script lang="ts">
	import { onMount } from 'svelte';
	import { getStartedData } from '../routes/getStarted/Data'; 

	let sliderValue;

	function updateSliderValue(event) {
		sliderValue = event.target.value;
		$getStartedData[1].value = sliderValue;
	}

	function startValue() {
		sliderValue = $getStartedData[1].value === '' ? '175' : $getStartedData[1].value;
		$getStartedData[1].value = sliderValue;
	}

	onMount(startValue);
</script>

<section>

	
		<h2 class="h2 text-center mt-12 mb-7">{sliderValue} cm</h2>
	

	<div class="mb-7">
		<input
			type="range"
			min="140"
			max="220"
			bind:value={sliderValue}
			on:input={updateSliderValue}
		/>
	</div>


</section>
