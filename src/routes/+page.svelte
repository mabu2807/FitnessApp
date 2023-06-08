<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import Head from '../components/Head.svelte';
	import Footer from '../components/Footer.svelte';

	let items = [
		{
			id: 1,
			name: 'John Doe',
			text: 'Die FitnessApp hat mein Training auf ein ganz neues Level gebracht. Ich liebe die Vielfalt der Kurse und die Möglichkeit, meinen Fortschritt zu verfolgen.',
			imgSrc: 'customer1.jpg'
		},
		{ id: 2, name: 'Hampelmann Hagen', text: 'einfach gut', imgSrc: 'customer1.jpg' },
		{ id: 3, name: 'Jane Smith', text: 'einwandfrei', imgSrc: 'customer2.jpg' }
	];
	let currentIndex = 0;
	/**
	 * @type {any[]}
	 */
	let visibleItems = [];
	const showItems = () => {
		if (items.length <= 2) {
			visibleItems = items;
		} else {
			visibleItems = [items[currentIndex], items[(currentIndex + 1) % items.length]];
		}
	};
	const handlePrevious = () => {
		currentIndex = (currentIndex - 1 + items.length) % items.length;
		showItems();
	};
	const handleNext = () => {
		currentIndex = (currentIndex + 1) % items.length;
		showItems();
	};
	onMount(() => {
		showItems();
	});
</script>

<!-- Transform is missing  -->

		<!-- hero class -->	
		<section class="text-center w-full mx-auto p-4 py-14 md:py-20 top-gradient shadow-inner">
			<h2 class="h2 text-lg md:text-3xl mb-5">"Gestern noch vom Sixpack geträumt, heute schon geholt."</h2>
			<p class="text-sm md:text-lg mb-12">Träume nicht dein Leben, sondern lebe deinen Traum!</p>
			<!-- btn class -->
			<a href="/getStarted" class="btn variant-filled inline-block px-4 py-2 transition duration-400 hover:bg-tertiary-500 dark:hover:bg-primary-500"><span class="dark:text-black text-white">Get Started</span></a>
		</section>
		<!-- courses class -->
		<section class="w-full py-12 text-center shadow-2xl">
			<h2 class="h2">Unsere Kurse</h2>
			<!-- all div are course class -->
			<div class="block card card-hover inline-block w-1/5 px-4 py-5 m-5 ">
				<header class="card-header">
				<img class="w-full" src="workout1.jpg" alt="Kurs 1" /></header>
				<section class="p-4 mb-3"><h3 class="h3 mb-3">Pilates</h3><p class="overflow-hidden">Ein Ganzkörpertraining zur Verbesserung von Flexibilität, Kraft und Körperhaltung.</p></section>
				</div>
				<div class="block card card-hover inline-block w-1/5 px-4 py-5 m-5 ">
					<header class="card-header"><img class="w-full" src="workout1.jpg" alt="Kurs 1" /></header>
					<section class="p-4 mb-3"><h3 class="h3 mb-3">Pilates</h3><p class="overflow-hidden">Ein Ganzkörpertraining zur Verbesserung von Flexibilität, Kraft und Körperhaltung.</p></section>
					</div>
					<div class="block card card-hover inline-block w-1/5 px-4 py-5 m-5">
						<header class="card-header"><img class="w-full" src="workout1.jpg" alt="Kurs 1" /></header>
						<section class="p-4 mb-3"><h3 class="h3 mb-3">Pilates</h3><p class="overflow-hidden">Ein Ganzkörpertraining zur Verbesserung von Flexibilität, Kraft und Körperhaltung.</p></section>
						</div>

					</section>
	
		
		<section class="w-full text-center items-center justify-between flex py-20 mid-gradient">
			<h2 class="h2  text-center mb-0 py-5 px-4">Was unsere Kunden sagen</h2>
			<!-- arrow class -->
			<div class="mx-7" on:click={handleNext}><i class="fa-solid fa-arrow-left fa-3x" /></div>
			{#each visibleItems as item (item.id)} 
				<!-- svelte-ignore missing-declaration -->
				<!-- testamionials class -->
				<div class="card inline-block h-84 w-72 p-4 m-8 bg-white rounded-lg shadow-md transition duration-500 ease-in-out transform" transition:fly={{ x: -100, opacity: 0 }}
				animate:fly={{ x: 0, opacity: 1 }}>
					<header class="card-header"><img class="object-cover w-24 h-24 rounded-full mb-2" src={'test.jpeg'} alt="Kunde {item.id}" /></header>
					<section><p class="mb-2 overflow-hidden">{item.text}</p></section>
					<footer class="card-footer"><cite class="italic text-gray-500 overflow-hidden">{item.name}</cite></footer>
				</div>
			{/each}
			<div class="mx-7" on:click={handlePrevious}><i class="fa-solid fa-arrow-right fa-3x" /></div>
		</section>
		

		<!-- contact class -->
		<section class="text-center py-7 bottom-gradient shadow">
			<h2 class="h2 mb-3">Kontaktieren Sie uns</h2>
			<form class="my-0 mx-auto max-w-lg">
				<input class="input block w-full p-2 mb-2" type="text" name="name" placeholder="Name" required />
				<input class="input block w-full p-2 mb-2" type="email" name="email" placeholder="E-Mail-Adresse" required />
				<textarea class="textarea block w-full p-2 mb-2" name="message" placeholder="Nachricht" required />
				<button type="submit" class="btn variant-filled">Senden</button> 
			</form>
		</section>
	<!-- </main>
</body> -->

<style>
	
	/* .red-gradient {
		background-image:
			radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),
			radial-gradient(at 98% 1%, rgba(var(--color-error-500) / 0.33) 0px, transparent 50%);
	}

	.backup-gradient {
		background-image:
			radial-gradient(at 0% 100%, rgba(var(--color-secondary-500) / 0.50) 0px, transparent 50%);
	} */
	
	.top-gradient {
		background-image:
			radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.50) 0px, transparent 50%),
			radial-gradient(at 100% 100%,  rgba(var(--color-primary-500) / 0.24) 0px, transparent 50%);
	}
	
	.mid-gradient {
		background-image:
			radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),
			radial-gradient(at 100% 0%,  rgba(var(--color-primary-500) / 0.33) 0px, transparent 50%);
	}
	
	.bottom-gradient {
		background-image:
		radial-gradient(at 0% 99%, rgba(var(--color-error-500) / 0.23) 0px, transparent 50%),
		radial-gradient(at 100% 100%, rgba(var(--color-primary-500) / 0.19) 0px, transparent 50%);
	}
</style>

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
