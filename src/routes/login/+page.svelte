<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Fitness Login</title>
	<link rel="stylesheet" href="style.css" />
</head>

<body>
	<section class="login">
		<div class="login_box">
			<div class="left">
				<div class="contact">
					<form method="post">
						<div class="title-wrapper">
							<div class="top_link">
								<a href="/"><img src="src/assets/Logo.jpg" alt="Logo" /></a>
							</div>

							<h3>Benutzer Login</h3>
						</div>
						<input name="email" placeholder="Email" type="text" value={form?.email ?? ''} />
						<input
							name="password"
							placeholder="Passwort"
							type="password"
							value={form?.password ?? ''}
						/>
						{#if form?.missing}<p class="error">Bitte füllen sie die Felder aus!</p>{/if}
						<button type="submit" class="submit">Sign In</button>
						<div class="register-wrapper">
							<p>
								Noch keinen Account? Dann <a href="/register">Registriere</a> dich jetzt!
							</p>
						</div>
					</form>
				</div>
			</div>
			<div class="right">
				<div class="top-indicator" />
				<div class="right-text">
					<h2>Willkommen bei FitnessHub</h2>
					<h5>Von Cardio Carsten zu Markus Masse, wir bitten jeden zur Kasse!</h5>
				</div>
				<div class="bottom-indicator" />
			</div>
		</div>
	</section>
</body>

<style>
	body {
		margin: 0;
		padding: 0;
		font-family: Arial, sans-serif;
	}

	.error {
		margin-left: 0.7vw;
		font-size: 1.1vw;
	}

	.login {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #f3f3f3;
	}

	.login_box {
		width: 55vw;
		height: 70vh;
		display: flex;
		position: relative;
		overflow: hidden;
		background-color: #fff;
		border-radius: 8px;
		box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
	}

	.login_box .left {
		width: 50%;
		height: 100%;
		position: relative;
		padding: 5vh 5vw;
	}

	.login_box .right {
		width: 50%;
		height: 100%;
		position: relative;
	}

	.left .top_link {
		background-color: #000;
		width: 18%;

		height: 24%;
		overflow: hidden;
		margin-right: 3vw;
		margin-left: 0.7vw;
		margin-top: 0.7vh;
		margin-bottom: 5vh;
		border-radius: 5px;
	}

	.left .top_link img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.left h3 {
		font-size: 2vw;
		font-weight: 500;
		margin-bottom: 5vh;
		margin-top: 2vh;
	}

	.left .title-wrapper {
		display: flex;
		flex-direction: row;
	}

	.left input {
		width: 90%;
		padding: 1.3vh 0.5vw;
		margin-left: 0.7vw;
		margin-bottom: 3vh;
		border: 1px solid #ccc;
		overflow: hidden;
		background: transparent;
		font-weight: 600;
		font-size: 1.1vw;
		border-radius: 8px;
	}

	.left .submit {
		width: 95%;
		margin-top: 2vh;

		margin-left: 0.7vw;
		padding: 1vh 0.7vw;
		border: 2px solid #393e46;
		border-radius: 8px;
		background-color: #393e46;
		color: #fff;
		font-size: 1.2vw;
		font-weight: bold;
		cursor: pointer;
	}
	.left .register-wrapper {
		margin-top: 3vh;
		margin-left: 0.7vw;
		font-size: 1vw;
	}

	.left .register-wrapper a {
		text-decoration: none;
	}
	.left .register-wrapper a:hover {
		color: #393e46;
		border-bottom: 1px solid #393e46;
	}

	.left .submit:hover {
		color: #393e46;
		background-color: #fff;
		transition: all ease 0.5s;
	}

	.right .right-text {
		position: relative;
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
	}

	.right-text h2 {
		font-size: 2.4vw;
		font-weight: 500;
		color: #333;
		margin-left: 3vw;
		margin-right: 3vw;
		margin-bottom: 2vh;
	}

	.right-text h5 {
		font-size: 1.3vw;
		font-weight: 300;
		color: #8f8f8f;
		margin-top: 3vh;
		margin-right: 4vw;
		margin-left: 4vw;
	}

	.bottom-indicator {
		position: absolute;
		bottom: 10%;
		left: 50%;
		transform: translateX(-50%);
		width: 10vw;
		height: 0.7vh;
		background-color: #000;
		border-radius: 10px;
		animation: indicator 1.5s ease-in-out infinite alternate;
	}

	.top-indicator {
		position: absolute;
		top: 10%;
		left: 50%;
		transform: translateX(-50%);
		width: 10vw;
		height: 0.7vh;
		background-color: #000;
		border-radius: 10px;
		animation: indicator 1.5s ease-in-out infinite alternate;
	}

	@keyframes indicator {
		0% {
			width: 15vw;
		}
		50% {
			width: 19vw;
		}
		100% {
			width: 15vw;
		}
	}

	@media (max-width: 850px) {
		.login_box {
			flex-direction: column;
			height: auto;
		}

		.login_box .left {
			width: auto;
			height: auto;
			padding: 3vh, 3vw;
		}

		.login_box .right {
			width: auto;
			height: 20vh;
		}
		.left h3 {
			font-size: 3vw;
			margin-top: 2vh;
			margin-bottom: 2vh;
		}

		.left input {
			font-size: 1.5vw;
			margin-top: 0;
			padding: 0.5vh 2vw;
		}

		.error {
			font-size: 1.5vw;
		}

		.login .submit {
			width: 25vw;
			height: 4vh;
			font-size: 1.4vw;
			margin-top: 1vh;
		}
		.left .register-wrapper {
			margin-top: 3vh;
			margin-left: 0.7vw;
			font-size: 1.5vw;
		}

		.right-text h2 {
			font-size: 2.6vw;
		}
		.right-text h5 {
			font-size: 1.6vw;
			margin-right: 10vw;
			margin-left: 10vw;
		}

		.top-indicator {
			top: 7%;

			height: 0.4vh;
		}

		.bottom-indicator {
			height: 0.4vh;
			bottom: 7%;
		}
	}
</style>
