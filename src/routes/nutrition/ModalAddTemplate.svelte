<script lang="ts">
	import type { Dish } from './nutritionTypes';
	import type { PageData } from './$types';

	export let data: PageData;
	let allDishes = data.allDishes;

	let time: string;

	export let showModal2: boolean;
	let dialog2: HTMLDialogElement;
	$: if (dialog2 && showModal2) dialog2.showModal();

	let selected: Dish[];
	if (allDishes != undefined) {
		selected = [allDishes[1]];
	}

	const closeClick = () => {
		dialog2.close();
	};

	function saveChanges() {
		dialog2.close();
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog2}
	on:close={() => (showModal2 = false)}
	on:click|self={() => dialog2.close()}
>
	<div class="card p-4 w-modal shadow-xl space-y-4">
		<form method="POST" action="?/createMealfromTemplate">
			<header>
				<h1 class="h4">Vorläge für Meal auswählen</h1>
			</header>
			<label class="label" for="category">
				<span>Kategorie auswählen</span>
				<select class="select" bind:value={time} name="category" id="mealCat">
					<option value="Frühstück">Frühstück</option>
					<option value="Mittagessen">Mittagessen</option>
					<option value="Abendessen">Abendessen</option>
					<option value="Snack">Snack</option>
				</select>
			</label>
			<table class="table table-hover" id="tableDishes">
				<thead>
					<tr>
						<th>Name</th>
						<th>Kalorien</th>
						<th>Auswahl</th>
					</tr>
				</thead>
				<tbody>
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
					{:else}
					<p>Leider sind keine Templates verfügbar</p>
					{/if}
				</tbody>
			</table>
			<footer>
				<button class="btn variant-filled m-1" id="btnCloseAdd" on:click={closeClick}>Close</button>
				<button
					class="btn variant-filled m-1"
					type="submit"
					on:click={saveChanges}
					on:click={closeClick}>Save</button
				>
			</footer>
		</form>
	</div>
</dialog>
