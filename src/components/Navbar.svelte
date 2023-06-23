<script lang="ts">
	import { AppBar, SlideToggle } from '@skeletonlabs/skeleton';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { Drawer, Modal, drawerStore, popup } from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';
	import { modalStore } from '@skeletonlabs/skeleton';
	import PasswordModal from './PasswordModal.svelte';
	import PersonalModal from './PersonalModal.svelte';

	const drawerSettings: DrawerSettings = {
		id: 'example-1',
		// Provide your property overrides:

		width: 'w-[280px] md:w-[480px]',
		// padding: 'p-4',
		rounded: 'rounded'
	};

	const popupNavigation: PopupSettings = {
		// Represents the type of event that opens/closed the popup
		event: 'click',
		// Matches the data-popup value on your popup element
		target: 'popupNavigation',
		// Defines which side of your trigger the popup will appear
		placement: 'bottom'
	};

	const modalChange: ModalComponent = {
		ref: PasswordModal
	};

	const modalData: ModalComponent = {
		ref: PersonalModal
	};

	function modalPersonal(): void {
		const modal: ModalSettings = {
			type: 'component',
			component: modalData
		};
		modalStore.trigger(modal);
	}

	function modalPassword(): void {
		const modal: ModalSettings = {
			type: 'component',
			component: modalChange
		};
		modalStore.trigger(modal);
	}

	let testUser = {
		name: 'Georgiev, Aleks'
	};

	let checkMode = true;
</script>

<Modal />

<Drawer position="right">
	<div class="flex flex-col justify-center items-center">
		<div class="flex flex-row justify-center items-center">
			<div
				class=" md:w-20 w-16 md:my-8 md:mx-6 my-6 mx-2 border-2 border-white rounded-full shadow-lg"
			>
				<Avatar src="profile.jpg" class="h-full w-full object-cover rounded-full" />
			</div>
			<p class="md:text-xl text-base m-2 font-bold">{testUser.name}</p>
		</div>
		<span class="bar block mt-4 rounded-full bg-black dark:bg-white h-1 w-3/5" />

		<div class="flex flex-col w-full mt-8 items-center">
			<div class="flex flex-row items-center m-3 md:m-5">
				<div class="mr-3 text-base md:text-lg dark:text-white text-black">
					<i class="fa-solid fa-user" />
				</div>

				<button on:click={modalPersonal}>
					<p
						class="text-base md:text-lg dark:text-white text-black hover:text-tertiary-500 dark:hover:text-primary-500"
					>
						Persönliche Daten
					</p>
				</button>
			</div>
			<div class="flex flex-row items-center m-3 md:m-5">
				<div class="mr-3 text-base md:text-lg dark:text-white text-black">
					<i class="fa-solid fa-key" />
				</div>

				<button on:click={modalPassword}>
					<p
						class="text-base md:text-lg dark:text-white text-black hover:text-tertiary-500 dark:hover:text-primary-500"
					>
						Passwort ändern
					</p>
				</button>
			</div>

			<div class="flex flex-row items-center m-3 md:m-5">
				<div class="mr-3 text-base md:text-lg dark:text-white text-black">
					<LightSwitch on:click={() => (checkMode = !checkMode)} />
				</div>

				<p class="text-base md:text-lg dark:text-white text-black">
					{checkMode ? 'Light' : 'Dark'} Mode
				</p>
			</div>
			<div class="flex flex-row items-center m-3 md:m-5">
				<div class="mr-3 text-base md:text-lg dark:text-white text-black">
					<i class="fa-solid fa-key" />
				</div>

				<button >
					<a href="routes/impressum"
						class="text-base md:text-lg dark:text-white text-black hover:text-tertiary-500 dark:hover:text-primary-500"
					>
						Impressum
				</a>
				</button>
			</div>
		</div>

		<div class="mt-12">
			<button
				class="cursor-pointer px-5 py-3 border-2 border-black dark:text-black dark:border-white bg-success-400 font-bold hover:bg-tertiary-500 dark:hover:bg-primary-500 rounded-xl"
			>
				Abmelden <i class="fa-solid fa-right-from-bracket md:ml-10 ml-6" />
			</button>
		</div>
	</div>
</Drawer>

<AppBar class="fixed w-full" shadow="shadow-2xl">
	<svelte:fragment slot="lead">
		<a href="/">
			<img class="w-16" src="Logo.jpg" alt="" />
		</a>
		<p class="m-3 font-medium text-xl">FitnessHub</p>
		<button class="btn-icon btn-icon-sm lg:!hidden" use:popup={popupNavigation}>
			<i class="fa-solid fa-bars text-2xl hover:text-tertiary-500 dark:hover:text-primary-500" />
		</button>
		<!-- popup -->
		<div class="card p-4 w-60 shadow-xl lg:!hidden" data-popup="popupNavigation">
			<nav>
				<ul>
					<li class="m-3">
						<a href="/">
							<span
								class="text-xl dark:text-white text-black hover:text-tertiary-500 dark:hover:text-primary-500"
								>Home</span
							>
						</a>
					</li>
					<li class="m-3">
						<a href="/category">
							<span
								class="text-xl dark:text-white text-black hover:text-tertiary-500 dark:hover:text-primary-500"
								>Workouts</span
							>
						</a>
					</li>
					<li class="m-3">
						<a href="/progress">
							<span
								class="text-xl dark:text-white text-black hover:text-tertiary-500 dark:hover:text-primary-500"
								>Progress</span
							>
						</a>
					</li>
					<li class="m-3">
						<a href="/nutrition">
							<span
								class="text-xl dark:text-white text-black hover:text-tertiary-500 dark:hover:text-primary-500"
								>Ernährungstagebuch</span
							>
						</a>
					</li>
				</ul>
			</nav>
		</div></svelte:fragment
	>
	<div class="p-5 hidden relative hidden lg:flex flex-row justify-center">
		<a href="/"
			><span
				class="m-3 font-medium text-xl dark:text-white text-black hover:text-tertiary-500 dark:hover:text-primary-500"
				>Home</span
			></a
		>
		<a href="/category"
			><span
				class="m-3 font-medium text-xl dark:text-white text-black hover:text-tertiary-500 dark:hover:text-primary-500"
				>Workouts</span
			></a
		>
		<a href="/progress"
			><span
				class="m-3 font-medium text-xl dark:text-white text-black hover:text-tertiary-500 dark:hover:text-primary-500"
				>Progress</span
			></a
		>
		<a href="/nutrition">
			<span
				class="m-3 font-medium text-xl dark:text-white text-black hover:text-tertiary-500 dark:hover:text-primary-500"
				>Ernährungsplan</span
			></a
		>
	</div>

	<svelte:fragment slot="trail">
		<Avatar
			src="profile.jpg"
			fallback="profile.jpg"
			border="border-4 border-secondary-300 dark:hover:!border-primary-500 hover:!border-tertiary-500"
			cursor="cursor-pointer"
			on:click={() => drawerStore.open(drawerSettings)}
		/>
	</svelte:fragment>
</AppBar>
