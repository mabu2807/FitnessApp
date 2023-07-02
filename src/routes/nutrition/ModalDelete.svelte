<script lang="ts">
	import type { PageData } from './$types';
	import type { Meal } from './nutritionTypes';

	export let data: PageData;
	let dialog3: HTMLDialogElement;
	export let showModal3: boolean;
	$: if (dialog3 && showModal3) dialog3.showModal();

	export let mealdata: Meal | null;

	function closeClick() {
		dialog3.close();
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog3}
	on:close={() => (showModal3 = false)}
	on:click|self={() => dialog3.close()}
>
	<div class="card p-4 w-modal shadow-xl space-y-4">
		<form method="post" action="?/deleteMeal">
			<div>
				<p>Soll das Meal wirklich gelöscht werden?</p>
				<input class="hidden" name="Mealid" type="number" id="mealid" value={mealdata?.id} />
			</div>
			<footer>
				<button class="btn variant-filled m-1" id="btnCloseAdd" on:click={closeClick}
					>Abbrechen</button
				>
				<button class="btn variant-filled m-1" type="submit" on:click={closeClick}>Löschen</button>
			</footer>
		</form>
	</div>
</dialog>
