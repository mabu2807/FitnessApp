<script lang="ts">
	import type { ActionData } from './$types';
	import type { Meal } from './nutritionTypes';

	export let form: ActionData

	export let mealdata: Meal;
	export let dialog: HTMLDialogElement;
	export let value: string | null;

	let inputvalueCalories = mealdata.dish.nutritionalValues.energy;
	let inputValueName = mealdata.dish.name;

	const closeClick = () => {
		dialog.close();
	};

	function saveChanges() {
		console.log(inputValueName);
		console.log(inputvalueCalories);
	}
</script>

<dialog bind:this={dialog} on:close>
	<p>Hier können die Mahlzeiten geändert werden</p>
	<form method="POST" action="?/updateMeal">
		<label for="meal">Mahlzeit</label>
		<input  name="Meal" type="text" id="meal" bind:value={inputValueName} /><br /><br />
		<label for="calories">Kalorien</label>
		<input
			name="calories"
			type="number"
			id="calories"
			placeholder="alte Kalorien"
			bind:value={inputvalueCalories}
		/><br/><br />
		<div>
			<button id="btnCloseEdit" on:click={closeClick}>Close</button>
			<button type="submit" on:click={saveChanges} on:click={closeClick}>Save</button>
		</div>
	</form>
</dialog>
