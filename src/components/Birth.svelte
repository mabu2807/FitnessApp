<script lang="ts">
	import { getStartedData } from "../routes/getStarted/Data";
	import { onMount } from 'svelte';

	let dob:string;

	function updateDob(event:Event) {
		dob = (event.target as HTMLInputElement).value;
		$getStartedData[3].value = dob;
	}

	function startValue() {
		dob = $getStartedData[3].value === '' ? '2001-12-09' : $getStartedData[3].value;
		$getStartedData[3].value = dob;
	}

	onMount(startValue);
</script>

<section class="h-80">
	<div class="sm:my-12 my-8">
		<input class="card card-hover bg-white dark:bg-white dark:text-black w-48 h-10 sm:text-xl text-lg p-5" type="date" id="dob" bind:value={dob} on:input={updateDob} />

	</div>
</section>


