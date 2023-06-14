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
			if (element.selected == true && element.picked == false) {
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
			if (element.selected == true && element.picked == true) {
				removeDisabled = false;
			}
		});
	}



</script>


{#if $modalStore[0]}
<div class="card p-5 shadow-xl card-gradient">
	<div class="flex justify-end">
	<button on:click={()=>modalStore.close()}>
		<i class="fa-solid fa-circle-xmark text-2xl hover:text-secondary-500"></i>
</button>
</div>
	<h3 class="h3 text-center mt-3 mb-7">Verfügbare Sportarten</h3>
	<div class="flex flex-wrap gap-4">
	{#each $categoryData as available}
	{#if !available.picked}

			<button
				style={available.selected
					? 'box-shadow: 0 0 20px green; border-radius: 8px;'
					: ''}
				class="card flex flex-col items-center justify-center bg-white aspect-[1/1] sm:w-32 w-28 overflow-hidden"
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
				<div class="my-2 text-center text-sm">{available.title}</div>
			</button>
	
		{/if}
	{/each}
</div>

<hr class="mt-14 h-1 rounded-full bg-gray-900 dark:bg-white"/>
<h3 class="h3 text-center mt-3 mb-7">Lösche ausgewählte Sportarten</h3>
<div class="flex flex-wrap gap-4">
	{#each $categoryData as selected}
	{#if selected.picked}
			<button 
				style={selected.selected
					? 'box-shadow: 0 0 20px green; border-radius: 8px;'
					: 'outline-style: none;'}
				class="card flex flex-col items-center justify-center bg-white aspect-[1/1] sm:w-32 w-28 overflow-hidden"
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
				<div class="my-2 text-center text-sm">{selected.title}</div>
			</button>
		{/if}
	{/each}
</div>
<footer class="flex mt-14 gap-2">
	<button class="btn variant-filled md:px-7 px-5 py-2 transition duration-400 hover:bg-tertiary-500 dark:hover:bg-primary-500" on:click={add} disabled={addDisabled}>Hinzufügen</button>
	<button class="btn variant-filled md:px-7 px-5 py-2 transition duration-400 bg-secondary-500 dark:bg-secondary-500 hover:bg-tertiary-500 dark:hover:bg-primary-500" on:click={remove} disabled={removeDisabled}>Löschen</button>

</footer>
</div>
{/if}


<style>
	.card-gradient {
		background-image:
		radial-gradient(at 0% 99%, rgba(var(--color-error-500) / 0.23) 0px, transparent 50%),
		radial-gradient(at 100% 100%, rgba(var(--color-primary-500) / 0.19) 0px, transparent 50%);
	}
</style>