<script lang="ts">
	export let dialog: HTMLDialogElement;
	let newMeal: string;
	let newCalories: string;

	const closeClick = () => {
		dialog.close();
	};

	function saveChanges() {
		console.log(newMeal);
		console.log(newCalories);
	}
</script>

<dialog bind:this={dialog} on:close>
	<p>Hier können die Mahlzeiten geändert werden</p>
	<form method="#">
		<label for="meal">Mahlzeit</label>
		<input type="text" id="meal" placeholder="altes Meal" bind:value={newMeal} /><br /><br />
		<label for="calories">Kalorien</label>
		<input type="number" id="calories" placeholder="alte Kalorien" bind:value={newCalories} /><br
		/><br />
		<div>
			<button id="btnCloseEdit" on:click={closeClick}>Close</button>
			<button type="submit" on:click={saveChanges} on:click={closeClick}>Save</button>
		</div>
	</form>
</dialog>
