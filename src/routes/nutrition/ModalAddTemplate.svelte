<script lang="ts">
	import { Modal, modalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';
	import type { Dish } from './nutritionTypes';
	import type { PageData } from './$types';

	export let data: PageData;
	let allDishes = data.allDishes;

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
<dialog
	bind:this={dialog2}
	on:close={() => (showModal2 = false)}
	on:click|self={() => dialog2.close()}
>
	<div class="">
		<header>
			<h1>Vorläge für Meal auswählen</h1>
		</header>
		<table class="" id="tableDishes">
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
				{/if}
			</tbody>
		</table>
		<footer>
			<button id="btnCloseAdd" on:click={closeClick}>Close</button>
			<button type="submit" on:click={saveChanges} on:click={closeClick}>Save</button>
		</footer>
	</div>
</dialog>
