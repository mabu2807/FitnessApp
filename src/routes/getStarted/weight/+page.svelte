<script>
	import { each } from 'svelte/internal';
	import { getStartedData } from '../Data';
	import { onMount } from 'svelte';

	let picsource = '/final15.jpg';
	let sliderValue;

	function updateSliderValue(event) {
		$getStartedData[2].value = sliderValue;
		sliderValue = event.target.value;
		let val = parseInt(event.target.value);
		if (val < 60) {
			picsource = '/final5.jpg';
		} else if (val < 70) {
			picsource = '/final10.jpg';
		} else if (val < 80) {
			picsource = '/final15.jpg';
		} else if (val < 90) {
			picsource = '/final20.jpg';
		} else if (val < 100) {
			picsource = '/final25.jpg';
		} else if (val < 110) {
			picsource = '/final30.jpg';
		} else if (val < 120) {
			picsource = '/final35.jpg';
		} else {
			picsource = '/final40.jpg';
		}
	}
	function startValue() {
		sliderValue = $getStartedData[2].value === '' ? '90' : $getStartedData[2].value;
		$getStartedData[2].value = sliderValue;
	}

	onMount(startValue);
</script>

<body>
	<div class="title-container">
		<div class="title">
			<h1>Schritt: 3</h1>
			<p>Wähle dein Gewicht aus!</p>
		</div>
	</div>

	<div class="pic-slider-container">
		<div class="pic">
			<img src={picsource} alt="person" />
		</div>
		<div class="slider-value">
			<p>{sliderValue} kg</p>
		</div>
	</div>
	<div class="slidecontainer">
		<input
			type="range"
			min="50"
			max="130"
			bind:value={sliderValue}
			class="slider"
			id="myRange"
			on:input={updateSliderValue}
		/>
	</div>

	<div class="button-container-right">
		<a href="/getStarted/dob" class="next-button">Nächste</a>
	</div>

	<div class="button-container-left">
		<a href="/getStarted/size" class="back-button">Zurück</a>
	</div>

	<div class="overview">
		{#each $getStartedData as data, i}
			<div class="overview-wrapper">
				<a href={data.link} class="overview-link">{data.title}</a>
				{#if data.value!=''}
				<p>{data.value}{data.unit}</p>
				{/if}
			</div>
		{/each}
	</div>
</body>

<style>
	.pic {
		display: flex;
		left: 45%;
	}
	.pic img {
		object-fit: cover;
		max-height: 304px;
	}

	.pic-slider-container {
		justify-content: center;
		position: relative;
		display: flex;
		min-height: 232px;
		flex-direction: column; /* Updated */
		align-items: center; /* Added */
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
		left: 55%;
		text-align: center;
		position: absolute;
		top: 30%;
		transform: translateY(-50%);
	}

	.slidecontainer {
		position: absolute;
		bottom: 20%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 60%;
		display: flex;
		align-items: center;
		margin: 1% auto;
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
