<script lang="ts">
	import type { PageData } from './$types';
	import { SlideToggle, toastStore } from '@skeletonlabs/skeleton';

	export let data: PageData;
	let time: string;
	let mealtext: string;
	let calories: number;
	let toggleChecked = false;
	let fat: number;
	let saturadetFat: number;
	let carbohydrates: number;
	let sugar: number;
	let protein: number;
	let salt: number;
	let disabledButton = true;

	export let showModal: boolean;
	let dialog: HTMLDialogElement;
	$: if (dialog && showModal) dialog.showModal();

	const closeClick = () => {
		dialog.close();
	};
	function saveChanges() {
		dialog.close();
	}
	function disabledCheck() {
		if (mealtext != null && calories != null && mealtext != '') {
			disabledButton = false;
		}
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<div class="card p-4 w-modal shadow-xl space-y-4">
		<header>
			<h1>Neues Meal hinzufügen</h1>
		</header>
		<form
			class="border border-surface-500 p-4 space-y-4 rounded-container-token"
			method="POST"
			action="?/createCustomMeal"
		>
			<label class="label" for="category">
				<span>Kategorie auswählen</span>
				<select class="select" bind:value={time} name="category" id="mealCat">
					<option value="Frühstück">Frühstück</option>
					<option value="Mittagessen">Mittagessen</option>
					<option value="Abendessen">Abendessen</option>
					<option value="Snack">Snack</option>
				</select>
			</label>
			<label for="meal" class="label">
				<span>Gericht: </span>
				<input
					class="input"
					name="mealText"
					type="text"
					id="meal2"
					bind:value={mealtext}
					on:change={disabledCheck}
				/>
				{#if mealtext == null}
					<p class="text-red-600 text-xs">Darf nicht leer sein!</p>
				{/if}
			</label>
			<label for="calories" class="label">
				<span>Kalorien: </span>
				<input
					class="input"
					name="calories"
					type="number"
					id="calories"
					bind:value={calories}
					on:change={disabledCheck}
				/>
				{#if calories == null}
					<p class="text-red-600 text-xs">Darf nicht leer sein!</p>
				{/if}
			</label>
			<div>
				<SlideToggle
					id="toggleValues"
					name="slider-nutri"
					unchecked
					bind:value={toggleChecked}
					on:change={() => (toggleChecked = !toggleChecked)}>Alle Nährwerte anzeigen</SlideToggle
				>
			</div>
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

			<footer>
				<button id="btnCloseAdd" on:click={closeClick} class="btn variant-filled m-1">Close</button>
				<button
					disabled={disabledButton}
					type="submit"
					on:click={saveChanges}
					on:click={closeClick}
					class="btn variant-filled m-1">Save</button
				>
			</footer>
		</form>
	</div>
</dialog>
