<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Fitness Registration</title>
	<link rel="stylesheet" href="style.css" />
</head>

<body>
	<section class="register">
		<div class="register_box">
			<div class="left">
				<div class="contact">
					<form method="post">
						<div class="title-wrapper">
							<div class="top_link">
								<a href="/"><img src="src/assets/Logo.jpg" alt="Logo" /></a>
							</div>

							<h3>Erstelle einen Account</h3>
						</div>
						<input
							name="username"
							type="text"
							placeholder="Benutzername"
							value={form?.username ?? ''}
						/>
						<input name="email" type="email" placeholder="Email" value={form?.email ?? ''} />
						<input
							name="password"
							type="password"
							placeholder="Passwort"
							value={form?.password ?? ''}
						/>
						<input
							name="passwordConfirm"
							type="password"
							placeholder="Bestätige Passwort"
							value={form?.passwordConfirm ?? ''}
						/>
						<div class="error">
							{#if form?.missing}<p>Bitte füllen sie die Felder aus!</p>{/if}
						</div>
						<button type="submit" class="submit">Registrieren</button>
					</form>
				</div>
			</div>
			<div class="right">
				<div class="right-text">
					<h2>Join FitnessHub</h2>
					<h5>Komm in die Gruppe und werde zu einem Halbgott!</h5>
				</div>
				<div class="right-indicator" />
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

	.register {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.register_box {
		width: 90vw;
		height: 80vh;
		width: 1050px;
		height: 600px;

		position: relative;
		background: #fff;
		border-radius: 10px;
		box-shadow: 1px 4px 22px -8px #0004;
		display: flex;
		overflow: hidden;
	}

	.register_box .left {
		width: 43%;
		height: 100%;
		padding: 1vw 1vh;
		background-color: #fff;
	}

	.register_box .right {
		width: 57%;
		height: 100%;
		background-color: #000;
	}

	.left h3 {
		text-align: center;

		font-size: 2vw;
		margin-bottom: 1.5vh;
		margin-top: 3vh;

		color: #000;
	}

	.left .title-wrapper {
		display: flex;
		flex-direction: row;
	}

	.left .top_link {
		background-color: #000;
		width: 18%;

		height: 24%;
		overflow: hidden;
		margin-right: 3vw;
		margin-left: 0.7vw;
		margin-top: 0.7vh;
		border-radius: 5px;
	}

	.left .top_link img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.left input {
		border: none;
		width: 80%;

		margin-left: 0.6vw;
		margin-top: 3vh;
		border-bottom: 1px solid #000;
		padding: 0.4vw 0.4vh;

		width: 91%;
		overflow: hidden;
		background: transparent;
		font-weight: 600;
		font-size: 1.1vw;
		color: #000;
	}

	.register .submit {
		cursor: pointer;
		width: 12vw;
		height: 6vh;
		padding: 1vw 0.7vh;

		border: 2px solid black;
		border-radius: 8px;
		display: block;
		margin: auto;

		margin-top: 9vh;
		background: #393e46;
		color: #fff;
		font-weight: bold;
		font-size: 1.1vw;

		-webkit-box-shadow: 0px 9px 15px -11px rgba(0, 0, 0, 0.4);
		-moz-box-shadow: 0px 9px 15px -11px rgba(0, 0, 0, 0.4);
		box-shadow: 0px 9px 15px -11px rgba(0, 0, 0, 0.4);
	}

	.register .submit:hover {
		color: black;
		background-color: white;
		box-shadow: 0px 10px 20px -6px rgba(0, 0, 0, 0.627);
		transition: 0.5s ease all;
	}

	.right {
		background: radial-gradient(circle at center, #999999, #cccccc);
		color: #000;
		mix-blend-mode: difference;
		position: relative;
	}

	.right .right-text {
		height: 58%;
		position: relative;
		color: inherit;
		mix-blend-mode: initial;
		transform: translate(0%, 45%);
	}

	.right-text h2 {
		display: block;
		width: 100%;
		text-align: center;

		font-size: 4vw;
		font-weight: 500;
		color: #000;
	}

	.right-text h5 {
		display: block;
		width: 100%;
		text-align: center;

		font-size: 1.5vw;
		font-weight: 400;
		color: #000;
	}

	.right-indicator {
		position: absolute;
		bottom: 20px;
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
			width: 20vw;
		}
		50% {
			width: 26vw;
		}
		100% {
			width: 20vw;
		}
	}

	@media (max-width: 850px) {
		.register_box {
			flex-direction: column;
			height: auto;
		}

		.register_box .left {
			width: auto;
			height: auto;
			padding-left: 7vw;
			padding-top: 7vh;
			padding-bottom: 7vh;
			padding-right: 7vw;
		}

		.register_box .right {
			width: auto;
			height: 20vh;
		}
		.left h3 {
			font-size: 4vw;
		}

		.left input {
			font-size: 2vw;
			margin-top: 5vh;
		}

		.error {
			font-size: 2.3vw;
		}

		.register .submit {
			width: 22vw;
			height: 4vh;
			font-size: 2vw;
		}

		.right-text h5 {
			display: none;
		}
	}
</style>
