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

	let checkMode = false;
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
		</div>

		<div class="mt-12">
			<button
				class="cursor-pointer px-5 py-3 border-2 border-black dark:border-white rounded-full font-bold hover:bg-tertiary-500 transition duration-400 dark:hover:bg-primary-500"
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
			<!-- list-nav as class -->
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
			fallback="/static/profile.jpg"
			border="border-4 border-surface-300-600-token dark:hover:!border-primary-500 hover:!border-tertiary-500"
			cursor="cursor-pointer"
			on:click={() => drawerStore.open(drawerSettings)}
		/>
	</svelte:fragment>
</AppBar>

<!-- <script>
	import { onMount } from 'svelte/internal';

	let isMenuOpen = false;
	let isProfileMenuOpen = false;
	$: loggedIn = true;
	// @ts-ignore
	let clickOutsideListener;

	let settings = [
		{
			referencing: '/',
			setting: 'Persönliche Daten',
			icon: 'fa-solid fa-user'
		},
		{
			referencing: 'profile/change-password',
			setting: 'Passwort ändern',
			icon: 'fa-solid fa-key'
		},
		{
			referencing: '',
			setting: 'Einstellungen',
			icon: 'fa-solid fa-gear'
		}
	];

	let testUser = {
		name: 'Georgiev, Aleks'
	};

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function toggleProfileMenu() {
		isProfileMenuOpen = !isProfileMenuOpen;
	}

	onMount(() => {
		// @ts-ignore
		clickOutsideListener = (event) => {
			const sidebar = document.querySelector('.sidebar');
			const profileWrapper = document.querySelector('.profile-wrapper');
			const targetElement = event.target;

			if (
				profileWrapper &&
				!profileWrapper.contains(targetElement) &&
				// @ts-ignore
				!sidebar.contains(targetElement) &&
				!targetElement.classList.contains('hamburger-lines')
			) {
				isProfileMenuOpen = false;
			}
		};

		document.addEventListener('click', clickOutsideListener);

		return () => {
			// @ts-ignore
			document.removeEventListener('click', clickOutsideListener);
		};
	});
</script>

<nav class="navbar">
	<div class="navbar-container" class:open={isMenuOpen}>
		<h1 class="logo">FitnessHub</h1>

		{#if loggedIn}
			<ul class="menu-items">
				<li><a class="a" href="/">Home</a></li>
				<li><a class="a" href="/kategorie">Workouts</a></li>
				<li><a class="a" href="/progress">Progress</a></li>
				<li><a class="a" href="/nutrition">Ernährungsplan</a></li>
			</ul> -->

<!-- <Avatar src="profile.jpg"  actionParams="#Apollo" /> -->
<!-- <div class="profile-wrapper" on:click={toggleProfileMenu}>
				<a><img src="profile.jpg" alt="" /> </a>
			</div>
			{#if isProfileMenuOpen}
				<div class="sidebar">
					<div class="profile-title-container">
						<div class="profile-wrapper-sidebar" on:click={toggleProfileMenu}>
							<a><img src="profile.jpg" alt="" /> </a>
						</div>
						<p class="user-title">{testUser.name}</p>
					</div>
					<span class="bar" />
					<div class="settings-wrapper">
						{#each settings as setting}
							<a href={setting.referencing} class="setting">
								<div class="setting-icon">
									<i class={setting.icon} />
								</div>
								<p>{setting.setting}</p>
							</a>
						{/each}
					</div>
					<div style="flex-grow: 1;" />
					<div class="exit-wrapper">
						<div class="close-icon">
							<i class="fa-sharp fa-solid fa-angles-right" on:click={toggleProfileMenu} />
						</div>
						<div class="logOut">
							<button class="logOut-button"
								>Abmelden <i
									class="fa-solid fa-right-from-bracket"
									style="margin-left: 10px;"
								/></button
							>
						</div>
					</div>
				</div>
			{/if}
		{/if}
		{#if loggedIn == false}
			<a on:click={() => login} class="login-button">Login</a>
		{/if}
		<div class="hamburger-lines" on:click={toggleMenu}>
			<span class="line line1" />
			<span class="line line2" />
			<span class="line line3" />
		</div>
	</div>
</nav>

<style>
	*,
	*::after,
	*::before {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	.navbar {
		background: #393e46;
		color: white;
		box-shadow: 0 0 10px black;
		z-index: 100;
		position: relative;
		padding-left: 20px; /* Innenabstand auf der linken Seite */
	}

	.navbar-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 64px;
		padding-left: 80px;
	}

	.sidebar {
		display: flex;
		flex-direction: column;
		position: fixed;
		text-align: center;
		top: 0;
		right: 0;
		width: 300px;
		height: 100vh;
		background-color: #393e46;
		box-shadow: -10px 0px 10px 1px rgba(0, 0, 0, 0.244);
		transition: 0.3s ease all;
	}

	.profile-title-container {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 15%;
	}

	.settings-wrapper {
		display: flex;
		flex-direction: column;

		width: 100%;
		height: auto;
		margin-top: 7%;
	}

	.setting {
		display: flex;
		flex-direction: row;
		margin: 20px;
		margin-left: 50px;
		text-decoration: none;
		color: white;
	}

	.close-icon {
		width: 49%;
		height: 26%;
		font-size: 36px;
		color: white;
		margin: 6px 0 40px 0;
	}

	.close-icon i {
		cursor: pointer;

		position: relative;
		animation: indicator 1.5s ease-in-out alternate;
		animation-iteration-count: 2;
	}

	.close-icon i:hover {
		color: #7eadff;
	}

	@keyframes indicator {
		0% {
			left: 0;
		}
		50% {
			left: 10%;
		}
		75% {
			left: 5%;
		}
		100% {
			left: 0;
		}
	}

	.logOut {
		padding-right: 22px;
	}

	.logOut-button {
		cursor: pointer;

		padding: 14px 16px;
		border: 3px solid white;
		color: white;
		border-radius: 30px;
		background-color: #393e46;
		font-weight: 700;
	}

	.logOut-button:hover {
		box-shadow: 0 0 10px white;
		color: #393e46;
		background-color: white;
		transition: 0.4s ease all;
	}
	.exit-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		height: 9%;
		color: white;
		margin-bottom: 20px;
		margin-right: 50px;
	}
	.setting-icon {
		margin-right: 20px;
	}

	.user-title {
		margin-top: 10%;
	}

	.bar {
		margin-left: 20%;
		border-radius: 200px;
		width: 60%;
		height: 4px;
		background-color: white;
	}

	.profile-wrapper-sidebar {
		width: 23%;
		height: 62%;
		cursor: pointer;

		margin: 20px 30px;
		border: 2px solid white;
		border-radius: 400px;
		box-shadow: 0 0 10px white;
	}

	.profile-wrapper-sidebar img {
		height: 101%;
		width: 100%;
		object-fit: cover;
		border-radius: 400px;
	}

	.profile-wrapper {
		cursor: pointer;
		height: 84%;
		width: 5%;
		margin-right: 60px;
		border: 2px solid white;
		border-radius: 400px;
		box-shadow: 0 0 10px white;
	}

	.profile-wrapper img {
		height: 101%;
		width: 100%;
		object-fit: cover;
		border-radius: 400px;
	}

	.menu-items {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		margin: 0 20px;
	}

	.menu-items li {
		font-size: 1.3rem;
		list-style: none;
	}

	.navbar .a {
		margin: 0.5rem 1.5rem;
		color: white;
		text-decoration: none;
		font-weight: 600;
		transition: color 0.3s ease-in-out;
	}

	.navbar a:hover {
		color: #7eadff;
		font-weight: 700;
	}

	.profile-menu {
		display: none;
		cursor: pointer;
		position: relative;
		width: 30px;
		height: 20px;
	}

	.hamburger-lines {
		display: none;
		cursor: pointer;
		position: relative;
		width: 30px;
		height: 20px;
	}

	.line {
		display: block;
		position: absolute;
		width: 100%;
		height: 2px;
		background-color: #393e46;
		transition: transform 0.3s ease-in-out;
	}

	.line1 {
		top: 0;
	}

	.line2 {
		top: 50%;
		transform: translateY(-50%);
	}

	.line3 {
		bottom: 0;
	}

	.login-button {
		background-color: #377ffb;
		color: white;
		font-weight: 700;
		border: 2px solid #377ffb;
		margin-right: 80px;
		padding: 5px 30px;

		border-radius: 4px;
		font-size: 1.2rem;
		cursor: pointer;
		transition: background-color 0.3s ease-in-out;
	}

	.login-button:hover {
		color: #d1e2ff;
		background-color: #393e46;
	}

	@media (max-width: 768px) {
		.navbar-container {
			justify-content: space-between;
			padding-right: 20px; /* Innenabstand auf der rechten Seite */
			padding-left: 0; /* Kein Innenabstand auf der linken Seite */
		}

		.menu-items {
			display: none;
			position: absolute;
			top: 100%;
			right: 0;
			width: 100%;
			background-color: #fff;
			padding: 20px;
		}

		.login-button {
			padding: 8px 16px;
			margin-left: 20px;
			width: 27%;
		}

		.navbar-container.open .menu-items {
			display: flex;
			flex-direction: column;
		}

		.hamburger-lines {
			display: block;
		}
	}

	@media (max-width: 768px) {
		.navbar-container {
			justify-content: space-between;
			padding-right: 20px; /* Innenabstand auf der rechten Seite */
			padding-left: 0; /* Kein Innenabstand auf der linken Seite */
		}

		.menu-items {
			display: none;
			position: absolute;
			padding-top: 40px;
			top: 100%;
			right: 0;
			width: 100%;
			background-color: #393e46;
			padding: 20px;
			box-shadow: 5px 0px 10px 0px #aaa;
		}

		li {
			margin: 15px;
		}

		.navbar-container.open .menu-items {
			display: flex;
			flex-direction: column;
			padding-top: 20px;
		}

		.hamburger-lines {
			display: block;
		}

		.hamburger-lines .line {
			background-color: white;
		}

		.navbar-container.open .line1 {
			transform: rotate(45deg) translate(5px, 6px);
		}

		.navbar-container.open .line2 {
			opacity: 0;
		}

		.navbar-container.open .line3 {
			transform: rotate(-45deg) translate(5px, -6px);
		}
	}
</style> -->
