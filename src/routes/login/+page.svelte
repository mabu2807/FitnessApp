<script lang="ts">
	import { onMount } from 'svelte';
	import Head from '../../components/Head.svelte';
	import type { ActionData } from './$types';
	import { Toast, toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';

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
		if (form?.message == 'login error') {
			return 'Email oder Passwort ist inkorrekt!';
		}
	}

	function throwToast() {
		if (formMessage() != null) {
			const t: ToastSettings = {
				message: formMessage(),
				timeout: 2000
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
<section class="flex items-center justify-center mt-32 mb-28">
	<div class="lg:w-3/4 w-5/6 sm:flex my-20">
		<div
			class="sm:w-1/2 w-full p-8 bg-success-400 dark:bg-surface-800 sm:rounded-tl-xl sm:rounded-bl-xl rounded-tl-xl sm:rounded-tr-none rounded-tr-xl"
		>
			<h3 class="md:text-2xl md:mx-3 lg:mx-4 sm:text-xl text-2xl font-semibold mb-8 mx-2">
				Benutzer Login
			</h3>

			<form id="form" method="post" class="mb-8 md:mx-3 lg:mx-4 mx-2">
				<input
					name="email"
					placeholder="Email"
					type="text"
					value={form?.email ?? ''}
					class="input p-2 mb-4 md:text-base text-base sm:text-sm bg-secondary-100 dark:bg-surface-500 text-black placeholder-secondary-400 dark:text-white dark:placeholder-white"
				/>
				<input
					name="password"
					placeholder="Passwort"
					type="password"
					value={form?.password ?? ''}
					class="input p-2 mb-6 md:text-base text-base sm:text-sm bg-secondary-100 dark:bg-surface-500 text-black placeholder-secondary-400 dark:text-white dark:placeholder-white"
				/>
				<button
					type="submit"
					class="btn variant-filled w-full md:text-base text-base sm:text-sm md:px-7 px-5 py-2 hover:bg-tertiary-500 dark:hover:bg-primary-500"
					>Sign In</button
				>
				<div class="mt-6 text-sm">
					<p>
						Du hast noch keinen Account? Dann <a href="/registration"
							><span
								class="text-surface-400 dark:text-surface-300 hover:text-tertiary-500 dark:hover:text-primary-500 font-bold"
								>Registriere</span
							></a
						> dich jetzt!
					</p>
				</div>
			</form>
		</div>
		<div
			class="sm:w-1/2 w-full flex flex-col justify-center items-center top-gradient shadow-xl sm:rounded-tr-xl sm:rounded-br-xl sm:rounded-bl-none rounded-bl-xl rounded-br-xl"
		>
			<div class="h-1 w-3/5 bg-black dark:bg-white rounded-full sm:mb-14 mb-5 sm:mt-0 mt-10" />
			<div class="mb-6">
				<h2 class="md:text-3xl text-2xl font-semibold mb-6 mx-6 text-center">
					Heute schon Gewichte bewegt?
				</h2>
				<h5 class="text-base dark:text-white text-center mx-10">
					Wir haben nicht umsonst den teuren Vizemeister im Gewichtheben bei uns im Team!
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
</style>
