
<script lang="ts">
	import CircleProgressBar from './CircleProgressBar.svelte';
	import Chart from './nutriChart.svelte';
	import Dialog from './dialogEdit.svelte';
	import DialogAdd from './dialogAdd.svelte';
	let dialog: HTMLDialogElement;
	let dialogAdd: HTMLDialogElement;
	import type { PageData, ActionData } from './$types';
	import Head from '../../components/Head.svelte';
	import Footer from '../../components/Footer.svelte';
	import type { MouseEventHandler } from 'svelte/elements';
	import { allmaxvalues } from './initChartData';
	//import { valueOrDefault } from 'chart.js/dist/helpers/helpers.core';

	export let data: PageData;
	export let form: ActionData;
	let maxCalories = 0;
	let mealData = data.mealsforCards;
	let usedCalories = 0
	if(data.allValues != undefined){
	usedCalories = data.allValues.calories[6];
	}
	if(data.allmaxValues != undefined){
		maxCalories = data.allmaxValues.calories;
	}

	let amount = usedCalories / maxCalories;
	let progress:number = amount;
	let image: string;
	let buttonID: string | null = '';
	let selected: string = 'energy';
	let chartData = data.chartdata;

	const editCard: MouseEventHandler<HTMLButtonElement> = (event) => {
		console.log(event.currentTarget.getAttribute('id'));
		buttonID = event.currentTarget.getAttribute('id');
	};
	function addMeal(event: any) {
		console.log('Add Meal');
	}
</script>

<main>
	<section>
		<h2>Ernährungstagebuch</h2>
	</section>
	<div class="rowCaloriesWeek">
		<div class="columnCalories">
			<div style="vertical-align: baseline ;">
				<p class="textTitle">Tages-Kalorienverbrauch</p>
				<div style="align-items: center;">
					<CircleProgressBar {progress} />
					<p>{usedCalories}/ {maxCalories} kcal</p>
				</div>
			</div>
		</div>
		<div class="columnWeek">
			<p class="textTitle">Wochenübersicht</p>
			<Chart bind:chartdata={chartData} />
		</div>
	</div>
	<div>
		<p class="textTitle">Mahlzeiten</p>
		<div class="rowAllCards">
			<div class="cardGeneral">
				{#if mealData != undefined}
				{#each mealData as meal}
					<div class="cardContent">
						<div class="rowMealtitleButton">
							<div class="textMealTitle">
								<h2>{meal.time}</h2>
							</div>
							<div>
								<button
									id={meal.id.toString()}
									on:click={editCard}
									on:click={() => dialog.showModal()}
									class="button"
								>
									<img src="Edit_Pencil.png" alt="Edit Meal" />
								</button>
								<Dialog bind:dialog mealdata={meal} value={buttonID} />
							</div>
						</div>
						<div class="imageCard">
							<img src={meal.dish.imagePath} alt="Meal Icon" height="150px" width="200px" />
						</div>
						<div class="textMealDescription">
							<p>{meal.dish.name}</p>
							<p>{meal.dish.nutritionalValues?.energy} kcal</p>
						</div>
					</div>
				{/each}
				{:else}
				<p>Heute noch nichts gegessen</p>
				{/if}
			</div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="cardGeneral" on:click={addMeal} on:click={() => dialogAdd.showModal()}>
				<DialogAdd bind:dialogAdd {data} />
				<div class="cardContent">
					<h2 class="textAddMealTitle">Hier klicken um neue Mahlzeit hinzuzufügen</h2>
				</div>
			</div>
		</div>
	</div>
	<a href="/nutrition/nutritiontipps">NutritionTipps</a>
</main>

<style>
	section {
		background-color: #666;
		padding: 10px;
		text-align: center;
		font-size: 35px;
		color: white;
	}
	.rowCaloriesWeek {
		display: flex;
	}
	.rowMealtitleButton {
		display: flex;
		justify-content: space-around;
		width: 100%;
		align-items: center;
	}
	.rowAllCards {
		display: flex;
		flex-wrap: wrap;
	}
	.columnCalories {
		-webkit-flex: 1;
		-ms-flex: 1;
		flex: 1;
		display: flex;
		text-align: center;
		align-content: center;
	}
	.columnWeek {
		-webkit-flex: 1;
		-ms-flex: 1;
		flex: 1;
		align-items: center;
	}
	.textTitle {
		font: 600;
		font-weight: bold;
		font-size: 30px;
		margin-bottom: 20px;
	}
	.imageCard {
		margin-left: 20px;
	}
	.button {
		background-color: transparent;
		border: none;
		width: 32px;
		height: 32px;
		text-decoration: none;
	}
	.cardGeneral {
		display: flex;
		justify-content: space-around;
		margin-top: 20px;
		width: 100vw;
		flex-wrap: wrap;
	}
	.cardContent {
		border-style: solid;
		border-color: black;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 300px;
		background-color: aliceblue;
		border-radius: 10%;
		margin-bottom: 5vh;
	}

	.textMealTitle {
		font: 400;
		font-weight: bold;
		font-size: 15px;
		color: black;
	}
	.textAddMealTitle {
		color: black;
		align-self: center;
		justify-content: center;
		text-align: center;
	}
</style>