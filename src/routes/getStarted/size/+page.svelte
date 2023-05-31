<script>
	import { each } from 'svelte/internal';
	import { onMount } from 'svelte';

	let pages = [
		{ title: 'Ziele', link: '/getStarted/goals', value: 'Backend' },
		{ title: 'Körpergröße', link: '/getStarted/size', value: 'Backend' },
		{ title: 'Gewicht', link: '/getStarted/weight', value: 'Backend' },
		{ title: 'Geburtsdatum', link: '/getStarted/dob', value: 'Backend' },
		{ title: 'Aktivitätslevel', link: '/getStarted/level', value: 'Backend' },
		{ title: 'Körperfettanteil', link: '/getStarted/bfp', value: 'Backend' }
	];

	let picsource = '/src/assets/medium.jpg';
	let sliderValue = '175 cm';

	function updateSliderValue(event) {
		pages[1].value = sliderValue + ' cm';
		sliderValue = event.target.value;
		let val = parseInt(event.target.value);
		if (val < 170) {
			picsource = '/src/assets/small.jpg';
		} else if (val < 190) {
			picsource = '/src/assets/medium.jpg';
		} else {
			picsource = '/src/assets/tall.jpg';
		}
	}

	function updateSliderOnMount() {
		pages[1].value = sliderValue;
	}

	onMount(updateSliderOnMount);
</script>

<body>
	<div class="title-container">
		<div class="title">
			<h1>Schritt: 2</h1>
			<p>Wähle deine Körpergröße aus!</p>
		</div>
	</div>

	<div class="pic-slider-container">
		<div class="pic">
			<img src={picsource} alt="person" />
		</div>
		<div class="slider-value">
			<p>{pages[1].value}</p>
		</div>
	</div>
		<div class="slidecontainer">
			<input
				type="range"
				min="150"
				max="200"
				bind:value={sliderValue}
				class="slider"
				id="myRange"
				on:input={updateSliderValue}
			/>
		</div>

		<div class="button-container-right">
			<a href="/getStarted/weight" class="next-button">Nächste</a>
		</div>

		<div class="button-container-left">
			<a href="/getStarted/goals" class="back-button">Zurück</a>
		</div>

		<div class="overview">
			{#each pages as page, i}
				<div class="overview-wrapper">
					<a href={page.link} class="overview-link">{page.title}</a>
					<p>{page.value}</p>
				</div>
			{/each}
		</div>
	</body
>

<style>
	.pic {
		margin-right: 20px;
	}

	.pic img {
		object-fit: scale-down;
	}

	.pic-slider-container{
		justify-content: center;
		align-items: center;
		display: flex;
		min-height: 232px;
	}
	.title-container {
		font-size: 1rem;
		display: flex;
		justify-content: center;
		margin-top: 3%;
		left: 50%;
		text-align: center;
	}

	.slider-value {
		font-size: 3rem;
		display: flex;
		margin-top: 3%;
		left: 90%;
		text-align: center;
	}

	.slidecontainer {
		width: 60%;
		display: flex;
		justify-content: center;
		margin: 1% auto;
		align-items: center;
	}

	.slider {
		width: 100%;
		height: 20px;
		border-radius: 5px;
		background: white;
		outline: none;
		opacity: 0.6;
		-webkit-transition: 0.2s;
		transition: opacity 0.2s;
	}

	.slider:hover {
		opacity: 1;
	}

	.button-container-right {
		position: absolute;
		right: 5%;
		bottom: 20%;
	}

	.next-button {
		cursor: pointer;
		padding: 20px 50px;
		background-color: white;
		border: 2px solid #0056b3;
		font-weight: 600;
		color: #0056b3;
		border-radius: 8px;
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
			sans-serif;
	}

	.next-button:hover {
		background-color: #0056b3;
		color: white;
		transition: all ease 0.5s;
	}

	.button-container-left {
		position: absolute;
		left: 5%;
		bottom: 20%;
	}

	.back-button {
		cursor: pointer;
		padding: 20px 50px;
		background-color: white;
		border: 2px solid #c82333;
		font-weight: 600;
		color: #c82333;
		border-radius: 8px;
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
			sans-serif;
	}

	.back-button:hover {
		background-color: #c82333;
		color: white;
		transition: all ease 0.5s;
	}

	.overview {
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 15%;
		font-size: 0.9rem;
		background-color: #393e46;
	}

	.overview-wrapper {
		display: flex;
		flex-direction: column;
		margin-right: 40px;
		width: 150px;
		height: 50px;
		max-width: 150px;
	}

	.overview-wrapper p {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		color: white;
		font-weight: 700;
	}
	.overview-link {
		color: white;
		text-decoration: none;
		transition: color 0.3s;
		color: rgb(193, 193, 193);
		font-size: 17px;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		max-width: 140px;
		font-weight: 700;
	}
</style>
