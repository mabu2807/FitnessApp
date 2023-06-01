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
				<div class="left-indicator" />
				<div class="top_link">
					<a href="/"><img src="logo.png" alt="Logo" /></a>
				</div>
				<div class="contact">
					<form method="post">
						<h3>Member Login</h3>
						{#if form?.missing}<p class="error">Missing field required!</p>{/if}
						<input name="email" placeholder="email" type="text" value={form?.email ?? ''} />
						<input
							name="password"
							placeholder="password"
							type="password"
							value={form?.password ?? ''}
						/>
						<button type="submit" class="submit">Sign In</button>
						<div class="register-wrapper">
							<p>
								Du hast noch keinen Account? Dann <a href="/register">Registriere</a> dich jetzt!
							</p>
						</div>
					</form>
				</div>
			</div>
			<div class="right">
				<div class="right-text">
					<h2>Welcome to FitnessHub</h2>
					<h5>Your ultimate fitness destination</h5>
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

	.login {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #f3f3f3;
	}

	.login_box {
		width: 900px;
		height: 500px;
		display: flex;
		background-color: #fff;
		border-radius: 8px;
		box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
	}

	.login_box .left {
		width: 50%;
		padding: 30px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.login_box .right {
		width: 50%;
		position: relative;
	}

	.left .top_link {
		margin-bottom: 30px;
	}

	.left .top_link a {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: #333;
	}

	.left .top_link img {
		height: 30px;
		margin-right: 10px;
	}

	.left h3 {
		font-size: 24px;
		font-weight: 500;
		margin-bottom: 30px;
	}

	.left input {
		width: 95%;
		padding: 10px;
		margin-bottom: 20px;
		border: 1px solid #ccc;
		border-radius: 5px;
	}

	.left .submit {
		width: 100%;
		padding: 15px;
		border: 2px solid #393e46;
		border-radius: 5px;
		background-color: #393e46;
		color: #fff;
		font-size: 16px;
		font-weight: bold;
		cursor: pointer;
	}
	.left .register-wrapper {
		margin-top: 20px;
		font-size: 14px;
	}

	.left .register-wrapper a {
		text-decoration: none;
	}
	.left .register-wrapper a:hover {
		color: #393e46;
		border-bottom: 1px solid #393e46;
		transition: all ease 0.7s;
	}

	.left .submit:hover {
		color: #393e46;
		background-color: #fff;
		transition: all ease 0.5s;
	}

	.right .right-text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
	}

	.right-text h2 {
		font-size: 36px;
		font-weight: 500;
		color: #333;
		margin-bottom: 20px;
	}

	.right-text h5 {
		font-size: 18px;
		font-weight: 500;
	}

	.right-indicator {
		position: absolute;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
		width: 70px;
		height: 5px;
		background-color: #393e46;
		border-radius: 10px;
		animation: indicator 1.5s ease-in-out infinite alternate;
	}

	.left-indicator {
		position: absolute;
		top: 28%;
		left: 65%;
		transform: translateX(-50%);
		width: 70px;
		height: 5px;
		background-color: #393e46;
		border-radius: 10px;
		animation: indicator 1.5s ease-in-out infinite alternate;
	}

	@keyframes indicator {
		0% {
			width: 200px;
		}
		50% {
			width: 250px;
		}
		100% {
			width: 200px;
		}
	}
</style>
