<script lang="ts">
	import { modalStore } from '@skeletonlabs/skeleton';

	// function must be implemented
	function changePassword(): void {
		modalStore.close();
	}

	let testData = {
		goal: '2',
		size: '175',
		weight: '90',
		birth: '2001-09-11',
		gender: '1',
		activity: '3'
	};
</script>

{#if $modalStore[0]}
	<div class="card w-modal bg-success-400 ">
		<div class="flex justify-end p-4">
			<button on:click={() => modalStore.close()}>
				<i class="fa-solid fa-circle-xmark text-2xl hover:text-error-500" />
			</button>
		</div>
		<div class="px-14 pb-10">
		<header class="text-2xl font-bold mb-7">Persönliche Daten</header>
		<form>
			<label class="label mb-5">
				<span>Fitness Ziel</span>
				<select value={testData.goal} class="select bg-secondary-100 dark:bg-surface-500">
					<option value="1">Loose Weight</option>
					<option value="2">Gain Muscle</option>
					<option value="3">Stay Fit</option>
				</select>
			</label>
			<label class="label mb-5">
				<!-- Hier validiern, ob Eingabe passt -->
				<span>Größe in cm</span>
				<input
					class="input py-1 px-3 dark:placeholder-white placeholder-black bg-secondary-100 dark:bg-surface-500"
					type="text"
					placeholder={testData.size}
				/>
			</label>
			<label class="label mb-5">
				<!-- Hier validiern, ob Eingabe passt -->
				<span>Gewicht in kg</span>
				<input
					class="input py-1 px-3 dark:placeholder-white placeholder-black bg-secondary-100 dark:bg-surface-500"
					type="text"
					placeholder={testData.weight}
				/>
			</label>
			<label class="label mb-5">
				<span>Geburtstag</span>
				<input class="input py-1 px-3 bg-secondary-100 dark:bg-surface-500" type="date" value={testData.birth} />
			</label>
			<label class="label mb-5">
				<span>Geschlecht</span>
				<select value={testData.gender} class="select bg-secondary-100 dark:bg-surface-500">
					<option value="1">weiblich</option>
					<option value="2">männlich</option>
					<option value="3">divers</option>
				</select>
			</label>
			<label class="label mb-10">
				<span>Aktivitätslevel</span>
				<select value={testData.activity} class="select bg-secondary-100 dark:bg-surface-500">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
			</label>
		</form>
		<footer class="flex justify-center">
			<button
				class="btn variant-filled md:px-7 px-5 py-2 hover:bg-tertiary-500 dark:hover:bg-primary-500"
				on:click={changePassword}>Angaben ändern</button
			>
		</footer>
	</div>
	</div>
{/if}
