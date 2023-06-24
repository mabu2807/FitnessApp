<script lang="ts">
	import type { ModalComponent } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';

	export let data: PageData;
	let time: string;
	let mealtext: string;
	let calories: number;

	export let showModal: boolean;
	let dialog: HTMLDialogElement;
	$: if (dialog && showModal) dialog.showModal();

	const closeClick = () => {
		dialog.close();
	};

	function saveChanges() {
		dialog.close();
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<div class="card p-4 w-modal shadow-xl space-y-4">
		<header>
			<h1>Neues Meal hinzufügen</h1>
		</header>
		<form class="border border-surface-500 p-4 space-y-4 rounded-container-token">
			<label class="label" for="category">
				<span>Kategorie auswählen</span>
				<select bind:value={time} name="category" id="mealCat">
					<option value="Frühstück">Frühstück</option>
					<option value="Mittagessen">Mittagessen</option>
					<option value="Abendessen">Abendessen</option>
					<option value="Snack">Snack</option>
				</select>
			</label>
			<label for="meal" class="label">
				<span>Gericht: </span>
				<input class="input" name="mealText" type="text" id="meal2" bind:value={mealtext} />
			</label>
			<label for="calories" class="label">
				<span>Kalorien: </span>
				<input class="input" name="calories" type="text" id="calories" bind:value={calories} />
			</label>
		</form>
		<footer>
			<button id="btnCloseAdd" on:click={closeClick}>Close</button>
			<button type="submit" on:click={saveChanges} on:click={closeClick}>Save</button>
		</footer>
	</div>
</dialog>
