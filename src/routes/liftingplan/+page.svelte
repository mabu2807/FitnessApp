<!-- App.svelte -->
<script lang="ts">
	import { type ModalComponent, type ModalSettings, modalStore } from '@skeletonlabs/skeleton';
	import WorkoutModal from '../../components/WorkoutModal.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let exerciseTemplates = data.exerciceTemplates;

	const modalWorkout: ModalComponent = {
		ref: WorkoutModal,
		props: {
			exerciseTemplates
		},
	};

	function modalPlan(): void {
		const modal: ModalSettings = {
			type: 'component',
			component: modalWorkout
		};
		modalStore.trigger(modal);
	}
</script>

<div class="bg-white dark:bg-surface-800">
	<section class="mt-20 p-16 flex items-center text-center justify-center flex-col">
		<h2 class="h2 font-medium">Alle Trainingspläne dieser Sportart</h2>
		<h5 class="h5 mt-4">Wähle das Workout, welches am besten zu dir und deinem Bizeps passt!</h5>
	</section>
	<section class="flex flex-wrap justify-center gap-x-6 mx-10 pb-28">
		{#each data.trainingPlans as plan}
			<div class="card md:w-80 w-60 mb-8 bg-success-400 dark:bg-surface-500 p-3">
				<img src={plan.image} alt={plan.name} class="md:h-72 h-52 w-full rounded-md object-cover" />
				<div class="m-3">
					<h3 class="h3 mb-3 font-bold">{plan.name}</h3>
					<p class="mb-3 text-sm">{plan.description}</p>
				</div>
				<button
					on:click={modalPlan}
					class="btn variant-filled text-sm p-2 my-2 hover:bg-tertiary-500 dark:hover:bg-primary-500"
				>
					Mehr Details...
				</button>
			</div>
		{/each}
	</section>
</div>


