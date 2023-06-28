<script lang="ts">
	import type { ActionData } from './$types';
	import type { Meal } from './nutritionTypes';
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

	export let form: ActionData;

	export let mealdata: Meal | null;
	export let dialog: HTMLDialogElement;
	export let value: string | null;

	let inputvalueCalories = mealdata?.dish?.nutritionalValues.energy ?? mealdata?.customDish?.nutritionalValues.energy ?? 0;
	let inputValueName = mealdata?.dish?.name ?? mealdata?.customDish?.name ?? '';

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
			/><br /><br />
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
