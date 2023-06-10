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

<section>
		<select
			class="select w-1/3 mt-3 mb-10"
			value={sliderValue}
			on:input={updateSliderValue}
		>
		<option value="Magerquark">Magerquark</option>
					<option value="Stets bemüht">Stets bemüht</option>
					<option value="Solide">Solide</option>
					<option value="ADHS">ADHS</option>
					<option value="Erlege Bären mit der bloßen Hand">Erlege Bären mit der bloßen Hand</option>
</select>

</section>

