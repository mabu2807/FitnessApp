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

<div class="red-gradient">
	<section class="mt-24 p-12 flex items-center justify-center flex-col">
		<h2 class="h2 font-bold">Alle Trainingspläne dieser Sportart</h2>
		<p class="text-lg mt-3">Wähle das Workout, welches am besten zu dir und deinem Bizeps passt!</p>
	</section>
	<section class="flex flex-wrap justify-center gap-6 mx-10 mb-8">
		{#each testPlans as plan}
			<div class="card md:w-80 w-60 mb-8 bg-white p-3">
				<img src={plan.image} alt={plan.title} class="md:h-72 h-52 rounded-md object-cover" />
				<div class="m-3">
					<h3 class="h3 mb-3 font-bold">{plan.title}</h3>
					<p class="mb-3 text-sm">{plan.description}</p>
				</div>
				<button
					on:click={modalPlan}
					class="btn variant-filled text-sm p-2 my-2 transition duration-400 hover:bg-tertiary-500 dark:hover:bg-primary-500"
				>
					Mehr Details...
				</button>
			</div>
		{/each}
	</section>
</div>

<!-- 
<style>
	

	.select-button {
		font-size: 16px;
		padding: 8px 16px;
		margin-top: 10px;
		border: none;
		background-color: #393e46;
		color: #ffffff;
		border: 1px solid #393e46;
		border-radius: 4px;
		cursor: pointer;
	}

	.select-button:hover {
		border: none;
		background-color: #ffffff;
		color: #393e46;
		border: 1px solid #393e46;
		border-radius: 4px;
		cursor: pointer;
		transition: 0.5s ease all;
	}

	.info-container {
		background-color: #f5f5f5;
		padding: 20px;
		border-radius: 8px;
		text-align: center;

		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	.info-title {
		font-size: 24px;
		margin-bottom: 10px;
	}

	.info-text {
		font-size: 16px;
		margin-bottom: 20px;
	}
	.button-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.subscribe-button {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 18px;
		padding: 10px 20px;
		border: none;
		background-color: #fffdfd;
		color: #393e46;
		border-radius: 7px;
		cursor: pointer;
		border: 2px solid #393e46;
		overflow: hidden;
		margin-bottom: 20px;
		transition: background-color 0.3s ease;
		animation: shadow-animation 2s infinite linear;
	}

	@keyframes shadow-animation {
		0% {
			box-shadow: 0 4px 10px rgba(157, 157, 157, 0.518);
		}
		25% {
			box-shadow: 6px 10px 20px rgba(0, 0, 0, 0.341);
		}
		50% {
			box-shadow: 4px 18px 25px rgba(0, 0, 0, 0.518);
		}
		75% {
			box-shadow: 6px 10px 20px rgba(0, 0, 0, 0.341);
		}
		100% {
			box-shadow: 0px 4px 10px rgba(157, 157, 157, 0.518);
		}
	}

	.subscribe-button:hover {
		background-color: #393e46;
		color: white;
	}
	.subscribe-button:hover .plus-icon {
		background-color: white;
		color: #393e46;
		transition: all 0.2s ease;
	}

	.subscribe-container-plus {
		margin-left: 20px;
		color: #393e46;
	}

	.subscribe-text {
		font-size: 18px;
		font-family: 'Lato', sans-serif;
	}

	.plus-icon {
		display: inline-block;
		width: 20px;
		height: 20px;
		background-color: #393e46;
		color: white;

		border-radius: 50%;
		position: relative;
		margin-left: 5px;
		transform: translateX(-50%);
		animation: plus-icon-animation 2s infinite alternate;
	}

	@keyframes plus-icon-animation {
		0% {
			transform: translateX(-50%) scale(1);
		}
		50% {
			transform: translateX(-50%) scale(1.2);
		}
		100% {
			transform: translateX(-50%) scale(1);
		}
	}

	.category {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;
		background-color: #f5f5f5;
		font-weight: bold;
		margin: 20px 0;
		text-align: center;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	.category-title {
		font-size: 28px;
	}

	.category-description {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-size: 18px;
		margin-bottom: 5px;
		text-align: center;
		color: rgb(144, 144, 144);
	}

	.plan-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 20px;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	.plan-card {
		width: calc(33.33% - 20px);
		margin-bottom: 20px;
		background-color: #ffffff;
		border-radius: 8px;
		padding: 20px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.plan-image {
		width: 100%;
		height: 270px;
		border-radius: 4px;
	}

	.plan-content {
		margin-top: 10px;
	}

	.plan-title {
		font-size: 18px;
		margin-bottom: 10px;
	}

	.plan-description {
		font-size: 14px;
		margin-bottom: 10px;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.footer-n {
		background-color: #393e46;
		color: #ffffff;

		padding: 44px 0;
		width: 100%;
		text-align: center;
		margin-top: 5%;
	}
	.footer {
		background-color: #393e46;
		color: #ffffff;

		padding: 44px 0;
		width: 100%;
		text-align: center;
		margin-top: 18%;
	}

	.footer-content {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.footer-text {
		font-size: 14px;
		margin: 0;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	.plan-card {
		width: calc(33.33% - 20px);
		margin-bottom: 20px;
		background-color: #ffffff;
		border-radius: 8px;
		padding: 20px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.plan-image {
		width: 100%;
		height: 270px;
		border-radius: 4px;
	}

	.plan-content {
		margin-top: 10px;
	}

	.plan-title {
		font-size: 18px;
		margin-bottom: 10px;
	}

	.plan-description {
		font-size: 14px;
		margin-bottom: 10px;
		overflow: hidden;
		text-overflow: ellipsis;
</style> -->

<style>
	.red-gradient {
		background-image: radial-gradient(
				at 0% 0%,
				rgba(var(--color-secondary-500) / 0.33) 0px,
				transparent 50%
			),
			radial-gradient(at 98% 1%, rgba(var(--color-error-500) / 0.33) 0px, transparent 50%);
	}
</style>
