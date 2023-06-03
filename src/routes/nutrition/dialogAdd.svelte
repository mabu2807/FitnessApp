<script lang="ts">
	export let dialogAdd: HTMLDialogElement;

	const closeClick = () => {
		dialogAdd.close();
	};

	function saveChanges() {
		//let inputMeal = document.getElementById("meal").value;
	}
</script>

<dialog bind:this={dialogAdd} on:close>
	<p>Neue Mahlzeit hinzufügen</p>
	<form method="#">
		<label for="category">Wähle eine Kategorie:</label>
		<select name="category" id="mealCat">
			<option value="breakfast">Frühstück</option>
			<option value="lunch">Mittagessen</option>
			<option value="dinner">Abendessen</option>
			<option value="snack">Snack</option>
		</select>
		<br />
		<label for="meal">Gericht</label>
		<input type="text" id="meal" /><br />
		<label for="calories">Kalorien</label>
		<input type="text" id="calories" /><br /><br />
	</form>

	<button on:click={closeClick}>Close</button>
	<button type="submit" on:click={saveChanges} on:click={closeClick}>Save</button>
</dialog>
