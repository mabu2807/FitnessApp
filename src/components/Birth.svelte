<script lang="ts">
	import { getStartedData } from '../stores/Data';
	import { onMount } from 'svelte';

	let dob: string;

	function updateDob(event: Event) {
		const updatedRow = { title: 'Geburtsdatum', value: dob };
		getStartedData.update((data) => {
			return data.map((item) => {
				if (item.title === 'Geburtsdatum') {
					return updatedRow;
				}
				return item;
			});
		});
		console.log($getStartedData);
	}

	function startValue() {
		dob = $getStartedData[3].value === '' ? '2001-09-11' : $getStartedData[3].value.toString();
		$getStartedData[3].value = dob;
	}

	onMount(startValue);
</script>

<section class="h-80">
	<div class="sm:my-12 my-8">
		<input
			class="card card-hover bg-success-400 dark:bg-success-400 dark:text-black w-48 h-10 sm:text-xl text-lg p-5"
			type="date"
			id="dob"
			title="dob picker"
			bind:value={dob}
			on:input={updateDob}
		/>
	</div>
</section>
