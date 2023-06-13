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


	<section>
		<div class="card flex relative overflow-hidden m-10">
			<div class="w-2/5">
				<div>
					<form method="post">
						<div class="flex flex-row">
							<div class="w-16 m-8 overflow-hidden rounded bg-black">
								<a href="/"><img src="Logo.jpg" alt="Logo" /></a>
							</div>

							<h3>Erstelle einen Account</h3>
						</div>
						<input class="input"
							name="username"
							type="text"
							placeholder="Benutzername"
							value={form?.username ?? ''}
						/>
						<input class="input" name="email" type="email" placeholder="Email" value={form?.email ?? ''} />
						<input class="input"
							name="password"
							type="password"
							placeholder="Passwort"
							value={form?.password ?? ''}
						/>
						<input class="input"
							name="passwordConfirm"
							type="password"
							placeholder="Bestätige Passwort"
							value={form?.passwordConfirm ?? ''}
						/>
						<!-- <div class="error">
							{#if form?.missing}<p>Bitte füllen sie die Felder aus!</p>{/if}
						</div> -->
						<button type="submit" class="submit">Registrieren</button>
					</form>
				</div>
			</div>
			<div class="w-3/5 right-gradient">
				<div class="relative">
					<h2 class="h2 text-center">Join FitnessHub</h2>
					<h5 class="h5 text-center">Komm in die Gruppe und werde zu einem Halbgott!</h5>
				</div>
				<div class="indicator absolute w-7 h-2 rounded-full" />
			</div>
		</div>
	</section>


<style>
	.right-gradient {
		background-image:
			radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),
			radial-gradient(at 100% 0%,  rgba(var(--color-primary-500) / 0.33) 0px, transparent 50%);
}
</style>

<!-- <style>
	/* body {
		margin: 0;
		padding: 0;
		font-family: Arial, sans-serif;
	}

	.error {
		margin-left: 0.9vw;
		font-size: 1.1vw;
	}  */

	/* .register {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* .register_box {
		width: 90vw;
		height: 80vh;

		position: relative;
		background: var(--white);
		border-radius: 10px;
		box-shadow: 1px 4px 22px -8px var(--black);
		display: flex;
		overflow: hidden;
	}

	.register_box .left {
		width: 43%;
		height: 100%;
		padding: 1vw 1vh;
		background-color: var(--white);
	}

	.register_box .right {
		width: 57%;
		height: 100%;
		background-color: var(--black);
	}

	.left h3 {
		text-align: center;

		font-size: 2vw;
		margin-bottom: 1.5vh;
		margin-top: 3vh;

		color: var(--black);
	} */

	/* .left .title-wrapper {
		display: flex;
		flex-direction: row;
	} */

	/* .left .top_link {
		background-color: var(--black);
		width: 18%;

		height: 24%;
		overflow: hidden;
		margin-right: 3vw;
		margin-left: 0.7vw;
		margin-top: 0.7vh;
		margin-bottom: 3vh;
		border-radius: 5px;
	}

	.left .top_link img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	} */

	/* .left input {
		width: 90%;
		padding: 1.3vh 0.5vw;
		margin-left: 0.7vw;
		margin-bottom: 3vh;
		border: 1px solid var(--lightgrey-input);
		overflow: hidden;
		background: transparent;
		font-weight: 600;
		font-size: 1.1vw;
		border-radius: 8px;
	}

	.register .submit {
		cursor: pointer;
		width: 12vw;
		height: 6vh;
		padding: 1vh 0.7vw;

		border: 2px solid var(--darkgrey);
		border-radius: 8px;
		display: block;
		margin: auto;

		margin-top: 7vh;
		background: var(--darkgrey);
		color: var(--white);
		font-weight: bold;
		font-size: 1.1vw;
	}

	.register .submit:hover {
		color: var(--black);
		background-color: var(--white);
		box-shadow: 0px 10px 20px -6px rgba(0, 0, 0, 0.627);
		transition: 0.5s ease all;
	}

	.right {
		background: radial-gradient(circle at center, var(--grey-border), var(--lightgrey-input));
		color: var(--black);
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
		color: var(--black);
	}

	.right-text h5 {
		display: block;
		width: 100%;
		text-align: center;

		font-size: 1.5vw;
		font-weight: 400;
		color: var(--black);
	}

	.indicator {
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
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
			margin-top: 3vh;
		}

		.error {
			font-size: 2vw;
		}

		.register .submit {
			width: 32vw;
			height: 8vh;
			font-size: 2vw;
		}

		.right-text h5 {
			display: none;
		}
	}
</style> */ -->
