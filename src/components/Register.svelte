<script lang="ts">
	import type { ActionData } from '../routes/registration/$types';

	export let form: ActionData;
</script>

<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Fitness Registration</title>
	<link rel="stylesheet" href="style.css" />
</head>

<section class="h-80">
	<div class="sm:my-12 my-8 xl:px-64 lg:px-48 md:px-32 sm:px-20 px-14">
		<form method="post">
			<input
				class="input py-1 px-3 mt-6 mb-2 sm:text-base text-sm bg-success-400 dark:bg-surface-500 text-black placeholder-secondary-400 dark:text-white dark:placeholder-white"
				name="username"
				type="text"
				placeholder="Benutzername"
				value={form?.username ?? ''}
			/>
			<input
				class="input py-1 px-3 mb-10 sm:text-base text-sm bg-success-400 dark:bg-surface-500 text-black placeholder-secondary-400 dark:text-white dark:placeholder-white"
				name="email"
				type="email"
				placeholder="Email"
				value={form?.email ?? ''}
			/>
			<input
				class="input py-1 px-3 mb-2 sm:text-base text-sm bg-success-400 dark:bg-surface-500 text-black placeholder-secondary-400 dark:text-white dark:placeholder-white"
				name="password"
				type="password"
				placeholder="Passwort"
				value={form?.password ?? ''}
			/>
			<input
				class="input py-1 px-3 sm:text-base text-sm bg-success-400 dark:bg-surface-500 text-black placeholder-secondary-400 dark:text-white dark:placeholder-white"
				name="passwordConfirm"
				type="password"
				placeholder="Bestätige Passwort"
				value={form?.passwordConfirm ?? ''}
			/>
			<!-- <div class="error">
							{#if form?.missing}<p>Bitte füllen sie die Felder aus!</p>{/if}
						</div> -->

			<button
				class="btn variant-filled mt-5 md:px-7 px-5 py-2 sm:text-base text-sm hover:bg-tertiary-500 dark:hover:bg-primary-500"
				type="submit">Registrieren</button
			>
		</form>
	</div>
</section>
