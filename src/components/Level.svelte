<script lang="ts">
	import { onMount } from 'svelte';
	import { getStartedData } from '../stores/Data';

	let sliderValue: string;

	function updateSliderValue(event: Event) {
		sliderValue = (event.target as HTMLInputElement).value;
		let intValue: number;
		switch (sliderValue) {
			case 'Magerquark':
				intValue = 1;
				break;
			case 'Stets bemüht':
				intValue = 2;
				break;
			case 'Solide':
				intValue = 3;
				break;
			case 'ADHS':
				intValue = 4;
				break;
			case 'Erlege Bären mit der bloßen Hand':
				intValue = 5;
				break;
			default:
				intValue = 0;
				break;
		}
		const updatedRow = { title: 'Aktivitätslevel', value: intValue };
		getStartedData.update((data) => {
			return data.map((item) => {
				if (item.title === 'Aktivitätslevel') {
					return updatedRow;
				}
				return item;
			});
		});
		console.log($getStartedData);
	}

	function startValue() {
		sliderValue = $getStartedData[5].value.toString();
	}

	onMount(startValue);
</script>

<section class="h-80">
	<div class="sm:my-12 my-8">
		<select
			class="select card card-hover bg-success-400 dark:bg-success-400 text-black dark:text-black w-48 h-10 sm:text-lg text-base"
			value={sliderValue}
			on:input={updateSliderValue}
		>
			<option class="text-black dark:text-white" value="Magerquark">Magerquark</option>
			<option class="text-black dark:text-white" value="Stets bemüht">Stets bemüht</option>
			<option class="text-black dark:text-white" value="Solide">Solide</option>
			<option class="text-black dark:text-white" value="ADHS">ADHS</option>
			<option class="text-black dark:text-white" value="Erlege Bären mit der bloßen Hand"
				>Erlege Bären mit der bloßen Hand</option
			>
		</select>
	</div>
</section>
