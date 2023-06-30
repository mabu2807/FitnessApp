<script lang="ts">
	import type { ActionData } from './$types';
	import type { Meal } from './nutritionTypes';
	// import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	 import { SlideToggle } from '@skeletonlabs/skeleton';

	export let form: ActionData
	export let mealdata: Meal | null;
	export let dialog: HTMLDialogElement;
	export let value: string | null;

	let calories: number;
	let toggleChecked = false;
	let fat: number;
	let saturadetFat: number;
	let carbohydrates: number;
	let sugar: number;
	let protein: number;
	let salt: number;

	let inputvalueCalories = mealdata?.dish?.nutritionalValues.energy ?? 0;
	let inputValueName = mealdata?.dish?.name ?? '';

	const closeClick = () => {
		dialog.close();
	};

	function saveChanges() {
		console.log(inputValueName);
		console.log(inputvalueCalories);
	}
</script>

<dialog bind:this={dialog} on:close>
	<div class="card p-4 w-modal shadow-xl space-y-4">
		<form method="post" action="?/deleteMeal">
			<input class="hidden" name="Mealid" type="number" id="mealid" value={mealdata?.id} />
			<button type="submit" on:click={closeClick}>Löschen</button>
		</form>
		<p>Hier können die Mahlzeiten geändert werden</p>
		<form
			method="POST"
			action="?/updateMeal"
			class="border border-surface-500 p-4 space-y-4 rounded-container-token"
		>
			<input class="hidden" name="Mealid" type="number" id="mealid" value={mealdata?.id} />
			<label for="meal">Mahlzeit</label>
			<input
				class="input block w-full"
				name="Meal"
				type="text"
				id="meal"
				bind:value={inputValueName}
			/><br /><br />
			<label for="calories">Kalorien</label>
			<input
				class="input"
				name="calories"
				type="number"
				id="calories"
				bind:value={inputvalueCalories}
			/>
			<SlideToggle
				id="toggleValues"
				name="slider-nutri"
				unchecked
				bind:value={toggleChecked}
				on:change={() => (toggleChecked = !toggleChecked)}>Alle Nährwerte anzeigen</SlideToggle
			>
			{#if toggleChecked == true}
				<label for="fat" class="label">
					<span>Fett(angegeben in Gramm): </span>
					<input class="input" name="fat" type="number" step="0.01" id="fat" bind:value={fat} />
				</label>
				<label for="saturatedFat" class="label">
					<span>Gesättigte Fettsäuren(angegeben in Gramm): </span>
					<input
						class="input"
						name="saturatedFat"
						type="number"
						step="0.01"
						id="saturatedFat"
						bind:value={saturadetFat}
					/>
				</label>
				<label for="carbohydrates" class="label">
					<span>Kohlenhydrate(angegeben in Gramm): </span>
					<input
						class="input"
						name="carbohydrates"
						type="number"
						step="0.01"
						id="carbohydrates"
						bind:value={carbohydrates}
					/>
				</label>
				<label for="sugar" class="label">
					<span>Zucker(angegeben in Gramm): </span>
					<input
						class="input"
						name="sugar"
						type="number"
						step="0.01"
						id="sugar"
						bind:value={sugar}
					/>
				</label>
				<label for="protein" class="label">
					<span>Eiweiß(angegeben in Gramm): </span>
					<input
						class="input"
						name="protein"
						type="number"
						step="0.01"
						id="protein"
						bind:value={protein}
					/>
				</label>
				<label for="salt" class="label">
					<span>Salz(angegeben in Gramm): </span>
					<input class="input" name="salt" type="number" step="0.01" id="salt" bind:value={salt} />
				</label>
			{/if}
			<div>
				<button id="btnCloseEdit" on:click={closeClick} type="button" class="btn variant-filled m-1"
					>Close</button
				>
				<button
					id="btnSaveEdit"
					on:click={saveChanges}
					on:click={closeClick}
					type="submit"
					class="btn variant-filled m-1">Save</button
				>
			</div>
		</form>
	</div>
</dialog>
