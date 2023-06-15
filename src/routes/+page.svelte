<script lang="ts">
	// @ts-nocheck
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	import type { ActionData, PageData } from "./$types";

	export let form: ActionData;
	export let data: PageData;

	let reviews = data.reviews;
	let courses = data.categories;

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
		currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
		showReviews();
	};
	const handleNext = () => {
		currentIndex = (currentIndex + 1) % reviews.length;
		showReviews();
	};
	onMount(() => {
		showReviews();
	});
</script>

<!-- Transform is missing  -->
<div class="top-gradient flex flex-col justify-center items-center">
	<!-- hero class -->
	<section class="text-center w-full mx-auto px-6 py-14 md:py-20 mt-24">
		<h2 class="h2 text-lg md:text-3xl mb-5">
			"Gestern noch vom Sixpack geträumt, heute schon geholt."
		</h2>
		<p class="text-sm md:text-lg mb-12">Träume nicht dein Leben, sondern lebe deinen Traum!</p>
		<!-- btn class -->
		<a
			href="/getStarted"
			class="btn variant-filled inline-block px-4 py-2 transition duration-400 hover:bg-tertiary-500 dark:hover:bg-primary-500"
			><span class="dark:text-black text-white">Get Started</span></a
		>
	</section>
	<!-- courses class -->
	<div class="w-72 h-1 rounded-full bg-gray-900 dark:bg-white" />
	<section class="flex justify-center items-center flex-col w-full py-12 text-center mid-gradiant">
		<h2 class="md:h2 h1">Unsere Kurse</h2>
		<div
			class="grid grid-cols-2 xl:grid-cols-4 md:grid-cols-3 xl:gap-10 md:gap-8 gap-6 lg:my-10 md:my-8 my-6 mx-14"
		>
			<!-- all div are course class -->
			{#each courses as course}
				<div class="card card-hover overflow-hidden">
					<header class="card-header">
						<img class="aspect-[16/9] border-2 border-white rounded" src={course.imgSrc} alt="" />
					</header>
					<div class="p-4 space-y-4">
						<h3 class="md:h3 h4">{course.name}</h3>
						<article>
							<p class="text-sm md:text-base">{course.description}</p>
						</article>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<section class="w-full py-8 sm:my-10 mx-14 my-6">
		<h2 class="md:h2 h1 text-center mb-6 py-5 px-4">Was unsere Kunden sagen</h2>
		<div class="text-center items-center justify-between flex">
			<!-- arrow class -->
			<button
				class="md:ml-20 ml-10 hover:text-tertiary-500 dark:hover:text-primary-500"
				on:click={handleNext}><i class="fa-solid fa-arrow-left fa-3x" /></button
			>
			<div class="grid grid-cols-1 gap-10 lg:mx-20 xl:mx-40 lg:grid-cols-2 sm:mx-20 mx-7">
				{#each visibleReviews as review (review.id)}
					<!-- testamionials class -->
					<div
						class="card overflow-hidden"
						transition:fly={{ x: -100, opacity: 0 }}
						animate:fly={{ x: 0, opacity: 1 }}
					>
						<header class="card-header flex flex-row m-1">
							<img
								class="object-cover md:w-16 w-12 sm:14 h-full rounded-full"
								src={'test.jpeg'}
								alt="Kunde {review.id}"
							/>
							<p class="sm:text-base text-sm ml-7 overflow-hidden">{review.text}</p>
						</header>
						<!-- <section><p class="mb-2 overflow-hidden">{item.text}</p></section> -->
						<footer class="card-footer mt-7 sm:text-base text-sm">
							<cite class="cite text-gray-500 overflow-hidden">{review.userName}</cite>
						</footer>
					</div>
				{/each}
			</div>
			<button
				class="md:mr-20 mr-10 hover:text-tertiary-500 dark:hover:text-primary-500"
				on:click={handlePrevious}><i class="fa-solid fa-arrow-right fa-3x" /></button
			>
		</div>
	</section>

	<!-- contact class -->
	<section class="text-center md:mt-20 mt-12 pb-12">
		<h2 class="md:h2 h1 mb-6">Kontaktieren Sie uns</h2>
		<form method="post" class="my-0 sm:mx-auto mx-14 max-w-lg m-12">
			<input
				value={form?.email ?? ''}
				class="input sm:p-2 p-1 mb-2 text-black dark:text-primary-500 dark:placeholder-white"
				type="email"
				name="email"
				placeholder="E-Mail-Adresse"
				required
			/>
			<textarea
				value={form?.text ?? ''}
				class="textarea p-2 mb-3 text-black dark:text-primary-500 dark:placeholder-white"
				name="message"
				placeholder="Nachricht"
				required
			/>
			<button
				type="submit"
				class="submit btn variant-filled mt-2 md:px-7 px-5 py-2 transition duration-400 hover:bg-tertiary-500 dark:hover:bg-primary-500"
				>Senden</button
			>
		</form>
	</section>
</div>

<!-- <style>
	body {
		font-family: Arial, sans-serif;
		margin: 0;
		padding: 0;
	}
	#courses {
		text-align: center;
		padding: 50px 0;
	}
	.course {
		display: inline-block;
		width: 300px;
		padding: 20px;
		margin: 20px;
		background-color: #fff;
		border-radius: 5px;
		box-shadow: 0 0px 10px rgba(0, 0, 0, 0.342);
		transition: transform 0.3s ease-in-out;
	}
	.course:hover {
		transform: scale(1.05);
	}
	.course img {
		width: 100%;
		border-radius: 5px;
		margin-bottom: 10px;
	}
	.course h3 {
		margin-bottom: 10px;
	}
	.course p {
		margin-bottom: 10px;
	}
	.arrow {
		margin-left: 110px;
		margin-right: 110px;
	}
	.headTestimonials {
		background-color: #f9f9f9;
		text-align: center;
		margin-bottom: 0;
		padding: 20px;
	}

	#testimonials {
		background-color: #f9f9f9;
		/* padding: 50px 0;
      text-align: center;
      margin-top: 80px; */
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.testimonial {
		display: inline-block;
		height: 250px;
		width: 300px;
		padding: 20px;
		margin: 30px;
		background-color: #fff;
		border-radius: 5px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
	}
	.out {
		transform: translateX(100%);
		opacity: 0;
	}
	.in {
		transform: translateX(0);
		opacity: 1;
	}
	@keyframes fly-in {
		from {
			transform: translateX(-100%);
			opacity: 0;
		}
		to {
			transform: translateX(0);
			opacity: 1;
		}
	}
	.testimonial img {
		object-fit: cover;
		width: 100px;
		height: 100px;
		border-radius: 50%;
		margin-bottom: 10px;
	}
	.testimonial p {
		margin-bottom: 10px;
	}
	.testimonial cite {
		font-style: italic;
		color: #888;
	}
	.hero {
		background-color: #eeeeee;
		padding: 40px;
		text-align: center;
	}

	.hero h2 {
		font-size: 36px;
		margin-bottom: 20px;
	}

	.hero p {
		font-size: 18px;
		margin-bottom: 40px;
	}
	.btn {
		display: inline-block;
		padding: 10px 20px;
		background-color: #333;
		color: #ffffff;
		text-decoration: none;
		border-radius: 4px;
		font-size: 16px;
		transition: background-color 0.3s ease-in-out;
	}

	.btn:hover {
		background-color: blue;
	}
	#contact {
		background-color: white;
		padding: 50px 0;
		text-align: center;
	}
	form {
		max-width: 500px;
		margin: 0 auto;
	}
	input,
	textarea {
		display: block;
		width: 100%;
		padding: 10px;
		margin-bottom: 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
	}
	button[type='submit'] {
		display: inline-block;
		background-color: #333;
		color: #fff;
		padding: 10px 20px;
		text-decoration: none;
		outline: none;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		transition: background-color 0.3s ease-in-out;
	}
	button[type='submit']:hover {
		background-color: #555;
	}
</style>   -->

<!-- </main>
</body> -->

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

	.top-gradient {
		background-image: radial-gradient(
				at 0% 0%,
				rgba(var(--color-secondary-500) / 0.5) 0px,
				transparent 50%
			),
			radial-gradient(at 100% 100%, rgba(var(--color-primary-500) / 0.24) 0px, transparent 50%);
		/* background-image: radial-gradient(at 0% 0%,rgba(var(--color-secondary-500) / .33) 0px,transparent 50%),radial-gradient(at 98% 1%,rgba(var(--color-error-500) / .33) 0px,transparent 50%); */
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
