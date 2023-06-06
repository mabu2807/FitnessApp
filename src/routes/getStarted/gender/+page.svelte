<script lang="ts">
	import { each } from 'svelte/internal';
	import { getStartedData } from '../Data';
	import { onMount } from 'svelte';

	let genderPics = [
		{ title:'männlich', imgClass :'fa-solid fa-person fa-lg'},
		{ title:'weiblich', imgClass:"fa-solid fa-person-dress fa-lg"}
	];

	function selectCard(value) {
		$getStartedData[4].value = value;
	}
</script>

<body>
	<div class="title-container">
		<div class="title">
			<h1>Schritt: 5</h1>
			<p>Wähle dein Geschlecht aus!</p>
		</div>
	</div>

	<div class="card-container">
		{#each genderPics as pic}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="card {$getStartedData[4].value === pic.title ? 'selected' : ''}"
				on:click={() => selectCard(pic.title)}
			>
				<i class={pic.imgClass}></i>
			</div>
		{/each}
	</div>

	<div class="button-container-right">
		<a href="/getStarted/level" class="next-button">Nächste</a>
	</div>
    <div class="button-container-left">
		<a href="/getStarted/dob" class="back-button">Zurück</a>
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

	.card-container {
		display: flex;
		justify-content: center;
		gap: 1rem;
		opacity: 1;
		transition: opacity 0.5s;
		margin-top: 0%;
	}
	.card-container h2{
		top: 10%;
	}
	.card-container i{
		bottom: 10%;
		font-size: 10rem;
	}

	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		border-radius: 4px;
		background-color: white;
		border: 1px solid #000000;
		width: 200px;
		height: 200px;

		cursor: pointer;
		margin: 40px 0;
		transition: transform 0.3s, box-shadow 0.3s;
	}

	.card:hover {
		transform: scale(1.05);
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		border: 2px solid black;
	}

	.card-title {
		font-size: 1.2rem;
		margin-bottom: 0.5rem;
		text-align: center;
	}

	.card.selected {
		background-color: #007bff;
		color: white;
		border-color: #007bff;
	}

	.card.selected:hover {
		transform: scale(1);
		box-shadow: none;
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
		position: absolute;
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
