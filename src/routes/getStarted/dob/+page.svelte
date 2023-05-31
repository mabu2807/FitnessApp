<script>
	let pages = [
		{ title: 'Ziele', link: '/getStarted/goals', value: 'Backend' },
		{ title: 'Körpergröße', link: '/getStarted/size', value: 'Backend' },
		{ title: 'Gewicht', link: '/getStarted/weight', value: 'Backend' },
		{ title: 'Geburtsdatum', link: '/getStarted/dob', value: 'Backend' },
		{ title: 'Aktivitätslevel', link: '/getStarted/level', value: 'Backend' }
	];

    let dob = "";

    function updateDOB(event) {
		dob = event.target.value;
		pages[3].value = dob;
	}
</script>

<body>
	<div class="title-container">
		<div class="title">
			<h1>Schritt: 4</h1>
			<p>Wähle dein Geburtsdatum aus!</p>
		</div>
	</div>
	<div class="datepicker-container">
		<input type="date" id="dob" bind:value={dob} on:input={updateDOB}/>
	</div>
	<div class="button-container-right">
		<a href="/getStarted/level" class="next-button">Nächste</a>
	</div>

	<div class="button-container-left">
		<a href="/getStarted/weight" class="back-button">Zurück</a>
	</div>

	<div class="overview">
		{#each pages as page, i}
			<div class="overview-wrapper">
				<a href={page.link} class="overview-link">{page.title}</a>
				<p>{page.value}</p>
			</div>
		{/each}
	</div>
</body>

<style>
	.datepicker-container input[type='date'] {
		font-size: 2rem;
		padding: 10px;
		width: 200px;
		height: 40px;
	}

	.datepicker-container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
        margin-top: 5%;
		text-align: center;
	}
	.title-container {
		font-size: 1rem;
		display: flex;
		justify-content: center;
		margin-top: 3%;
		left: 50%;
		text-align: center;
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
