<script lang="ts">
	import { Step, Stepper } from '@skeletonlabs/skeleton';
	import Weighttraining from '../../components/Weighttraining.svelte';
	import Yoga from '../../components/Yoga.svelte';
	import Cardio from '../../components/Cardio.svelte';
	import Chooser from '../../components/Chooser.svelte';
	import { selectedCategory } from '../../stores/Data';
	import { weightData, cardiodistance } from '../../stores/Data';	
	let cdistance: string
	cardiodistance.subscribe((value) =>{cdistance = value})
	async function handleComplete() {
		weightData.subscribe(data => {
        data.forEach(item => {
            const title = item.title;
            const weight = item.weight;
            const rep = item.rep;
            const date = item.date;

            console.log(title, weight, rep, date);
        });
    });
		location.href = '/overview';
		await fetch('/progress', {
			method: 'POST'
		})
	}
</script>

<section class="flex justify-center pt-32 pb-20 dark:bg-surface-800">
	<div class="card w-3/4 m-10 shadow-xl sm:p-8 p-4 items-center bottom-gradient">
		<Stepper
			buttonBack="btn variant-ghost hover:bg-tertiary-400 dark:hover:bg-primary-400"
			buttonNext="btn variant-filled hover:bg-tertiary-500 dark:hover:bg-primary-500"
			on:complete={() => handleComplete()}
			>
			<Step class="text-center">
				<svelte:fragment slot="header"
					><h4 class="h4 mt-10">
						In welcher Sportart möchtest du deinen asozialen Fortschritt tracken?
					</h4></svelte:fragment
				>
				<Chooser />
			</Step>
			<Step class="text-center">
				<svelte:fragment slot="header"
					><h4 class="h4 mt-10">
						Tracke deine Aktivitäten im Bereich {$selectedCategory}!
					</h4></svelte:fragment
				>
				{#if $selectedCategory == 'Krafttraining'}
					<Weighttraining />
				{/if}
				{#if $selectedCategory == 'Ausdauer'}
					<Cardio />
				{/if}
				{#if $selectedCategory == 'Yoga'}
					<Yoga />
				{/if}
			</Step>
		</Stepper>
		<p>{cdistance}</p>
	</div>
</section>

<style>
	.bottom-gradient {
		background-image: radial-gradient(
				at 0% 99%,
				rgba(var(--color-secondary-300) / 0.23) 0px,
				transparent 70%
			),
			radial-gradient(at 100% 100%, rgba(var(--color-success-200) / 0.19) 0px, transparent 30%);
	}
</style>
