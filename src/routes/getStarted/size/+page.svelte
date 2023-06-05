<script>
	import { each } from 'svelte/internal';
	import { onMount } from 'svelte';
	import { getStartedData } from '../Data';

	let sliderValue;

	function updateSliderValue(event) {
		sliderValue = event.target.value;
		$getStartedData[1].value = sliderValue;
	}

	function startValue() {
		sliderValue = $getStartedData[1].value === '' ? '175' : $getStartedData[1].value;
		$getStartedData[1].value = sliderValue;
	}

	onMount(startValue);
</script>

<body>
	<div class="title-container">
		<div class="title">
			<h1>Schritt: 2</h1>
			<p>Wähle deine Körpergröße aus!</p>
		</div>
	</div>

	<div class="slider-value">
		<p>{sliderValue} cm</p>
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
	.title-container {
		font-size: 1rem;
		display: flex;
		justify-content: center;
		margin-top: 3%;
		left: 50%;
		text-align: center;
	}

	.slider-value {
		justify-content: center;
		font-size: 3rem;
		display: flex;
		margin-top: 3%;
		text-align: center;
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
