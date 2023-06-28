<script lang="ts">
	import CircleProgressBar from './CircleProgressBar.svelte';
	import Chart from './nutriChart.svelte';
	import Dialog from './dialogEdit.svelte';
	import DialogAdd from './dialogAdd.svelte';
	import ModalAdd from './ModalAddTemplate.svelte';
	//import  Modal from '@skeletonlabs/skeleton';
	import Modal from './ModalAddTemplate.svelte';

	import type { PageData, ActionData } from './$types';
	import type { MouseEventHandler } from 'svelte/elements';
	//import { valueOrDefault } from 'chart.js/dist/helpers/helpers.core';
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import { ProgressRadial, type ModalSettings } from '@skeletonlabs/skeleton';
	import ModalAddNew from './ModalAddNew.svelte';
	import ModalAddTemplate from './ModalAddTemplate.svelte';

	let dialog: HTMLDialogElement;
	let dialog2: HTMLDialogElement;
	let dialogAdd: HTMLDialogElement;

	let showModal = false;
	let showModal2 = false;

	export let data: PageData;
	export let form: ActionData;
	let mealData = data.mealforCard;
	let maxCalories = 0;
	let usedCalories = 0;

	if (data.allValues != undefined) {
		usedCalories = data.allValues.calories[6];
	}
	if (data.allmaxValues != undefined) {
		maxCalories = data.allmaxValues.calories;
	}

	let progress: number = Math.round((usedCalories / maxCalories) * 100);
	let image: string;
	let buttonID: string | null = '';
	let selected: string = 'energy';
	let chartData = data.chartdata;

	const modal: ModalSettings = {
		type: 'component',
		component: 'ModalAdd'
	};

	const editCard: MouseEventHandler<HTMLButtonElement> = (event) => {
		console.log(event.currentTarget.getAttribute('id'));
		buttonID = event.currentTarget.getAttribute('id');
	};
	function addMeal(event: any) {
		console.log('Add Meal');
	}
</script>

<main class="mt-24">
	<header class="w-full h-80 flex items-center justify-center bg-[url('/header_food.jpeg')]">
		<p class="bg-slate-300 font-black text-center text-black decoration-10 text-6xl">
			Ernährungs-Tagebuch
		</p>
	</header>
	<!-- Section chart ond circle progress -->
	<section class=" mt-4 flex flex-col lg:flex-row p-2">
		<!-- circle Progress -->
		<section class="flex flex-col w-2/5 justify-start items-start h-[50vh]">
			<p class="textTitle">Tages-Werte</p>
			<div class="flex flex-col items-center">
				<ProgressRadial value={progress}>{progress}%</ProgressRadial>
				<p>{usedCalories}/ {maxCalories} kcal</p>
			</div>
		</section>
		<!-- Chart -->
		<div class="w-3/5">
			<p class="textTitle">Wochenübersicht</p>
			<Chart bind:chartdata={chartData} />
		</div>
	</section>
	<section class="w-full p-1.5">
		<div class="flex flex-row w-3/5 items-center">
			<p class="textTitle m-1">Mahlzeiten</p>
			<button on:click={() => (showModal2 = true)} type="button" class="btn variant-filled m-1"
				>Erstellen aus Template</button
			>
			<ModalAddTemplate bind:showModal2 {data} />
			<button on:click={() => (showModal = true)} type="button" class="btn variant-filled m-1"
				>Eigenes Erstellen</button
			>
			<ModalAddNew bind:showModal {data} />
		</div>
		<div class="rowAllCards">
			<div class="flex justify-around mt-20 flex-wrap w-screen">
				{#if mealData != null}
					{#each mealData as meal}
						<div
							class="card border-solid border-black flex flex-col items-center justify-center mb-5vh w-300px"
						>
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
									{#if buttonID == meal.id.toString()}
									<Dialog {form} bind:dialog mealdata={meal} value={buttonID} />
									{/if}
								</div>
							</div>
							<div class="imageCard">
								<img
									src={meal.dish?.imagePath ?? meal.customDish?.imagePath}
									alt="Meal Icon"
									height="150px"
									width="200px"
								/>
							</div>
							<div class="textMealDescription">
								<p>{meal.dish?.name ?? meal.customDish?.name}</p>
								<p>
									{meal.dish?.nutritionalValues?.energy ??
										meal.customDish?.nutritionalValues.energy} kcal
								</p>
							</div>
						</div>
					{/each}
				{:else}
					<p>Heute noch nichts gegessen</p>
				{/if}
			</div>

			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- <div class="cardGeneral" on:click={addMeal} on:click={() => dialogAdd.showModal()}>
				<DialogAdd bind:dialogAdd {data} />
				<div class="cardContent">
					<h2 class="textAddMealTitle">Hier klicken um neue Mahlzeit hinzuzufügen</h2>
				</div>
			</div> -->
		</div>
	</section>
	<div
		class="bg-[url('/picture_nutritipps.png')] w-full h-80 flex items-center justify-center flex-col"
	>
		<p class="text-center text-white decoration-10 font-extrabold text-xl">Ernährungs-Tipps</p>
		<a href="/nutritiontipps"
			><button type="button" class="btn variant-filled m-1">Hier klicken!</button></a
		>
	</div>
</main>

<style>
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
	/* .columnCalories {
		-webkit-flex: 1;
		-ms-flex: 1;
		flex: 1;
		display: flex;
		text-align: center;
		align-content: center;
	} */
	/* .columnWeek {
		-webkit-flex: 1;
		-ms-flex: 1;
		flex: 1;
		align-items: center;
	} */
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
		/* width: 300px; */
		/* background-color: aliceblue; */
		/* border-radius: 10%; */
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
