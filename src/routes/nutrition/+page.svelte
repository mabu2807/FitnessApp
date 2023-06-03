<script lang="ts">
	import CircleProgressBar from './CircleProgressBar.svelte';
	import Chart from './nutriChart.svelte';
	import Dialog from './dialogEdit.svelte';
	import DialogAdd from './dialogAdd.svelte';
	let dialog: HTMLDialogElement;
	let dialogAdd: HTMLDialogElement;
	import type { PageData } from './$types';
	import type { MouseEventHandler } from 'svelte/elements';

	export let data: PageData;
	let allcalories = data.allcalories;

	let mealTimes = [
		{
			id: 1,
			title: 'Frühstück',
			icon: 'src/assets/breakfast2.webp',
			meal: 'Eier mit Speck und dazu eine Banane',
			calories: 820
		},
		{
			id: 2,
			title: 'Mittagessen',
			icon: 'src/assets/lunch2.jpeg',
			meal: 'Nudeln mit Spinat',
			calories: 600
		},
		{
			id: 3,
			title: 'Abendessen',
			icon: 'src/assets/dinner2.jpeg',
			meal: 'Kartoffeln mit Brokkoli und Hähnchen',
			calories: 500
		}
	];
	let usedCalories = 0;
	mealTimes.forEach((meal) => {
		usedCalories += meal.calories;
		return usedCalories;
	});
	let amount = usedCalories / allcalories;
	const progress = amount;

	const editCard: MouseEventHandler<HTMLButtonElement> = (event) => {
		console.log(event.currentTarget.getAttribute('id'));
	};
	function addMeal(event: any) {
		console.log('Add Meal');
	}
</script>

<div>
	<section>
		<h2>Ernährungstagebuch</h2>
	</section>
	<div class="rowCaloriesWeek">
		<div class="columnCalories">
			<div style="vertical-align: baseline ;">
				<p class="textTitle">Tages-Kalorienverbrauch</p>
				<div style="align-items: center;">
					<CircleProgressBar {progress} />
					<p>{usedCalories}/ {allcalories} kcal</p>
				</div>
			</div>
		</div>
		<div class="columnWeek">
			<p class="textTitle">Wochenübersicht</p>
			<Chart value={allcalories} />
		</div>
	</div>
	<div>
		<p class="textTitle">Mahlzeiten</p>
		<div class="rowAllCards">
			<div class="cardGeneral">
				{#each mealTimes as meal}
					<div class="cardContent">
						<div class="rowMealtitleButton">
							<div class="textMealTitle">
								<h2>{meal.title}</h2>
							</div>
							<div>
								<button
									id={meal.id.toString()}
									on:click={editCard}
									on:click={() => dialog.showModal()}
									class="button">Edit</button
								>
								<Dialog bind:dialog />
							</div>
						</div>
						<div class="imageCard">
							<img src={meal.icon} alt="Meal Icon" height="150px" width="200px" />
						</div>
						<div class="textMealDescription">
							<p>{meal.meal}</p>
							<p>{meal.calories} kcal</p>
						</div>
					</div>
				{/each}
			</div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="cardGeneral" on:click={addMeal} on:click={() => dialogAdd.showModal()}>
				<DialogAdd bind:dialogAdd />
				<div class="cardContent">
					<h2 class="textAddMealTitle">Hier klicken um neue Mahlzeit hinzuzufügen</h2>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	section {
		background-color: #666;
		padding: 10px;
		text-align: center;
		font-size: 35px;
		color: white;
	}
	.rowCaloriesWeek {
		display: -flex;
		display: flex;
	}
	.rowMealtitleButton {
		display: -flex;
		display: flex;
		align-items: center;
	}
	.rowAllCards {
		display: -flex;
		display: flex;
		width: 90vw;
		flex-wrap: wrap;
	}
	.columnCalories {
		-webkit-flex: 1;
		-ms-flex: 1;
		flex: 1;
		display: flex;
		padding: 20px;
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
		margin-left: 100px;
		background-color: cadetblue;
		border-radius: 15%;
		color: white;
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
	}
	.cardGeneral {
		display: flex;
		justify-content: center;
		margin-top: 20px;
		row-gap: 10px;
	}
	.cardContent {
		border-style: solid;
		border-color: black;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 20vw;
		margin: 50px;
		background-color: aliceblue;
		border-radius: 10%;
	}
	.textMealDescription {
		margin-left: 20px;
	}
	.textMealTitle {
		font: 400;
		font-weight: bold;
		font-size: 15px;
		margin-left: 40px;
		color: black;
	}
	.textAddMealTitle {
		color: black;
		align-self: center;
		justify-content: center;
		text-align: center;
	}
</style>
