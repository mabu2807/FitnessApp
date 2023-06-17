<script lang="ts">
	import { modalStore } from '@skeletonlabs/skeleton';

	// function must be imlemented
	function changePassword(): void {
		modalStore.close();
	}
</script>

{#if $modalStore[0]}
	<div class="card w-modal bg-success-400">
		<div class="flex justify-end p-4">
			<button on:click={() => modalStore.close()}>
				<i class="fa-solid fa-circle-xmark text-2xl hover:text-error-500" />
			</button>
		</div>
		<div class="pb-8 px-8">
		<header class="text-2xl font-bold mb-7">Passwort ändern</header>
		<form>
			<label class="label mb-5">
				<span>Altes Passwort</span>
				<input class="input py-1 px-3 bg-secondary-100 dark:bg-surface-500 text-black placeholder-secondary-400 dark:text-white dark:placeholder-white" type="password" placeholder="..." />
			</label>
			<label class="label mb-5">
				<span>Neues Passwort</span>
				<input class="input py-1 px-3 bg-secondary-100 dark:bg-surface-500 text-black placeholder-secondary-400 dark:text-white dark:placeholder-white" type="password" placeholder="..." />
			</label>
			<label class="label mb-10">
				<span>Neues Passwort bestätigen</span>
				<input class="input py-1 px-3 bg-secondary-100 dark:bg-surface-500 text-black placeholder-secondary-400 dark:text-white dark:placeholder-white" type="password" placeholder="..." />
			</label>
		</form>
		<footer class="flex justify-center">
        <button class="btn variant-filled md:px-7 px-5 py-2 transition duration-500 hover:bg-tertiary-500 dark:hover:bg-primary-500" on:click={changePassword}>Passwort ändern</button>
    </footer>
	</div>
</div>
{/if}
