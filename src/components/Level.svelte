<script lang="ts">
	import { onMount } from 'svelte';
	import { getStartedData } from '../routes/getStarted/Data';

	let sliderValue: string;

	function updateSliderValue(event:Event) {
		sliderValue = (event.target as HTMLInputElement).value;
		$getStartedData[5].value = sliderValue;
	}

	function startValue() {
		sliderValue = $getStartedData[5].value === '' ? 'Solide' : $getStartedData[5].value;
		$getStartedData[5].value = sliderValue;
	}

	onMount(startValue);
</script>

<section class="h-80">
	<div class="sm:my-12 my-8">
		<select
			class="select card card-hover bg-white dark:bg-white text-black dark:text-black w-48 h-10 sm:text-lg text-base"
			value={sliderValue}
			on:input={updateSliderValue}
		>
		<option value="Magerquark">Magerquark</option>
					<option value="Stets bemüht">Stets bemüht</option>
					<option value="Solide">Solide</option>
					<option value="ADHS">ADHS</option>
					<option value="Erlege Bären mit der bloßen Hand">Erlege Bären mit der bloßen Hand</option>
</select>
</div>

</section>

