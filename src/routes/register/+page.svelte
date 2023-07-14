<script lang="ts">
	import { Step, Stepper } from '@skeletonlabs/skeleton';
	import Size from '../../components/Size.svelte';
	import Weight from '../../components/Weight.svelte';
	import Goal from '../../components/Goal.svelte';
	import Birth from '../../components/Birth.svelte';
	import Gender from '../../components/Gender.svelte';
	import Level from '../../components/Level.svelte';
	import Overview from '../../components/Overview.svelte';
	import { lockedGoal, lockedGender } from '../../stores/Data';
	import { Toast, toastStore, type ToastSettings } from '@skeletonlabs/skeleton';
	import {getStartedData} from '../../stores/Data';

	let username: string = '';
	let eMail: string = '';
	let password: string = '';
	let passwordConfirm: string = '';

	$: lockCompletion = username === '' || eMail === '' || password === '' || passwordConfirm === '';

	async function handleComplete(){
		if(password !== passwordConfirm){
			return false;
		}
		getStartedData.update((data) => {
			return data.map((item) => {
			if (item.title === 'userName') {
				return { ...item, value: username };
			}
			return item;
			});
		});
		getStartedData.update((data) => {
			return data.map((item) => {
			if (item.title === 'eMail') {
				return { ...item, value: eMail };
			}
			return item;
			});
		});
		getStartedData.update((data) => {
			return data.map((item) => {
			if (item.title === 'password') {
				return { ...item, value: password };
			}
			return item;
			});
		});

		let test = await fetch('/register', {
			method: 'POST',
			body: JSON.stringify({
				data: $getStartedData
			})
		})
		console.log(test);
		location.href = '/';
	}
</script>

<section class="flex justify-center pt-32 pb-20 dark:bg-surface-800">
	<div class="card w-3/4 m-10 shadow-xl sm:p-8 p-4 items-center bottom-gradient">
		<Stepper
			buttonBack="btn variant-ghost hover:bg-tertiary-400 dark:hover:bg-primary-400"
			buttonNext="btn variant-filled hover:bg-tertiary-500 dark:hover:bg-primary-500"
			on:complete={handleComplete}
		>
			<Step locked={$lockedGoal} class="text-center">
				<svelte:fragment slot="header"
					><h3 class="h3 mt-10">Wähle zunächst dein Ziel aus!</h3></svelte:fragment
				>
				<Goal />
			</Step>
			<Step class="text-center">
				<svelte:fragment slot="header"
					><h3 class="h3 mt-10">Wähle deine Körpergröße aus!</h3></svelte:fragment
				>
				<Size />
			</Step>
			<Step class="text-center">
				<svelte:fragment slot="header"
					><h3 class="h3 mt-10">Wähle dein Gewicht aus!</h3></svelte:fragment
				>
				<Weight />
			</Step>
			<Step class="text-center">
				<svelte:fragment slot="header"
					><h3 class="h3 mt-10">Wähle deinen Geburtstag aus!</h3></svelte:fragment
				>
				<Birth />
			</Step>
			<Step locked={$lockedGender} class="text-center">
				<svelte:fragment slot="header"
					><h3 class="h3 mt-10">Wähle dein Geschlecht aus!</h3></svelte:fragment
				>
				<Gender />
			</Step>
			<Step class="text-center">
				<svelte:fragment slot="header"
					><h3 class="h3 mt-10">Wähle dein Aktivitätslevel aus!</h3></svelte:fragment
				>
				<Level />
			</Step>
			<Step class="text-center">
				<svelte:fragment slot="header"
					><h3 class="h3 mt-10">Überprüfe deine Angaben!</h3></svelte:fragment
				>
				<Overview />
			</Step>
			<Step class="text-center" locked={lockCompletion}>
				<svelte:fragment slot="header"
					><h3 class="h3 mt-10">Registrierung erfolgreich!</h3></svelte:fragment
				>
				<Toast background="variant-filled-error" />
				<section class="flex items-center justify-center dark:bg-surface-800">
					<div class="lg:w-3/4 w-5/6 sm:flex my-20">
						<div
							class="sm:w-1/2 w-full p-8 bg-gradient-to-b from-success-400 from-15% via-success-700 via-51% to-success-400 to-90% dark:bg-gradient-to-b dark:from-surface-500 dark:from-15% dark:via-sky-700 dark:via-51% dark:to-surface-500 dark:to-90% sm:rounded-tl-xl sm:rounded-bl-xl rounded-tl-xl sm:rounded-tr-none rounded-tr-xl"
						>
							<h3 class="md:text-2xl md:mx-3 lg:mx-4 sm:text-lg text-2xl font-semibold mb-8 mx-2">
								Noch etwas Persönliches
							</h3>
								<input
									class="input p-2 mb-4 md:text-base text-base sm:text-sm bg-secondary-100 dark:bg-surface-900 text-black placeholder-secondary-400 dark:text-white dark:placeholder-white"
									name="username"
									type="text"
									placeholder="Benutzername"
									bind:value={username}
								/>
								<input
									class="input p-2 mb-4 md:text-base text-base sm:text-sm bg-secondary-100 dark:bg-surface-900 text-black placeholder-secondary-400 dark:text-white dark:placeholder-white"
									name="email"
									type="text"
									placeholder="Email"
									bind:value={eMail}
								/>
								<input
									class="input p-2 mb-4 md:text-base text-base sm:text-sm bg-secondary-100 dark:bg-surface-900 text-black placeholder-secondary-400 dark:text-white dark:placeholder-white"
									name="password"
									type="password"
									placeholder="Passwort"
									bind:value={password}
								/>
								<input
									class="input p-2 mb-4 md:text-base text-base sm:text-sm bg-secondary-100 dark:bg-surface-900 text-black placeholder-secondary-400 dark:text-white dark:placeholder-white"
									name="passwordConfirm"
									type="password"
									placeholder="Bestätige Passwort"
									bind:value={passwordConfirm}
								/>
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
			</Step>
		</Stepper>
	</div>
</section>

<style>
	.bottom-gradient {
		background-image: radial-gradient(
				at 0% 99%,
				rgba(var(--color-secondary-300) / 0.23) 0px,
				transparent 70%
			),
			radial-gradient(at 100% 100%, rgba(var(--color-success-200) / 0.19) 0px, transparent 30%);
	}
</style>
