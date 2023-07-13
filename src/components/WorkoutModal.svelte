<script lang="ts">
	import { modalStore } from '@skeletonlabs/skeleton';

	export let exerciseTemplates;

	const exercises = exerciseTemplates
</script>

{#if $modalStore[0]}
	<div class="card bg-success-400 mt-auto">
		<div class="flex justify-end p-4">
			<button on:click={() => modalStore.close()}>
				<i class="fa-solid fa-circle-xmark text-2xl hover:text-error-500" />
			</button>
		</div>
		<div class="px-7 pb-7">
			{#each exercises as exercise}
				<h6 class="h6 font-bold">Übung {exercise.id}: {exercise.title}</h6>
				<div class="flex flex-row gap-7 mb-6 mt-2">
					<div class="w-40">
						<img class="rounded" src={exercise.image} alt={exercise.title} />
					</div>
					<div class="w-full">
						<p class="sm:text-base text-sm">
							<b> {10} </b> Sätze x <b> {20} </b>
						</p>
						<p class="sm:text-base text-sm">
							{exercise.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
{/if}
