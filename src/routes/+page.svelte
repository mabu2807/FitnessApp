<script lang="ts">
	// @ts-nocheck
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import type { ActionData, PageData } from './$types';
	import { Toast, toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	export let form: ActionData;
	export let data: PageData;

	let reviews = data.reviews;
	let courses = data.categories;
	let timeoutButton = false;
	let direction;

	let currentIndex = 0;
	/**
	 * @type {any[]}
	 */
	let visibleReviews = [];
	const showReviews = () => {
		if (reviews.length <= 2) {
			visibleReviews = reviews;
		} else {
			visibleReviews = [reviews[currentIndex], reviews[(currentIndex + 1) % reviews.length]];
		}
	};
	const handlePrevious = () => {
		direction = 100;
		currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
		showReviews();
		timeoutButton = true;
		setTimeout(function () {
			timeoutButton = false;
		}, 500);
	};
	const handleNext = () => {
		direction = -100;
		currentIndex = (currentIndex + 1) % reviews.length;
		showReviews();
		timeoutButton = true;
		setTimeout(function () {
			timeoutButton = false;
		}, 500);
	};

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
		if (form?.message == 'alright') {
			return 'Danke für deine Nachricht, die wir ungelesen löschen werden!';
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
		showReviews();
		throwToast();
	});
</script>

<Toast background="variant-filled-error" />
<div class="flex flex-col justify-center items-center">
	<section
		class="text-center bg-success-400 dark:bg-surface-800 w-full mx-auto px-6 py-14 md:py-20 mt-20"
	>
		<h3 class="h3 mb-5 font-medium">"Gestern noch vom Sixpack geträumt, heute schon geholt."</h3>
		<h5 class="h5 mb-12 text-surface-500 dark:text-white">
			Träume nicht dein Leben, sondern lebe deinen Traum!
		</h5>
		{#if !$page.data.session}
		<a
			href="/getStarted"
			class="btn variant-filled inline-block px-4 py-2 hover:bg-tertiary-500 dark:hover:bg-primary-500"
			><span class="text-white dark:text-black">Get Started</span></a
		>
		{/if}
	</section>
	<section class="flex justify-center items-center flex-col w-full py-12 bg-gradient-to-b from-success-400 from-15% via-success-700 via-51% to-success-400 to-90%  dark:bg-gradient-to-b dark:from-surface-800 dark:from-15% dark:via-sky-700 dark:via-51% dark:to-surface-800 dark:to-90%">
		<div class="w-72 h-1 mb-24 rounded-full dark:bg-white" />
		<h2 class="h2 font-medium dark:text-white">Unsere Kurse</h2>
		<div class="flex flex-wrap justify-center gap-10 p-12">
			{#each courses as course}
				<div class="card flex flex-col w-72 bg-secondary-100 shadow-xl dark:bg-surface-500">
					<img
						class="w-full aspect-[16/9] object-cover rounded-tl-md rounded-tr-md"
						src={course.imagePath}
						alt=""
					/>
					<div class="p-5 space-y-3 overflow-hidden">
						<h3 class="h3 font-semibold">{course.name}</h3>
						<article>
							<p>{course.description}</p>
						</article>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<section class="w-full py-16 shadow-xl bg-success-400 dark:bg-surface-800">
		<div class="flex justify-center mx-14 mb-10">
			<button
				class="hover:text-tertiary-500 dark:hover:text-primary-500 mr-1"
				title= "nextReviewButton"
				on:click={handleNext}
				disabled={timeoutButton}><i class="fa-solid fa-arrow-up text-4xl" /></button
			>
			<button
				class=" hover:text-tertiary-500 dark:hover:text-primary-500 mr-5"
				title= "lastReviewButton"
				on:click={handlePrevious}
				disabled={timeoutButton}><i class="fa-solid fa-arrow-down text-4xl" /></button
			>
			<h2 class="h2 font-medium">Was unsere Kunden sagen</h2>
		</div>
		<div class="flex flex-wrap flex-col items-center gap-y-8 lg:mx-56 md:mx-32 mx-20">
			{#each visibleReviews as review (review.id)}
				<div
					class="card variant-soft-secondary dark:bg-surface-500 overflow-hidden shadow-xl"
					transition:fly={{ y: direction, opacity: 0 }}
					animate:fly={{ y: 0, opacity: 1 }}
				>
					<header class="card-header flex flex-row m-1">
						<img
							class="object-cover aspect-[1/1] md:w-16 w-12 sm:14 h-full rounded-lg"
							src={'test.jpeg'}
							alt="Kunde {review.id}"
						/>
						<p class="ml-7 overflow-hidden dark:text-white">{review.text}</p>
					</header>
					<footer class="card-footer mt-7">
						<cite class="cite text-secondary-300 overflow-hidden">{review.userName}</cite>
					</footer>
				</div>
			{/each}
		</div>
	</section>

	<section class="w-full text-center pt-12 pb-20 bg-gradient-to-b from-success-400 from-10% via-success-700 via-51%   dark:bg-gradient-to-b dark:from-surface-800 dark:from-10% dark:via-sky-700 dark:via-51% ">
		<h2 class="h2 font-medium mb-6 text-black dark:text-white">Kontaktieren Sie uns</h2>
		<form method="post" class="my-0 sm:mx-auto mx-14 max-w-lg m-12">
			<input
				value={form?.email ?? ''}
				class="input sm:p-2 p-1 mb-2 bg-secondary-100 dark:bg-surface-500 text-black placeholder-secondary-400 dark:text-white dark:placeholder-white"
				name="email"
				placeholder="E-Mail-Adresse"
			/>
			<textarea
				value={form?.text ?? ''}
				class="textarea p-2 mb-3 bg-secondary-100 text-black dark:bg-surface-500 placeholder-secondary-400 dark:text-white dark:placeholder-white"
				name="text"
				placeholder="Nachricht"
			/>
			<button
				type="submit"
				class="submit btn variant-filled mt-2 md:px-7 px-5 py-2 hover:bg-tertiary-500 dark:hover:bg-primary-500"
				>Senden</button
			>
		</form>
	</section>
</div>

<style>
	/* .red-gradient {
		background-image:
			radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),
			radial-gradient(at 98% 1%, rgba(var(--color-error-500) / 0.33) 0px, transparent 50%);
	} */

	/* .card-gradient {
		background-image:
			radial-gradient(at 0% 100%, rgba(var(--color-secondary-500) / 0.50) 0px, transparent 50%);
	} */

	.contact-gradient {
		background: linear-gradient(
			180deg,
			rgb(var(--color-secondary-500)) 20%,
			rgb(var(--color-success-400)) 80%
		);
		/* background-image: radial-gradient(at 0% 0%,rgba(var(--color-secondary-500) / .33) 0px,transparent 50%),radial-gradient(at 98% 1%,rgba(var(--color-error-500) / .33) 0px,transparent 50%); */
	}

	.card-gradient {
		/* background: rgb(35,44,63);
background: linear-gradient(0deg, rgba(35,44,63,1) 10%, rgba(105,163,164,1) 51%, rgba(35,44,63,1) 96%);	 */
			/* background-image: radial-gradient( at 0% 0%, rgba(var(--color-success-400) / 0.33) 0px, transparent 50% ), radial-gradient(at 100% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%) */
			background: rgb(39,43,54);
			background: linear-gradient(0deg, rgba(var(--color-surface-800)) 10%, rgba(76,97,152,1) 51%, rgba(var(--color-surface-800)) 96%);
		
		}

	.card-gradient-white {
		background: rgb(241,241,241);
background: linear-gradient(0deg, rgba(241,241,241,1) 10%, rgba(168,168,168,1) 51%, rgba(241,241,241,1) 96%);
	}

	/* .mid-gradient {
		background-image:
			radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),
			radial-gradient(at 100% 0%,  rgba(var(--color-primary-500) / 0.33) 0px, transparent 50%);
	}
	
	.bottom-gradient {
		background-image:
		radial-gradient(at 0% 99%, rgba(var(--color-error-500) / 0.23) 0px, transparent 50%),
		radial-gradient(at 100% 100%, rgba(var(--color-primary-500) / 0.19) 0px, transparent 50%);
	} */
</style>
