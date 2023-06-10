<body>
	<div class="first-container">
		<div class="first-wrapper">
			<div class="first-title-wrapper">
				<h2 class="first-title">Willkommen</h2>
				<img src="Logo.jpg" alt="logo" />
			</div>

			<div class="first-description-wrapper">
				<p>
					Hier kannst du deine Ziele festlegen und deine Fortschritte verfolgen. Bist du bereits
					registriert? Klicke auf den Button unten, um auf dein Konto zuzugreifen. Wenn nicht, melde
					dich jetzt an und starte deine Fitnessreise mit uns. Zusammen erreichen wir deine Ziele!
				</p>
				<p>Du hast bereits ein Account?</p>
			</div>

			<div class="first-button-">
				<a href="/login">Melde dich an!</a>
				<a href="/getStarted/goals" class="first-next-button">Registrierung</a>
			</div>
		</div>
	</div>
</body>

<style>
	.first-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		padding: 0px;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		box-sizing: border-box;
	}

	.first-wrapper {
		box-shadow: 0 0 10px black;
		margin-bottom: 20px;
		border-radius: 8px;
		width: 50%;
		padding: 20px 50px 81px;
	}

	.first-title-wrapper {
		margin-top: 0px;
		display: flex;
		flex-direction: row;
		font-size: 30px;
	}

	.first-title-wrapper img {
		object-fit: cover;
		width: 25%;
		height: 0%;
		margin-left: auto;
	}

	.first-title {
		color: #333;
	}

	.first-description-wrapper {
		margin-top: 0px;
		line-height: 1.6;
	}

	.first-button- {
		margin-top: 40px;
		display: flex;
		justify-content: space-between;
	}
	.first-button- a {
		cursor: pointer;
		padding: 12px 29px;
		background-color: white;
		border: 2px solid #00adb5;
		font-weight: 600;
		color: #00adb5;
		border-radius: 8px;
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
			sans-serif;
		text-decoration: none;
		font-size: 15px;
	}

	.first-button- a:hover {
		background-color: #00adb5;
		color: white;
	}

	.first-next-button {
		cursor: pointer;
		padding: 12px 29px;
		background-color: white;
		border: 2px solid #c82333;
		font-weight: 600;
		color: #c82333;
		border-radius: 8px;
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
			sans-serif;
	}

	.first-next-button:hover {
		background-color: #c82333;
		color: white;
		transition: all ease 0.5s;
	}
</style>
