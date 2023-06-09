<script lang="ts">
	import { modalStore } from '@skeletonlabs/skeleton';

// Funktion muss noch implementiert werden
	function changePassword(): void {
		modalStore.close();
	}

	let testData = {
		goal: "2",
		size: "175",
		weight: "90",
		birth: "2001-09-11",
		activity: "3",
	}

</script>


{#if $modalStore[0]}
	<div class="card px-14 py-10 w-modal shadow-xl ">
		<header class="text-2xl font-bold mb-7">Persönliche Daten</header>
		<form>
			<label class="label mb-5">
				<span>Fitness Ziel</span>
				<select value="{testData.goal}" class="select">
					<option value="1">Loose Weight</option>
					<option value="2">Gain Muscle</option>
					<option value="3">Stay Fit</option>
				</select>
			</label>
			<label class="label mb-5">
				<!-- Hier validiern, ob Eingabe passt -->
				<span>Größe in cm</span>
				<input class="input py-1 px-3 dark:placeholder-white placeholder-black" type="text" placeholder="{testData.size}" />
			</label>
			<label class="label mb-5">
				<!-- Hier validiern, ob Eingabe passt -->
				<span>Gewicht in kg</span>
				<input class="input py-1 px-3 dark:placeholder-white placeholder-black" type="text" placeholder="{testData.weight}" />
			</label>
			<label class="label mb-5">
				<span>Geburtstag</span>
				<input class="input py-1 px-3" type="date" value="{testData.birth}"/>
			</label>
			<label class="label mb-10">
				<span>Aktivitätslevel</span>
				<select value="{testData.activity}" class="select">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
			</label>
		</form>
		<footer class="flex justify-between">
        <button class="btn variant-filled md:px-7 px-5 py-2 transition duration-400 hover:bg-tertiary-500 dark:hover:bg-primary-500" on:click={changePassword}>Angaben ändern</button>
		<button class="btn variant-filled md:px-7 px-5 py-2 transition duration-400 bg-secondary-500 dark:bg-secondary-500 hover:bg-tertiary-500 dark:hover:bg-primary-500" on:click={()=>modalStore.close()}>Abbrechen</button>
    </footer>
	</div>
{/if}