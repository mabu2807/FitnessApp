<script lang="ts">
	import { getStartedData } from "../routes/getStarted/Data";
	import { onMount } from 'svelte';

	let dob;

	function updateDOB(event) {
		dob = event.target.value;
		$getStartedData[3].value = dob;
	}

	function startValue() {
		dob = $getStartedData[3].value === '' ? '2001-09-11' : $getStartedData[3].value;
		$getStartedData[3].value = dob;
	}

	onMount(startValue);
</script>

<section class="h-80">
		<input class="card card-hover bg-white dark:bg-white dark:text-black w-30 h-10 text-xl p-5 my-5" type="date" id="dob" bind:value={dob} on:input={updateDOB} />


</section>


