<script lang="ts">
	import type { Meal } from './nutritionTypes';

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
	<form method="#">
		<label for="meal">Mahlzeit</label>
		<input type="text" id="meal" bind:value={inputValueName} /><br /><br />
		<label for="calories">Kalorien</label>
		<input
			type="number"
			id="calories"
			placeholder="alte Kalorien"
			bind:value={inputvalueCalories}
		/><br /><br />
		<div>
			<button id="btnCloseEdit" on:click={closeClick}>Close</button>
			<button type="submit" on:click={saveChanges} on:click={closeClick}>Save</button>
		</div>
	</form>
</dialog>
