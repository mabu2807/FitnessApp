<script lang="ts">
	import { Toast, toastStore, type ToastSettings } from '@skeletonlabs/skeleton';
	import Head from '../../components/Head.svelte';
	import type { ActionData } from './$types';
	import { onMount } from 'svelte';

	export let form: ActionData;

	function formMessage() {
		if (form?.message == 'empty fields') {
			return 'Schön alle Felder ausfüllen!';
		}
		if (form?.message == 'no string') {
			return 'Die Form passt nicht!';
		}
		if (form?.message == 'invalid email') {
			return 'Das ist keine valide Email, Muchacho!';
		}
		if (form?.message == 'passwords not matching') {
			return 'Die Passwörter stimmen nicht überein!';
		}
		if (form?.message == 'already registered') {
			return 'Unter dieser Email Adresse besteht bereits ein stabiler Account!';
		}
	}

	function throwToast() {
		if (formMessage() != null) {
			const t: ToastSettings = {
				message: formMessage(),
				timeout: 3000
			};
			toastStore.trigger(t);
		}
	}

	onMount(() => {
		throwToast();
	});
</script>

<Head />
<Toast background="variant-filled-error" />
<section class="flex items-center justify-center pt-32 pb-28 dark:bg-surface-800">
	<div class="lg:w-3/4 w-5/6 sm:flex my-20">
		<div
			class="sm:w-1/2 w-full p-8 bg-gradient-to-b from-success-400 from-15% via-success-700 via-51% to-success-400 to-90% dark:bg-gradient-to-b dark:from-surface-500 dark:from-15% dark:via-sky-700 dark:via-51% dark:to-surface-500 dark:to-90% sm:rounded-tl-xl sm:rounded-bl-xl rounded-tl-xl sm:rounded-tr-none rounded-tr-xl"
		>
			<h3 class="md:text-2xl md:mx-3 lg:mx-4 sm:text-lg text-2xl font-semibold mb-8 mx-2">
				Noch etwas Persönliches
			</h3>

			<form method="post" class="mb-8 md:mx-3 lg:mx-4 mx-2">
				<input
					class="input p-2 mb-4 md:text-base text-base sm:text-sm bg-secondary-100 dark:bg-surface-900 text-black placeholder-secondary-400 dark:text-white dark:placeholder-white"
					name="username"
					type="text"
					placeholder="Benutzername"
					value={form?.username ?? ''}
				/>
				<input
					class="input p-2 mb-4 md:text-base text-base sm:text-sm bg-secondary-100 dark:bg-surface-900 text-black placeholder-secondary-400 dark:text-white dark:placeholder-white"
					name="email"
					type="text"
					placeholder="Email"
					value={form?.email ?? ''}
				/>
				<input
					class="input p-2 mb-4 md:text-base text-base sm:text-sm bg-secondary-100 dark:bg-surface-900 text-black placeholder-secondary-400 dark:text-white dark:placeholder-white"
					name="password"
					type="password"
					placeholder="Passwort"
					value={form?.password ?? ''}
				/>
				<input
					class="input p-2 mb-4 md:text-base text-base sm:text-sm bg-secondary-100 dark:bg-surface-900 text-black placeholder-secondary-400 dark:text-white dark:placeholder-white"
					name="passwordConfirm"
					type="password"
					placeholder="Bestätige Passwort"
					value={form?.passwordConfirm ?? ''}
				/>
				<button
					type="submit"
					class="btn variant-filled w-full mt-8 md:text-base text-base sm:text-sm md:px-7 px-5 py-2 hover:bg-tertiary-500 dark:hover:bg-primary-500"
					>Registrieren</button
				>
			</form>
		</div>
		<div
			class="sm:w-1/2 w-full flex flex-col justify-center items-center bg-gradient-to-b from-success-400 from-15% via-success-700 via-51% to-success-400 to-90% dark:bg-gradient-to-b dark:from-surface-500 dark:from-15% dark:via-sky-700 dark:via-51% dark:to-surface-500 dark:to-90% sm:rounded-tr-xl sm:rounded-br-xl sm:rounded-bl-none rounded-bl-xl rounded-br-xl"
		>
			<div class="h-1 w-3/5 bg-black dark:bg-white rounded-full sm:mb-14 mb-5 sm:mt-0 mt-10" />
			<div class="mb-6">
				<h2 class="md:text-3xl text-2xl font-semibold mb-6 mx-6 text-center">
					Willkommen in der Gruppe
				</h2>
				<h5 class="h5 dark:text-white text-center mx-10">
					Von Cardio Carsten zu Markus Masse, wir bitten jeden zur Kasse!
				</h5>
			</div>
			<div class="h-1 w-3/5 bg-black dark:bg-white rounded-full sm:mb-0 mb-10 sm:mt-5" />
		</div>
	</div>
</section>

<style>
	.top-gradient {
		background-image: radial-gradient(
				at 0% 0%,
				rgba(var(--color-secondary-500) / 0.33) 0px,
				transparent 50%
			),
			radial-gradient(at 98% 1%, rgba(var(--color-secondary-200) / 0.33) 0px, transparent 50%);
	}
	.bottom-gradient {
		background-image: radial-gradient(
				at 0% 99%,
				rgba(var(--color-secondary-200) / 0.23) 0px,
				transparent 70%
			),
			radial-gradient(at 100% 100%, rgba(var(--color-success-100) / 0.19) 0px, transparent 30%);
	}
	.bottom-2-gradient {
		background-image: radial-gradient(at 0% 99%, rgba(var(--color-secondary-200))),
			radial-gradient(at 100% 100%, rgba(var(--color-success-100)));
	}
</style>
