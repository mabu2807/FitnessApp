<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Chart from 'chart.js/auto';
	import Head from '../../components/Head.svelte';

	let liftingData = [
		{
			name: 'Bankdrücken stehend',
			weight: [
				{ x: 3, y: 100 },
				{ x: 5, y: 90 },
				{ x: 7, y: 85 },
				{ x: 1, y: 110 }
			]
		},
		{
			name: 'Latzug springend',
			weight: [
				{ x: 5, y: 20 },
				{ x: 10, y: 15 },
				{ x: 15, y: 12 },
				{ x: 25, y: 9 },
				{ x: 27, y: 5 }
			]
		},
		{
			name: 'Kniebeuge aufm Tisch',
			weight: [
				{ x: 5, y: 20 },
				{ x: 10, y: 15 },
				{ x: 15, y: 12 },
				{ x: 25, y: 9 },
				{ x: 27, y: 5 }
			]
		},
		{
			name: 'Curls mit Wasserkästen',
			weight: [
				{ x: 5, y: 20 },
				{ x: 10, y: 15 },
				{ x: 15, y: 12 },
				{ x: 25, y: 9 },
				{ x: 27, y: 5 }
			]
		}
	];

	let cardioData = [
		{
			name: 'Laufen',
			weight: [
				{ x: 3, y: 100 },
				{ x: 5, y: 90 },
				{ x: 7, y: 85 },
				{ x: 1, y: 110 }
			]
		},
		{
			name: 'Radfahren',
			weight: [
				{ x: 5, y: 20 },
				{ x: 10, y: 15 },
				{ x: 15, y: 12 },
				{ x: 25, y: 9 },
				{ x: 27, y: 5 }
			]
		},
		{
			name: 'Schwimmen',
			weight: [
				{ x: 5, y: 20 },
				{ x: 10, y: 15 },
				{ x: 15, y: 12 },
				{ x: 25, y: 9 },
				{ x: 57, y: 5 }
			]
		}
	];

	let charts: any[] = [];

	function createCardioChart(canvas: any) {
		const ctx = canvas.getContext('2d');
		let chart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: [],
				datasets: [
					{
						label: 'Jaaaa',
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
							text: 'Zeit'
						}
					},
					y: {
						title: {
							display: true,
							text: 'Distanz'
						}
					}
				}
			}
		});

		return chart;
	}

	function createWeightChart(canvas: any) {
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

	onMount(() => {
		const liftingContainers = document.querySelectorAll('.lifting-container');
		liftingContainers.forEach((liftingContainer) => {
			const liftingCanvas = liftingContainer.querySelector('.lifting-canvas');
			const liftingChart = createWeightChart(liftingCanvas);
			charts.push(liftingChart);
		});
		liftingData.forEach((lifting, liftingIndex) => {
			updateChart(charts[liftingIndex], lifting.weight);
		});
		const cardioContainers = document.querySelectorAll('.cardio-container');
		cardioContainers.forEach((cardioContainer) => {
			const cardioCanvas = cardioContainer.querySelector('.cardio-canvas');
			const cardioChart = createCardioChart(cardioCanvas);
			charts.push(cardioChart);
		});
		cardioData.forEach((cardio, cardioIndex) => {
			updateChart(charts[cardioIndex + liftingData.length], cardio.weight);
		});
	});

	onDestroy(() => {
		charts.forEach((chart) => {
			chart.destroy();
		});
	});

	function toggleChartType(exerciseIndex: any) {
		const chartIndex = exerciseIndex;
		const chart = charts[chartIndex];

		chart.config.type = chart.config.type === 'line' ? 'bar' : 'line';

		chart.update();
	}
</script>

<Head />

<section class="text-center w-full mx-auto px-6 py-10 md:py-16 mt-24 dark:bg-surface-800">
	<h2 class="h2 mb-5">Überblicke deinen Trainingsfortschritt</h2>
	<p class="text-sm md:text-lg mb-12">Ganz nach dem Motto: "Masthuhn für Wachstum!"</p>
	<div class="flex justify-center">
		<div class="w-72 h-1 rounded-full bg-black dark:bg-white" />
	</div>
</section>

<div
	class="dark:bg-gradient-to-b dark:from-surface-800 dark:from-10% dark:via-sky-700 dark:via-31% dark:to-surface-800 dark:to-75% pt-7 pb-14"
>
	<section class="flex justify-center items-center mb-14 flex-col text-center">
		<h2 class="md:h2 h1">Krafttraining</h2>
		<div class="grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-6 lg:my-10 md:my-8 my-6 mx-12">
			{#each liftingData as exercise, exerciseIndex}
				<div class="card bg-success-400 p-3 lifting-container dark:bg-surface-500">
					<h3 class="h3 mt-3 mb-5">{exercise.name}</h3>

					<div class="mt-3 flex justify-between gap-2">
						<button
							class="btn variant-soft overflow-hidden lg:text-base text-sm hover:bg-tertiary-400 dark:bg-success-600 dark:text-black hover:text-black dark:hover:bg-primary-400"
							on:click={() => toggleChartType(exerciseIndex)}>Diagrammtyp ändern</button
						>
					</div>
					<canvas
						class="card bg-secondary-100 dark:bg-surface-800 text-black dark:text-white mt-10 lifting-canvas"
					/>
				</div>
			{/each}
		</div>
	</section>
	<section class="flex justify-center items-center mb-14 flex-col text-center">
		<h2 class="md:h2 h1">Ausdauer</h2>
		<div class="grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-6 lg:my-10 md:my-8 my-6 mx-12">
			{#each cardioData as exercise, exerciseIndex}
				<div class="card bg-success-400 p-3 cardio-container dark:bg-surface-500">
					<h3 class="h3 mt-3 mb-5">{exercise.name}</h3>
					<canvas
						class="card bg-secondary-100 dark:bg-surface-800 text-black dark:text-white mt-10 cardio-canvas"
					/>
				</div>
			{/each}
		</div>
	</section>
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
