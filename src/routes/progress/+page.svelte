<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Chart from 'chart.js/auto';
	import Head from '../../components/Head.svelte';

	let trainingPlans = [
		{
			name: 'Krafttraining',
			exercises: [
				{
					name: 'Übung 1',
					weight: [
						{ x: 3, y: 100 },
						{ x: 5, y: 90 },
						{ x: 7, y: 85 },
						{ x: 1, y: 110 }
					]
				},
				{
					name: 'Übung 2',
					weight: [
						{ x: 5, y: 20 },
						{ x: 10, y: 15 },
						{ x: 15, y: 12 },
						{ x: 25, y: 9 },
						{ x: 27, y: 5 }
					]
				},
				{
					name: 'Übung 3',
					weight: [
						{ x: 5, y: 20 },
						{ x: 10, y: 15 },
						{ x: 15, y: 12 },
						{ x: 25, y: 9 },
						{ x: 27, y: 5 }
					]
				},
				{
					name: 'Übung 4',
					weight: [
						{ x: 5, y: 20 },
						{ x: 10, y: 15 },
						{ x: 15, y: 12 },
						{ x: 25, y: 9 },
						{ x: 27, y: 5 }
					]
				}
			]
		},
		{
			name: 'Ausdauer',
			exercises: [
				{
					name: 'Übung 1',
					weight: [
						{ x: 30, y: 15 },
						{ x: 40, y: 20 }
					]
				},
				{
					name: 'Übung 2',
					weight: [
						{ x: 15, y: 7 },
						{ x: 25, y: 12 }
					]
				}
			]
		}
	];

	let selectedTrainingPlan = trainingPlans[0];
	let weightInput: Array<Array<string>> = trainingPlans.map((plan) => plan.exercises.map(() => ''));
	let weightInput2: Array<Array<string>> = trainingPlans.map((plan) =>
		plan.exercises.map(() => '')
	);

	let charts: any[] = [];

	function createChart(canvas: any) {
		const ctx = canvas.getContext('2d');
		let chart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: [],
				datasets: [
					{
						label: 'Gewicht',
						data: [],
						borderColor: 'rgb(54, 162, 235)',
						backgroundColor: 'rgba(54, 162, 235, 0.2)',
						borderWidth: 1
					}
				]
			},
			options: {
				responsive: true,
				scales: {
					x: {
						type: 'linear',
						position: 'bottom',
						title: {
							display: true,
							text: 'Wiederholungen'
						}
					},
					y: {
						title: {
							display: true,
							text: 'Gewicht'
						}
					}
				}
			}
		});

		return chart;
	}

	function updateChart(chart: any, data: any) {
		chart.data.datasets[0].data = data;
		chart.update();
	}

	function addWeight(planIndex: number, exerciseIndex: number) {
		const weight = parseFloat(weightInput[planIndex][exerciseIndex]);
		const weight2 = parseFloat(weightInput2[planIndex][exerciseIndex]);

		if (!isNaN(weight) && !isNaN(weight2)) {
			trainingPlans[planIndex].exercises[exerciseIndex].weight.push({ x: weight, y: weight2 });
			const chartIndex = planIndex * trainingPlans[0].exercises.length + exerciseIndex;
			updateChart(charts[chartIndex], trainingPlans[planIndex].exercises[exerciseIndex].weight);
			console.log(trainingPlans[planIndex].exercises[exerciseIndex].weight);
		}
		weightInput[planIndex][exerciseIndex] = '';
		weightInput2[planIndex][exerciseIndex] = '';
	}

	function updateWeight(event: any) {
		const weight = parseFloat(event.target.value);
		const planIndex = parseInt(event.target.dataset.planIndex);
		const exerciseIndex = parseInt(event.target.dataset.exerciseIndex);

		if (!isNaN(weight)) {
			(trainingPlans[planIndex].exercises[exerciseIndex].weight as any) = weight;
			updateChart(
				charts[planIndex * trainingPlans.length + exerciseIndex],
				trainingPlans[planIndex].exercises[exerciseIndex].weight
			);
		}
	}

	let selectedExerciseIndex = 0;

	onMount(() => {
		const containers = document.querySelectorAll('.exercise-container');
		containers.forEach((container, index) => {
			const canvas = container.querySelector('canvas');
			const chart = createChart(canvas);
			charts.push(chart);
			const trainingPlanIndex = Math.floor(index / trainingPlans[0].exercises.length);
			const exerciseIndex = index % trainingPlans[0].exercises.length;
			updateChart(chart, trainingPlans[trainingPlanIndex].exercises[exerciseIndex].weight);
		});

		trainingPlans.forEach((plan, planIndex) => {
			plan.exercises.forEach((exercise, exerciseIndex) => {
				const chartIndex = planIndex * trainingPlans[0].exercises.length + exerciseIndex;
				updateChart(charts[chartIndex], exercise.weight);
			});
		});
	});

	onDestroy(() => {
		charts.forEach((chart) => {
			chart.destroy();
		});
	});

	function toggleChartType(planIndex: any, exerciseIndex: any) {
		const chartIndex = planIndex * trainingPlans[0].exercises.length + exerciseIndex;
		const chart = charts[chartIndex];

		// Ändere den Diagrammtyp von 'line' zu 'bar' oder umgekehrt
		chart.config.type = chart.config.type === 'line' ? 'bar' : 'line';

		// Aktualisiere das Diagramm, um die Änderungen anzuzeigen
		chart.update();
	}
</script>

<Head />

<section class="text-center w-full mx-auto px-6 py-10 md:py-16 mt-24 top-gradient">
	<h2 class="h2 mb-5">Verfolge deine Trainingspläne</h2>
	<p class="text-sm md:text-lg mb-12">
		Nutze die Möglichkeit deinen Trainingsplan zu verfolgen und deine entdecke deine Stärken und
		Schwächen!
	</p>
	<div class="flex justify-center">
		<div class="w-72 h-1 rounded-full bg-black dark:bg-white" />
	</div>
</section>

<div class="bottom-gradient pt-7 pb-14">
	{#each trainingPlans as trainingPlan, planIndex}
		<!-- selection wrapper -->
		<section class="flex justify-center items-center mb-14 flex-col text-center">
			<h2 class="md:h2 h1">{trainingPlan.name}</h2>
			<div class="grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-6 lg:my-10 md:my-8 my-6 mx-12">
				{#each trainingPlan.exercises as exercise, exerciseIndex}
					<!-- exercise-container class -->
					<div
						class="card bg-success-400 p-3 exercise-container"
						on:keydown={() => {
							selectedTrainingPlan = trainingPlan;
							selectedExerciseIndex = exerciseIndex;
						}}
					>
						<h3 class="h3 mt-3 mb-5">{exercise.name}</h3>
						<div class="p-3">
							<input
								class="input bg-secondary-100 text-black placeholder-secondary-400 dark:text-white dark:placeholder-white px-3 py-1 mb-2 lg:text-base text-sm"
								type="number"
								placeholder="Wiederholungen"
								bind:value={weightInput[planIndex][exerciseIndex]}
							/>
							<input
								class="input bg-secondary-100 text-black placeholder-secondary-400 dark:text-white dark:placeholder-white px-3 py-1 lg:text-base text-sm"
								type="number"
								placeholder="Gewicht"
								bind:value={weightInput2[planIndex][exerciseIndex]}
							/>
							<div class="mt-3 flex justify-between gap-2">
								<button
									class="btn variant-filled overflow-hidden lg:text-base text-sm hover:bg-primary-500 dark:hover:bg-primary-500"
									on:click={() => addWeight(planIndex, exerciseIndex)}>Hinzufügen</button
								>
								<button
									class="btn variant-soft overflow-hidden lg:text-base text-sm hover:bg-primary-500 dark:hover:bg-primary-500"
									on:click={() => toggleChartType(planIndex, exerciseIndex)}
									>Diagrammtyp ändern</button
								>
							</div>
							<canvas class="card bg-secondary-100 text-black dark:text-white mt-10" />
						</div>
					</div>
				{/each}
			</div>
		</section>
	{/each}
</div>

<style>
	.top-gradient {
		background-image: radial-gradient(
				at 0% 0%,
				rgba(var(--color-secondary-500) / 0.33) 0px,
				transparent 50%
			),
			radial-gradient(at 98% 1%, rgba(var(--color-secondary-200) / 0.33) 0px, transparent 50%);
	}
	.bottom-gradient {
		background-image: radial-gradient(
				at 0% 99%,
				rgba(var(--color-secondary-500) / 0.23) 0px,
				transparent 70%
			),
			radial-gradient(at 100% 100%, rgba(var(--color-success-400) / 0.19) 0px, transparent 30%);
	}

</style>
