<script lang="ts">
	import Head from '../../components/Head.svelte';
	import { type ModalComponent, type ModalSettings, modalStore } from '@skeletonlabs/skeleton';
	import AddCategoryModal from '../../components/AddCategoryModal.svelte';
	import { categoryData } from '../../stores/Data';
	import type { PageData } from '../$types';

	const modalAddCategory: ModalComponent = {
		ref: AddCategoryModal
	};

	function addCategory(): void {
		const modal: ModalSettings = {
			type: 'component',
			component: modalAddCategory
		};
		modalStore.trigger(modal);
	}

	export let data: PageData;
	let sports = data.sports;
</script>

<Head />

<section class="text-center px-6 py-10 md:py-14 mt-24 shadow-xl bg-success-400 dark:bg-surface-800">
	<h1 class="h2 font-semibold mb-8">Deine Lieblingssportarten</h1>
	<p class="text-lg">Bleib dran und zieh durch!</p>
</section>

<div
	class="bg-gradient-to-b from-success-400 from-15% via-success-700 via-51% to-success-400 to-90% dark:bg-gradient-to-b dark:from-surface-800 dark:from-15% dark:via-sky-700 dark:via-51% dark:to-surface-800 dark:to-90%"
>
	<section class="flex flex-wrap justify-center gap-8 p-16">
		{#each sports as sport}
			{#if true}
				<a
					href="liftingplan"
					class="card card-hover flex flex-col items-center justify-center w-56 h-72 bg-success-400"
				>
					<img
						class="w-full h-36 object-cover rounded-tl-md rounded-tr-md"
						src={sport.image}
						alt=""
					/>

					<div class="p-3 text-center">
						<h2 class="text-lg mt-1 mb-3 text-black dark:text-white font-semibold">{sport.name}</h2>
						<p class="text-black dark:text-white text-sm overflow-ellipsis">{sport.description}</p>
					</div>
				</a>
			{/if}
		{/each}
	</section>

	<section class="flex items-center justify-center flex-col py-16 px-8 text-center">
		<div class="w-96 h-1 mb-20 rounded-full dark:bg-white" />
		<h3 class="h3 font-medium mb-3">Weitere Sportarten hinzufügen</h3>
		<p class="mb-5">Du hast eine neue Sportart für dich entdeckt? Dann füge sie einfach hinzu...</p>
		<div class="flex items-center justify-center mt-8">
			<button
				class="btn variant-filled inline-block px-4 py-2 hover:bg-tertiary-500 dark:hover:bg-primary-500"
				on:click={addCategory}
			>
				<span class="dark:text-black text-white"
					>Hinzufügen<i class="fa-solid fa-circle-plus ml-2" /></span
				>
			</button>
		</div>
	</section>
</div>

<style>
	.mid-gradient {
		background-image: radial-gradient(
				at 0% 0%,
				rgba(var(--color-success-400) / 0.33) 0px,
				transparent 50%
			),
			radial-gradient(at 100% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%);
	}
</style>
