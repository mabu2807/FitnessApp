<script lang="ts">
	import { modalStore } from '@skeletonlabs/skeleton';
	import { categoryData } from '../stores/Data';

	let addDisabled = true;
	let removeDisabled = true;

	function add() {
		$categoryData.forEach((element) => {
			if (element.picked == false && element.selected == true) {
				element.picked = true;
			}
			element.selected = false;
			modalStore.close();
		});
	}
	function buttonAddDisabled() {
		addDisabled = true;
		$categoryData.forEach((element) => {
			if (element.selected == true && element.picked == false) {
				addDisabled = false;
			}
		});
	}

	function remove() {
		$categoryData.forEach((element) => {
			if (element.picked == true && element.selected == true) {
				element.picked = false;
			}
			element.selected = false;
			modalStore.close();
		});
	}

	function buttonRemoveDisabled() {
		removeDisabled = true;
		$categoryData.forEach((element) => {
			if (element.selected == true && element.picked == true) {
				removeDisabled = false;
			}
		});
	}
</script>

{#if $modalStore[0]}
	<div class="card bg-success-400">
		<div class="flex justify-end p-4">
			<button on:click={() => modalStore.close()}>
				<i class="fa-solid fa-circle-xmark text-2xl hover:text-error-500" />
			</button>
		</div>
		<div class="px-14 pb-8">
			<h3 class="h3 text-center mb-4">Verfügbare Sportarten</h3>
			<div class="flex flex-wrap gap-4">
				{#each $categoryData as available}
					{#if !available.picked}
						<button
							style={available.selected ? 'box-shadow: 0 0 20px green; border-radius: 8px;' : ''}
							class="card flex flex-col items-center justify-center bg-secondary-100 dark:bg-success-400 aspect-[1/1] sm:w-32 w-28 overflow-hidden"
							on:click={() => {
								available.selected = !available.selected;
								buttonAddDisabled();
							}}
						>
							<img
								class="w-full h-full overflow-hidden object-cover"
								src={available.imageSrc}
								alt={available.imageSrc}
							/>
							<div class="my-2 text-center text-sm dark:text-black">{available.title}</div>
						</button>
					{/if}
				{/each}
			</div>

			<hr class="mt-10 h-1 rounded-full bg-black dark:bg-white" />
			<h3 class="h3 text-center mt-8 mb-4">Lösche ausgewählte Sportarten</h3>
			<div class="flex flex-wrap gap-4">
				{#each $categoryData as selected}
					{#if selected.picked}
						<button
							style={selected.selected
								? 'box-shadow: 0 0 20px green; border-radius: 8px;'
								: 'outline-style: none;'}
							class="card flex flex-col items-center justify-center dark:bg-success-400 bg-secondary-100 aspect-[1/1] sm:w-32 w-28 overflow-hidden"
							on:click={() => {
								selected.selected = !selected.selected;
								buttonRemoveDisabled();
							}}
						>
							<img
								class="w-full h-full overflow-hidden object-cover"
								src={selected.imageSrc}
								alt={selected.imageSrc}
							/>
							<div class="my-2 text-center text-sm dark:text-black">{selected.title}</div>
						</button>
					{/if}
				{/each}
			</div>
			<footer class="flex justify-between mt-28 gap-2">
				<button
					class="btn variant-filled md:px-7 px-5 py-2 hover:bg-tertiary-500 dark:hover:bg-primary-500"
					on:click={add}
					disabled={addDisabled}>Hinzufügen</button
				>
				<button
					class="btn variant-filled md:px-7 px-5 py-2 hover:bg-error-500 dark:hover:bg-error-500"
					on:click={remove}
					disabled={removeDisabled}>Löschen</button
				>
			</footer>
		</div>
	</div>
{/if}

<style>
	.card-gradient {
		background-image: radial-gradient(
				at 0% 99%,
				rgba(var(--color-error-500) / 0.23) 0px,
				transparent 50%
			),
			radial-gradient(at 100% 100%, rgba(var(--color-primary-500) / 0.19) 0px, transparent 50%);
	}
</style>
