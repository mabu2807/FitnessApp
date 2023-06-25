<script lang="ts">
	import type { Dish } from './nutritionTypes';
	import type { PageData } from './$types';

	export let dialogAdd: HTMLDialogElement;
	export let data: PageData;
	let mealtext: string;
	let time: string;
	let calories: number;
	let allDishes = data.allDishes;
	let selected: Dish[];
	if (allDishes != undefined) {
		selected = [allDishes[1]];
	}

	const closeClick = () => {
		dialogAdd.close();
	};

	function saveChanges() {
		dialogAdd.close();
	}
</script>

<dialog bind:this={dialogAdd} on:close>
	<p>Neue Mahlzeit hinzufügen</p>
	<form method="POST" action="?/createMealfromTemplate">
		<div class="inputDishGeneral">
			<div class="rowsInput">
				<label for="category">Wähle eine Kategorie:</label>
				<label for="meal">Gericht:</label>
				<label for="calories">Kalorien:</label>
			</div>
			<div class="rowsInput">
				<select bind:value={time} name="category" id="mealCat">
					<option value="Frühstück">Frühstück</option>
					<option value="Mittagessen">Mittagessen</option>
					<option value="Abendessen">Abendessen</option>
					<option value="Snack">Snack</option>
				</select>
				<input name="mealText" type="text" id="meal2" bind:value={mealtext} />
				<input name="calories" type="text" id="calories" bind:value={calories} />
			</div>
		</div>

		<p>Oder Vorlage auswählen:</p>
		<table class="tableDishes" id="tableDishes">
			<tr>
				<th>Name</th>
				<th>Kalorien</th>
				<th>Auswahl</th>
			</tr>
			{#if allDishes != undefined}
				{#each allDishes as dish}
					<tr id={dish.id.toString()}>
						<td>{dish.name}</td>
						<td>{dish.nutritionalValues.energy}</td>
						<td>
							<div>
								<label
									><input
										type="radio"
										bind:group={selected}
										name="selectDish"
										value={dish.id}
									/></label
								>
							</div>
						</td>
					</tr>
				{/each}
			{/if}
		</table>
		<button id="btnCloseAdd" on:click={closeClick} type="button">Close</button>
		<button id="btnSaveAdd" on:click={saveChanges} on:click={closeClick} type="submit">Save</button>
	</form>
</dialog>

<style>
	.tableDishes {
		table-layout: auto;
		width: 100%;
	}
	.inputDishGeneral {
		display: flex;
		justify-content: space-between;
	}
	.rowsInput {
		display: flex;
		flex-direction: column;
		align-items: start;
		text-align: left;
		height: 80px;
		justify-content: space-around;
	}
</style>
