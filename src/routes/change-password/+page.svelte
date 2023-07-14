<script lang="ts">
	import type { ActionData } from './$types';
	import { Toast, toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import Head from '../../components/Head.svelte';
	import { onMount } from 'svelte';

	export let form: ActionData;

	

	function formMessage() {
		if (form?.message == 'empty fields') {
			return 'Schön alle Felder ausfüllen!';
		}
		if (form?.message == 'no string') {
			return 'Die Form passt nicht!';
		}
		if (form?.message == 'passwords not matching') {
			return 'Deine neuen Passwörter stimmen nicht überein, Muchacho!';
		}
		if (form?.message == 'login error') {
			return 'Aleks gefällt deine Email nicht!';
		}
		if (form?.message == 'successful') {
			return 'Passwort wurde erfolgreich geändert!';
		} else {
			return 'Fehler Aufgetreten';
		}
	}

	function throwToast() {
		if (formMessage() !== null || formMessage() !== undefined) {
			const t: ToastSettings = {
				message: formMessage(),
				timeout: 3000
			};
			toastStore.trigger(t);
		}
	}

	onMount(() => {
		if (form?.message != null || form?.message !== undefined) {
			throwToast();
		}
	});

</script>


<Head />
<Toast background="variant-filled-error" />
	<section class="flex items-center justify-center mt-32 mb-40">
	
				<div class="card lg:w-2/3 xl:w-1/2 w-3/4 m-10 py-10 sm:px-12 px-8 shadow-xl bg-success-400">
					<h3 class="h3 font-bold mb-10">Passwort ändern</h3>
					<form method="post">
						<input
							name="oldPassword"
							placeholder="Bisheriges Passwort"
							class="input py-1 px-3 bg-secondary-100 dark:bg-surface-500 text-black placeholder-secondary-400 dark:text-white dark:placeholder-white mb-7"
							type="password"
							value={form?.oldPassword ?? ''}
						/>
						
						<input
							name="newPassword"
							placeholder="Neues Passwort"
							class="input py-1 px-3 bg-secondary-100 dark:bg-surface-500 text-black placeholder-secondary-400 dark:text-white dark:placeholder-white mb-7"
							type="password"
							value={form?.newPassword ?? ''}
						/>
					
						<input
							name="newPasswordRepeated"
							placeholder="Wiederhole dein neues Passwort"
							class="input py-1 px-3 bg-secondary-100 dark:bg-surface-500 text-black placeholder-secondary-400 dark:text-white dark:placeholder-white mb-7"
							type="password"
							value={form?.newPasswordRepeated ?? ''}
						/>
					
						<button type="submit" class="btn variant-filled md:px-7 px-5 py-2 hover:bg-tertiary-500 dark:hover:bg-primary-500">Passwort ändern</button>
					</form>
	
		</div>
	</section>


