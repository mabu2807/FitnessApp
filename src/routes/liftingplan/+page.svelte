<!-- App.svelte -->
<script lang="ts">
	import { type ModalComponent, type ModalSettings, modalStore } from '@skeletonlabs/skeleton';
	import WorkoutModal from '../../components/WorkoutModal.svelte';

	const modalWorkout: ModalComponent = {
		ref: WorkoutModal
	};

	function modalPlan(): void {
		const modal: ModalSettings = {
			type: 'component',
			component: modalWorkout
		};
		modalStore.trigger(modal);
	}

	const testPlans = [
		{
			id: '0',
			title: 'Trainingsplan 1: Muskelaufbau',
			description: 'Ein intensiver Trainingsplan für Fettverbrennung und Ausdauersteigerung.',
			image: 'plan1.jpg'
		},
		{
			id: '1',
			title: 'Trainingsplan 2: Fettverbrennung',
			description: 'Ein intensiver Trainingsplan für Fettverbrennung und Ausdauersteigerung.',
			image: 'plan2.jpg'
		},
		{
			id: '2',
			title: 'Trainingsplan 3: Flexibilität',
			description: 'Ein flexibler Trainingsplan für Ganzkörperfitness und Beweglichkeit.',
			image: 'plan3.jpg'
		}
	];
</script>

<div class="bg-gradient">
	<section class="mt-24 p-16 flex items-center text-center justify-center flex-col">
		<h2 class="h2 font-medium">Alle Trainingspläne dieser Sportart</h2>
		<h5 class="h5 mt-4">Wähle das Workout, welches am besten zu dir und deinem Bizeps passt!</h5>
	</section>
	<section class="flex flex-wrap justify-center gap-x-6 mx-10 mb-12">
		{#each testPlans as plan}
			<div class="card md:w-80 w-60 mb-8 bg-success-400 p-3">
				<img src={plan.image} alt={plan.title} class="md:h-72 h-52 rounded-md object-cover" />
				<div class="m-3">
					<h3 class="h3 mb-3 font-bold">{plan.title}</h3>
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



<style>
	.bg-gradient {
		background-image: radial-gradient(
				at 0% 0%,
				rgba(var(--color-secondary-500) / 0.33) 0px,
				transparent 50%
			),
			radial-gradient(at 98% 1%, rgba(var(--color-secondary-200) / 0.33) 0px, transparent 50%);
	}
</style>
