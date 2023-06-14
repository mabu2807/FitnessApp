<script lang="ts">
	import { getStartedData, lockedGender } from '../routes/getStarted/Data';

	let genderPics = [
		// fa-solid fa-person fa-lg
		{ title: 'männlich', imgSrc: 'man.png' },
		// fa-solid fa-person-dress fa-lg
		{ title: 'weiblich', imgSrc: 'woman.png' },
		{ title: 'divers', imgSrc: 'Adrain.png' }
	];

	function selectCard(value: string) {
		$getStartedData[4].value = value;
		lockedGender.set(false);
	}
</script>

<section class="h-80">
	<div class="flex justify-center md:gap-6 sm:gap-4 gap-2 sm:my-12 my-8">
		{#each genderPics as pic}
			<button
				class="card card-hover flex flex-col items-center justify-center border p-4 w-52 h-42 {$getStartedData[4]
					.value === pic.title
					? 'bg-tertiary-400 border-tertiary-700 dark:bg-primary-500 dark:border-primary-700'
					: 'bg-white dark:bg-white border-black'}"
				on:click={() => selectCard(pic.title)}
			>
				<img class="aspect-[1/1] w-20" src={pic.imgSrc} alt="" />
				<p class="mt-3 dark:text-black">{pic.title}</p>
			</button>
		{/each}
	</div>
</section>
