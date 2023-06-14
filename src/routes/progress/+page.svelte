<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Chart from 'chart.js/auto';
	import Head from '../../components/Head.svelte';
	import Footer from '../../components/Footer.svelte';

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

<section class="text-center w-full mx-auto px-6 py-10 md:py-16 mt-24 red-gradient">
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
						class="card bg-surface-100 p-3 exercise-container"
						on:keydown={() => {
							selectedTrainingPlan = trainingPlan;
							selectedExerciseIndex = exerciseIndex;
						}}
					>
						<h3 class="h3 mt-3 mb-5">{exercise.name}</h3>
						<div class="p-3">
							<input
								class="input bg-white px-3 py-1 mb-2 lg:text-base text-sm dark:placeholder-white"
								type="number"
								placeholder="Wiederholungen"
								bind:value={weightInput[planIndex][exerciseIndex]}
							/>
							<input
								class="input bg-white px-3 py-1 lg:text-base text-sm dark:placeholder-white"
								type="number"
								placeholder="Gewicht"
								bind:value={weightInput2[planIndex][exerciseIndex]}
							/>
							<div class="mt-3 flex justify-between gap-2">
								<button
									class="btn variant-filled overflow-hidden lg:text-base text-sm transition duration-400 hover:bg-tertiary-500 dark:hover:bg-primary-500"
									on:click={() => addWeight(planIndex, exerciseIndex)}>Hinzufügen</button
								>
								<button
									class="btn variant-ghost overflow-hidden lg:text-base text-sm transition duration-400 hover:bg-secondary-500"
									on:click={() => toggleChartType(planIndex, exerciseIndex)}
									>Diagrammtyp ändern</button
								>
							</div>
							<canvas class="card bg-white dark:bg-white mt-10" />
						</div>
					</div>
				{/each}
			</div>
		</section>
	{/each}
</div>

<style>
	.red-gradient {
		background-image: radial-gradient(
				at 0% 0%,
				rgba(var(--color-secondary-500) / 0.33) 0px,
				transparent 50%
			),
			radial-gradient(at 98% 1%, rgba(var(--color-error-500) / 0.33) 0px, transparent 50%);
	}
	.bottom-gradient {
		background-image: radial-gradient(
				at 0% 99%,
				rgba(var(--color-error-500) / 0.23) 0px,
				transparent 50%
			),
			radial-gradient(at 100% 100%, rgba(var(--color-primary-500) / 0.19) 0px, transparent 50%);
	}
	/* .category {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;
		background-color: #f5f5f5;
		font-weight: bold;
		margin-bottom: 40px;
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
	} */

	/* .title-wrapper {
		padding-top: 15px;
		background-color: #f5f5f5;
		text-align: center;
		border-radius: 20px;
	}

	.title-wrapper h2 {
		font-weight: 900;
	}

	.section-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin-bottom: 20px;
		background-color: #f5f5f5;
	}

	.container {
		display: flex;
		display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		gap: 20px;
		padding: 20px;
		width: 100%;
	} */

	/* .exercise-container {
		background-color: rgb(221, 221, 221);
		border-radius: 10px;
		border: 2px solid rgb(169, 169, 169);
		padding: 20px;
		transition: background-color 0.3s ease;
		width: 33%;
	} */

	/* .exc-title-wrapper {
		width: 100%;
		text-align: center;
	} */

	/* h2,
	h3 {
		margin-top: 0;
	} */

	/* .input-container {
		display: flex;
		flex-direction: column;
		width: 100%;
	} */

	/* input[type='number'] {
		width: 100%;
		padding: 10px;
		margin-bottom: 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
	} */

	/* .button-wrapper {
		display: flex;
		justify-content: space-between;

		height: 40px;
	}

	.button {
		background-color: #333;
		color: #fff;
		padding: 3px 60px;
		border: 2px solid #333;
		border-radius: 5px;
		cursor: pointer;
		font-weight: 600;
	}

	.button:hover {
		background-color: white;
		color: #333;
		transition: all 0.4s ease-in-out;
	}

	.typ-button {
		background-color: white;
		color: black;
		padding: 10px 20px;
		border: 2px solid #333;
		border-radius: 5px;
		cursor: pointer;

		font-weight: 600;
	}

	.typ-button:hover {
		color: white;
		background-color: #333;
		transition: all 0.4s ease-in-out;
	} */

	/* canvas {
		margin-top: 20px;
		border: 1px solid #ccc;
		border-radius: 8px;
		color: white;
		background-color: rgb(253, 253, 253);
	} */
</style>
