<script lang="ts">
	import { modalStore } from '@skeletonlabs/skeleton';
	import {categoryData} from '../routes/getStarted/Data';

	function add(){

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
					// buttonRemoveDisabled();
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
					// buttonRemoveDisabled();
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

<style>
	.card-gradient {
		background-image:
		radial-gradient(at 0% 99%, rgba(var(--color-error-500) / 0.23) 0px, transparent 50%),
		radial-gradient(at 100% 100%, rgba(var(--color-primary-500) / 0.19) 0px, transparent 50%);
	}
</style>