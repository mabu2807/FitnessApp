<script lang="ts">
	import Chart from './nutriChart.svelte';
	import Dialog from './dialogEdit.svelte';
	import type { PageData, ActionData } from './$types';
	import type { MouseEventHandler } from 'svelte/elements';
	import { ProgressRadial, type ModalSettings } from '@skeletonlabs/skeleton';
	import ModalAddNew from './ModalAddNew.svelte';
	import ModalAddTemplate from './ModalAddTemplate.svelte';
	import ModalDelete from './ModalDelete.svelte';
	import Head from '../../components/Head.svelte';
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	let dialog: HTMLDialogElement;
	let showModal = false;
	let showModal2 = false;
	let showModal3 = false;

	export let data: PageData;
	export let form: ActionData
	let mealData = data.mealforCard;
	let maxCalories = 0;
	let usedCalories = 0;
	let maxFat = 0;
	let usedFat = 0;
	let maxSugar = 0;
	let usedSugar = 0;
	let maxSalt = 0;
	let usedSalt = 0;
	let maxProtein = 0;
	let usedProtein = 0;
	let maxCarbohydrates = 0;
	let usedCarbohydrates = 0;
	let maxSaturatedFat = 0;
	let usedSaturatedFat = 0;
	

	if (data.allValues != undefined) {
		usedCalories = data.allValues?.calories[6];
		usedFat = data.allValues.fat[6];
		usedSugar = data.allValues.sugar[6];
		usedSalt = data.allValues.salt[6];
		usedProtein = data.allValues.protein[6];
		usedCarbohydrates = data.allValues.carbohydrates[6];
		usedSaturatedFat = data.allValues.saturatedFat[6];
	}
	if (data.allmaxValues != undefined) {
		maxCalories = data.allmaxValues.calories;
		maxFat = data.allmaxValues.fat;
		maxSugar = data.allmaxValues.sugar;
		maxSalt = data.allmaxValues.salt;
		maxProtein = data.allmaxValues.protein;
		maxCarbohydrates = data.allmaxValues.carbohydrates;
		maxSaturatedFat = data.allmaxValues.saturatedFat;
	}

	let progressCalories: number = Math.round((usedCalories / maxCalories) * 100);
	let progressFat: number = Math.round((usedFat / maxFat) * 100);
	let progressSugar: number = Math.round((usedSugar / maxSugar) * 100);
	let progressSalt: number = Math.round((usedSalt / maxSalt) * 100);
	let progressProtein: number = Math.round((usedProtein / maxProtein) * 100);
	let progressCarbohydrates: number = Math.round((usedCarbohydrates / maxCarbohydrates) * 100);
	let progressSaturatedFat: number = Math.round((usedSaturatedFat / maxSaturatedFat) * 100);
	let progressCalText = progressCalories;
	let progressFatText = progressFat;
	let progressSuText = progressSugar;
	let progressSaText = progressSalt;
	let progressProText = progressProtein;
	let progressCarText = progressCarbohydrates;
	let progressSatFatText = progressSaturatedFat;
	let buttonID: string | null = '';
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
	const popupHoverCalories: PopupSettings = {
		event: 'hover',
		target: 'popupHoverCalories',
		placement: 'top'
	};
	const popupHoverFat: PopupSettings = {
		event: 'hover',
		target: 'popupHoverFat',
		placement: 'top'
	};
	const popupHoverSugar: PopupSettings = {
		event: 'hover',
		target: 'popupHoverSugar',
		placement: 'top'
	};
	const popupHoverSalt: PopupSettings = {
		event: 'hover',
		target: 'popupHoverSalt',
		placement: 'top'
	};
	const popupHoverProtein: PopupSettings = {
		event: 'hover',
		target: 'popupHoverProtein',
		placement: 'top'
	};
	const popupHoverCarbohydrates: PopupSettings = {
		event: 'hover',
		target: 'popupHoverCarbohydrates',
		placement: 'top'
	};
	const popupHoverSaturatedFat: PopupSettings = {
		event: 'hover',
		target: 'popupHoverSaturatedFat',
		placement: 'top'
	};
	let colorCalories = 'stroke-[#909CC2]';
	let colorFat = 'stroke-[#ff7970]';
	let colorSugar = 'stroke-[#A0A595]';
	let colorSalt = 'stroke-[#42EAD4]';
	let colorProtein = 'stroke-[#26547C]';
	let colorCarbohydrates = 'stroke-[#708F56]';
	let colorSatFat = 'stroke-[#F6AD2D]';

	if (progressCalories > 100) {
		colorCalories = 'stroke-[#FF0000]';
		progressCalories = 100;
	}
	if (progressFat > 100) {
		colorFat = 'stroke-[#FF0000]';
		progressFat = 100;
	}
	if (progressSugar > 100) {
		colorSugar = 'stroke-[#FF0000]';
		progressSugar = 100;
	}
	if (progressSalt > 100) {
		colorSalt = 'stroke-[#FF0000]';
		progressSalt = 100;
	}
	if (progressProtein > 100) {
		colorProtein = 'stroke-[#FF0000]';
		progressProtein = 100;
	}
	if (progressCarbohydrates > 100) {
		colorCarbohydrates = 'stroke-[#FF0000]';
		progressCarbohydrates = 100;
	}
	if (progressSaturatedFat > 100) {
		colorSatFat = 'stroke-[#FF0000]';
		progressSaturatedFat = 100;
	}
</script>

<Head />

<main class="mt-24 dark:bg-surface-800" >
	<header class="w-full h-80 flex items-center justify-center bg-[url('/header_food.jpeg')]">
		<p class="bg-slate-300 font-black text-center text-black decoration-10 text-6xl">
			Ernährungs-Tagebuch
		</p>
	</header>
	
	<!-- Section chart ond circle progress -->
	<section class=" mt-4 flex flex-col lg:flex-row p-2">
		<!-- circle Progress -->
		<section class="flex flex-col lg:w-2/5 justify-start items-start h-auto w-full">
			<p class="text-3xl font-bold pb-3">Tages-Werte</p>
			<div class="flex justify-around m-10 flex-wrap">
				<div class="flex flex-col items-center ml-10 mt-5">
					<ProgressRadial
						value={progressCalories}
						meter={colorCalories}
						track="stroke-[#f0f0f0f0]"
						stroke={80}>{progressCalText}%</ProgressRadial
					>
					<div class="flex flex-row">
						<p>Kalorien</p>
						<button class="ml-3" use:popup={popupHoverCalories}>
							<img src="info_icon.png" alt="info Button" />
						</button>
						<div class="p-4 variant-filled-secondary text-xs" data-popup="popupHoverCalories">
							<p>Empfohlene Tagesmenge: {Math.round(maxCalories)} Gramm</p>
							<p>Liefert dem Körper Energie</p>
							<div class="arrow variant-filled-secondary" />
						</div>
					</div>
					<p>{usedCalories}/ {Math.round(maxCalories)} kcal</p>
				</div>
				<div class="flex flex-col items-center ml-10 mt-5">
					<ProgressRadial
						value={progressFat}
						meter={colorFat}
						track="stroke-[#f0f0f0f0]"
						stroke={80}>{progressFatText}%</ProgressRadial
					>
					<div class="flex flex-row">
						<p>Fett</p>
						<button class="ml-3" use:popup={popupHoverFat}>
							<img src="info_icon.png" alt="info Button" />
						</button>
						<div class="p-4 variant-filled-secondary text-xs" data-popup="popupHoverFat">
							<p>Empfohlene Tagesmenge: {Math.round(maxFat)} Gramm</p>
							<p>Liefert dem Körper Energie</p>
							<div class="arrow variant-filled-secondary" />
						</div>
					</div>
					<p>{usedFat}/ {Math.round(maxFat)} Gramm</p>
				</div>
				<div class="flex flex-col items-center ml-10 mt-5">
					<ProgressRadial
						value={progressSugar}
						meter={colorSugar}
						track="stroke-[#f0f0f0f0]"
						stroke={80}>{progressSuText}%</ProgressRadial
					>
					<div class="flex flex-row">
						<p>Zucker</p>
						<button class="ml-3" use:popup={popupHoverSugar}>
							<img src="info_icon.png" alt="info Button" />
						</button>
						<div class="p-4 variant-filled-secondary text-xs" data-popup="popupHoverSugar">
							<p>Empfohlene Tagesmenge: {Math.round(maxSugar)} Gramm</p>
							<p>Für den Aufbau/ Erhalt von Nervenzellen</p>
							<div class="arrow variant-filled-secondary" />
						</div>
					</div>
					<p>{usedSugar}/ {Math.round(maxSugar)} Gramm</p>
				</div>
				<div class="flex flex-col items-center ml-10 mt-5">
					<ProgressRadial
						value={progressSalt}
						meter={colorSalt}
						track="stroke-[#f0f0f0f0]"
						stroke={80}>{progressSaText}%</ProgressRadial
					>
					<div class="flex flex-row">
						<p>Salz</p>
						<button class="ml-3" use:popup={popupHoverSalt}>
							<img src="info_icon.png" alt="info Button" />
						</button>
						<div class="p-4 variant-filled-secondary text-xs" data-popup="popupHoverSalt">
							<p>Empfohlene Tagesmenge: {Math.round(maxSalt)} Gramm</p>
							<p>Für die Verdauung oder die Muskeln</p>
							<div class="arrow variant-filled-secondary" />
						</div>
					</div>
					<p>{usedSalt}/ {Math.round(maxSalt)} Gramm</p>
				</div>
				<div class="flex flex-col items-center ml-10 mt-5">
					<ProgressRadial
						value={progressProtein}
						meter={colorProtein}
						track="stroke-[#f0f0f0f0]"
						stroke={80}>{progressProText}%</ProgressRadial
					>
					<div class="flex flex-row">
						<p>Eiweiß</p>
						<button class="ml-3" use:popup={popupHoverProtein}>
							<img src="info_icon.png" alt="info Button" />
						</button>
						<div class="p-4 variant-filled-secondary text-xs" data-popup="popupHoverProtein">
							<p>Empfohlene Tagesmenge: {Math.round(maxProtein)} Gramm</p>
							<p>Für den Muskelaufbau</p>
							<div class="arrow variant-filled-secondary" />
						</div>
					</div>
					<p>{usedProtein}/ {Math.round(maxProtein)} Gramm</p>
				</div>
				<div class="flex flex-col items-center ml-10 mt-5">
					<ProgressRadial
						value={progressCarbohydrates}
						meter={colorCarbohydrates}
						track="stroke-[#f0f0f0f0]"
						stroke={80}>{progressCarText}%</ProgressRadial
					>
					<div class="flex flex-row">
						<p>Kohlenhydrate</p>
						<button class="ml-3" use:popup={popupHoverCarbohydrates}>
							<img src="info_icon.png" alt="info Button" />
						</button>
						<div class="p-4 variant-filled-secondary text-xs" data-popup="popupHoverCarbohydrates">
							<p>Empfohlene Tagesmenge: {Math.round(maxCarbohydrates)} Gramm</p>
							<p>Gespeicherte Energiereserven für den Körper</p>
							<div class="arrow variant-filled-secondary" />
						</div>
					</div>
					<p>{usedCarbohydrates}/ {Math.round(maxCarbohydrates)} Gramm</p>
				</div>
				<div class="flex flex-col items-center ml-10 mt-5">
					<ProgressRadial
						value={progressSaturatedFat}
						meter={colorSatFat}
						track="stroke-[#f0f0f0f0]"
						stroke={80}>{progressSatFatText}%</ProgressRadial
					>
					<div class="flex flex-row">
						<p>Gesättigte Fettsäuren</p>
						<button class="ml-3" use:popup={popupHoverSaturatedFat}>
							<img src="info_icon.png" alt="info Button" />
						</button>
						<div class="p-4 variant-filled-secondary text-xs" data-popup="popupHoverSaturatedFat">
							<p>Empfohlene Tagesmenge: {Math.round(maxSaturatedFat)} Gramm</p>
							<p>Energiequelle und zur Immunabwehr</p>
							<div class="arrow variant-filled-secondary" />
						</div>
					</div>
					<p>{usedSaturatedFat}/ {Math.round(maxSaturatedFat)} kcal</p>
				</div>
			</div>
		</section>
		<!-- Chart -->
		<div class="lg:w-3/5 w-full lg:h-auto h-[40vh]">
			<p class="text-3xl font-bold pb-3">Wochenübersicht</p>
			<Chart bind:chartdata={chartData} />
		</div>
	</section>
	<section class="w-full p-1.5">
		<div class="flex flex-row w-3/5 items-center">
			<p class="text-3xl font-bold pb-3 m-1">Mahlzeiten</p>
			<button on:click={() => (showModal2 = true)} type="button" class="btn variant-filled m-1"
				>Erstellen aus Template</button
			>
			<ModalAddTemplate bind:showModal2 {data} />
			<button on:click={() => (showModal = true)} type="button" class="btn variant-filled m-1"
				>Eigenes Erstellen</button
			>
			<ModalAddNew bind:showModal {data} />
		</div>
		<div class="flex justify-around m-10 flex-wrap w-screen">
			{#if mealData != null}
				{#each mealData as meal}
					<div
						class="card border-solid border-black flex flex-col items-center justify-center p-2 m-2"
					>
						<div class="flex justify-around w-full items-center">
							<div class="font-bold text-lg">
								<h2>{meal.time}</h2>
							</div>
							<div>
								<button
									id={meal.id.toString()}
									on:click={editCard}
									on:click={() => dialog.showModal()}
									class="bg-transparent border-none w-8 h-8 button"
								>
									<img src="Edit_Pencil.png" alt="Edit Meal" />
								</button>
								{#if buttonID == meal.id.toString()}
									<Dialog {form} bind:dialog mealdata={meal} value={buttonID} />
								{/if}
							</div>
							<div>
								<button
									id={meal.id.toString()}
									on:click={() => (showModal3 = true)}
									type="button"
									class="bg-transparent border-none w-8 h-8 button"
								>
									<img src="Delete_Icon.png" alt="Delete Meal" />
								</button>
								<ModalDelete mealdata={meal} bind:showModal3 {data} />
							</div>
						</div>
						<div class="">
							<img
								src={meal.dish?.imagePath ?? meal.customDish?.imagePath}
								alt="Meal Icon"
								height="150px"
								width="200px"
							/>
						</div>
						<div class="text-sm">
							<p>{meal.dish?.name ?? meal.customDish?.name}</p>
							<p>
								{meal.dish?.nutritionalValues?.energy ?? meal.customDish?.nutritionalValues.energy} kcal
							</p>
						</div>
					</div>
				{/each}
			{:else}
				<p>Heute noch nichts gegessen</p>
			{/if}
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
	.button {
		text-decoration: none;
	}
</style>
