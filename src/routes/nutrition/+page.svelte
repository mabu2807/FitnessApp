<script lang="ts">
	import CircleProgressBar from './CircleProgressBar.svelte';
	import Chart from './nutriChart.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	var allcalories = data.allcalories;

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

	function editCard(event: any) {
		console.log(event);
	}
</script>

<div>
	<section>
		<h2>Ernährungstagebuch</h2>
	</section>
	<div class="row">
		<div class="column side">
			<div style="vertical-align: baseline ;">
				<p class="text1">Tages-Kalorienverbrauch</p>
				<div style="align-items: center;">
					<CircleProgressBar {progress} />
					<p>{usedCalories}/ {allcalories} kcal</p>
				</div>
			</div>
		</div>
		<div class="column middle">
			<p class="text1">Wochenübersicht</p>
			<Chart value={allcalories} />
		</div>
	</div>
	<div>
		<p class="text1">Mahlzeiten</p>
		<div class="cards1">
			{#each mealTimes as meal}
				<div class="cards2">
					<div class="row2">
						<div class="text2">
							<h2>{meal.title}</h2>
						</div>
						<div>
							<button id={meal.id.toString()} on:click={editCard} class="button">Edit</button>
						</div>
					</div>
					<div class="image1">
						<img src={meal.icon} alt="Meal Icon" height="150px" width="200px" />
					</div>
					<div class="textDescription">
						<p>{meal.meal}</p>
						<p>{meal.calories} kcal</p>
					</div>
				</div>
			{/each}
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
	.row {
		display: -flex;
		display: flex;
	}
	.row2 {
		display: -flex;
		display: flex;
		align-items: center;
	}
	.column.side {
		-webkit-flex: 1;
		-ms-flex: 1;
		flex: 1;
		display: flex;
		padding: 20px;
		text-align: center;
		align-content: center;
	}
	.column.middle {
		-webkit-flex: 1;
		-ms-flex: 1;
		flex: 1;
		align-items: center;
	}
	.text1 {
		font: 600;
		font-weight: bold;
		font-size: 30px;
		margin-bottom: 20px;
	}
	.image1 {
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
	.cards1 {
		display: flex;
		justify-content: center;
		margin-top: 20px;
		row-gap: 10px;
	}
	.cards2 {
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
	.cards3 {
		border-style: solid;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 20vw;
		margin: 50px;
		background-color: aliceblue;
	}
	.textDescription {
		margin-left: 20px;
	}
	.text2 {
		font: 400;
		font-weight: bold;
		font-size: 15px;
		margin-left: 40px;
	}
</style>
