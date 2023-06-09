<script lang="ts">
	import type { PageData } from './$types';

	export let dialogAdd: HTMLDialogElement;
	export let data: PageData;
	let mealtext: string;
	let time: string;
	let calories: number;
	let allDishes = data.allDishes

	const closeClick = () => {
		dialogAdd.close();
	};

	function saveChanges() {
		console.log(mealtext);
		console.log(time);
		console.log(calories);
	}
	console.log(allDishes)
</script>

<dialog bind:this={dialogAdd} on:close>
	<p>Neue Mahlzeit hinzufügen</p>
	<form method="saveChanges">
		<label for="category">Wähle eine Kategorie:</label>
		<select bind:value={time} name="category" id="mealCat">
			<option value="Frühstück">Frühstück</option>
			<option value="Mittagessen">Mittagessen</option>
			<option value="Abendessen">Abendessen</option>
			<option value="Snack">Snack</option>
		</select>
		<br />
		<label for="meal">Gericht</label>
		<input type="text" id="meal2" bind:value={mealtext} /><br />
		<label for="calories">Kalorien</label>
		<input type="text" id="calories" bind:value={calories} /><br /><br />
	</form>
	<p>Oder Vorlage auswählen:</p>
	<table class="content-table buyside" id="tableDishes">
		<tr>
			<th>Name</th>
			<th>Kalorien</th>
		</tr>
		{#each allDishes as dish}
			<tr>
				<td>{dish.name}</td>
				<td>{dish.nutritionalValues.energy}</td>
			</tr>
		{/each}
	</table>

	<button id="btnCloseAdd" on:click={closeClick}>Close</button>
	<button type="submit" on:click={saveChanges} on:click={closeClick}>Save</button>
</dialog>
