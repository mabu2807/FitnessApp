<script lang="ts">
	import { modalStore } from '@skeletonlabs/skeleton';

	function changePassword(): void {
		modalStore.close();
	}
</script>

{#if $modalStore[0]}
	<div class="card p-8 w-modal shadow-xl">
		<header class="text-2xl font-bold mb-7">Passwort ändern</header>
		<form>
			<label class="label mb-5">
				<span>Altes Passwort</span>
				<input class="input py-1 px-3" type="password" placeholder="..." />
			</label>
			<label class="label mb-5">
				<span>Neues Passwort</span>
				<input class="input py-1 px-3" type="password" placeholder="..." />
			</label>
			<label class="label mb-10">
				<span>Neues Passwort bestätigen</span>
				<input class="input py-1 px-3" type="password" placeholder="..." />
			</label>
		</form>
		<!-- prettier-ignore -->
		<footer class="flex justify-between">
        <button class="btn variant-filled md:px-7 px-5 py-2 transition duration-400 hover:bg-tertiary-500 dark:hover:bg-primary-500" on:click={changePassword}>Passwort ändern</button>
		<button class="btn variant-filled md:px-7 px-5 py-2 transition duration-400 bg-secondary-500 dark:bg-secondary-500 hover:bg-tertiary-500 dark:hover:bg-primary-500" on:click={()=>modalStore.close()}>Abbrechen</button>
    </footer>
	</div>
{/if}
