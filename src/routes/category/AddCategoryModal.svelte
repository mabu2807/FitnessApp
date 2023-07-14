<script lang="ts">
	import { modalStore } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';

	export let data: PageData;
	
	let userSports = data.userSports.map((element) => {
		return {
			...element,
			selected: false
		};
	});

	let remainingSports = data.remainingSports.map((element) => {
		return {
			...element,
			selected: false
		};
	});

	let addDisabled = true;
	let removeDisabled = true;

	async function add() {
		let elementsToBeAdded: number[] = [];
		remainingSports.forEach((element) => {
			if (element.selected == true) {
				elementsToBeAdded.push(element.id);
			}
			element.selected = false;
		});
		await fetch('/category', {
			method: 'POST',
			body: JSON.stringify({
				data: elementsToBeAdded
			})
		})
		modalStore.close();
	}

	async function remove() {
		let elementsToBeRemoved: number[] = [];
		userSports.forEach((element) => {
			if (element.selected == true) {
				elementsToBeRemoved.push(element.id);
			}
			element.selected = false;
		});
		await fetch('/category', {
			method: 'DELETE',
			body: JSON.stringify({
				data: elementsToBeRemoved
			})
		})
		modalStore.close();
	}

	function buttonAddDisabled() {
		addDisabled = true;
		remainingSports.forEach((element) => {
			if (element.selected) {
				addDisabled = false;
			}
		});
	}

	function buttonRemoveDisabled() {
		removeDisabled = true;
		userSports.forEach((element) => {
			if (element.selected) {
				removeDisabled = false;
			}
		});
	}
</script>

<div class="card bg-success-400">
	<div class="flex justify-end p-4">
		<button on:click={() => modalStore.close()}>
			<i class="fa-solid fa-circle-xmark text-2xl hover:text-error-500" />
		</button>
	</div>
	<div class="px-14 pb-8">
		<h3 class="h3 text-center mb-4">Verfügbare Sportarten</h3>
		<div class="flex flex-wrap gap-4">
			{#each remainingSports as available}
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
						src={available.image}
						alt={available.name}
					/>
					<div class="my-2 text-center text-sm dark:text-black">{available.name}</div>
				</button>
			{/each}
		</div>

		<hr class="mt-10 h-1 rounded-full bg-black dark:bg-white" />
		<h3 class="h3 text-center mt-8 mb-4">Lösche ausgewählte Sportarten</h3>
		<div class="flex flex-wrap gap-4">
			{#each userSports as selected}
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
						src={selected.image}
						alt={selected.name}
					/>
					<div class="my-2 text-center text-sm dark:text-black">{selected.name}</div>
				</button>
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
