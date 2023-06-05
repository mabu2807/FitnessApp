<script>
	import { each } from 'svelte/internal';
	import { onMount } from 'svelte';
	import { getStartedData } from '../Data';

	let sliderValue;
	let popUp = false;

	function showPopUp() {
		popUp = true;
	}

	function closePopUp() {
		popUp = false;
	}

	function updateSliderValue(event) {
		sliderValue = event.target.value;
		$getStartedData[4].value = sliderValue;
	}

	function startValue() {
		sliderValue = $getStartedData[4].value === '' ? '5' : $getStartedData[4].value;
		$getStartedData[4].value = sliderValue;
	}

	onMount(startValue);
</script>

<body>
	{#if popUp}
		<div id="popupOverlay">
			<div id="popupContent">
				<h2>Bitte bestätigen Sie Ihre Daten</h2>
				<table>
					{#each $getStartedData as data}
						<tr>
							<td>{data.title}</td>
							<td>{data.value}</td>
						</tr>
					{/each}
				</table>
				<div class="button-container-right">
					<a href="/getStarted/register" class="next-button">Bestätigen</a>
				</div>
				<div class="button-container-left">
					<button on:click={closePopUp} class="back-button">Abbrechen</button>
				</div>
			</div>
		</div>
	{/if}
	<div class="title-container">
		<div class="title">
			<h1>Schritt: 5</h1>
			<p>Wähle dein Aktivitätslevel aus!</p>
		</div>
	</div>

	<div class="slider-value">
		<p>{$getStartedData[4].value}</p>
	</div>

	<div class="slidecontainer">
		<input
			type="range"
			min="0"
			max="10"
			bind:value={sliderValue}
			class="slider"
			id="myRange"
			on:input={updateSliderValue}
		/>
	</div>

	<div class="button-container-right">
		<button on:click={showPopUp} class="next-button">Abschließen</button>
	</div>

	<div class="button-container-left">
		<a href="/getStarted/dob" class="back-button">Zurück</a>
	</div>

	<div class="overview">
		{#each $getStartedData as page, i}
			<div class="overview-wrapper">
				<a href={page.link} class="overview-link">{page.title}</a>
				<p>{page.value}</p>
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
	#popupOverlay {
		justify-content: center;
		align-items: center;
		display: flex;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.8);
		z-index: 9999;
	}

	#popupContent h2{
		font-size: 30px;
		font-weight: bold;
		text-decoration: underline;
	}
	#popupContent {
		display: flex;
		flex-direction: column;
		align-items: left;
		position: absolute;
		background-color: #fff;
		width: 60%;
		height: 60%;
		text-align: center;
		margin: 0 auto;
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
		font-size: 16px;
		font-weight: bold;
		text-decoration: underline;
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
		font-size: 16px;
		font-weight: bold;
		text-decoration: underline;
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
