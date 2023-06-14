<script lang="ts">
	import { modalStore } from '@skeletonlabs/skeleton';
	import {categoryData} from '../routes/getStarted/Data';

	let addDisabled = true;
	let removeDisabled = true;

	function add(){
		$categoryData.forEach((element) => {
		 if (element.picked == false && element.selected == true) {
				element.picked = true;
			};
			element.selected = false;
			modalStore.close();
	});
}
	function buttonAddDisabled() {
		addDisabled = true;
		$categoryData.forEach((element) => {
			if (element.selected == true) {
				addDisabled = false;
			}
		});
	}

	function remove(){
		$categoryData.forEach((element) => {
		 if (element.picked == true && element.selected == true) {
				element.picked = false;
			};
			element.selected = false;
			modalStore.close();
	});
	}
	
	function buttonRemoveDisabled() {
		removeDisabled = true;
		$categoryData.forEach((element) => {
			if (element.selected == true) {
				removeDisabled = false;
			}
		});
	}



</script>


{#if $modalStore[0]}
<div class="card p-5 w-modal shadow-xl card-gradient">
<div class="flex items-center">
	{#each $categoryData as available}
	{#if !available.picked}

			<button
				style={available.selected
					? 'box-shadow: 0 0 10px black; border-radius: 8px;'
					: ''}
				class="card flex flex-col items-center justify-center bg-white w-32 h-32 overflow-hidden m-5"
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
				<div class="my-3 text-center text-sm">{available.title}</div>
			</button>
	
		{/if}
	{/each}
</div>
<hr />
<h2>Lösche ausgewählte Sportarten</h2>
<div class="flex items-center">
	{#each $categoryData as selected}
	{#if selected.picked}
			<button 
				style={selected.selected
					? 'box-shadow: 0 0 10px black; border-radius: 8px;'
					: 'outline-style: none;'}
				class="card flex flex-col items-center justify-center bg-white w-32 h-32 overflow-hidden m-5"
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
				<div class="my-3 text-center text-sm">{selected.title}</div>
			</button>
		{/if}
	{/each}
</div>
</div>
{/if}
<footer class="flex justify-between">
        <button class="btn variant-filled md:px-7 px-5 py-2 transition duration-400 hover:bg-tertiary-500 dark:hover:bg-primary-500" on:click={add} disabled={addDisabled}>Hinzufügen</button>
		<button class="btn variant-filled md:px-7 px-5 py-2 transition duration-400 bg-secondary-500 dark:bg-secondary-500 hover:bg-tertiary-500 dark:hover:bg-primary-500" on:click={remove} disabled={removeDisabled}>Löschen</button>
    </footer>

<style>
	.card-gradient {
		background-image:
		radial-gradient(at 0% 99%, rgba(var(--color-error-500) / 0.23) 0px, transparent 50%),
		radial-gradient(at 100% 100%, rgba(var(--color-primary-500) / 0.19) 0px, transparent 50%);
	}
</style>