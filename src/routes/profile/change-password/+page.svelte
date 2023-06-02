<script lang="ts">
	import type { ActionData } from '../change-password/$types';

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
						<h3>Passwort ändern</h3>
						<input 
							name="oldPassword" 
							placeholder="Bisheriges Passwort" 
							type="password" 
							value={form?.oldPassword ?? ''} />
						<input
							name="newPassword"
							placeholder="Neues Passwort"
							type="password"
							value={form?.newPassword ?? ''}
						/>
						<input
							name="newPasswordRepeated"
							placeholder="Wiederhole dein neues Passwort"
							type="password"
							value={form?.newPasswordRepeated ?? ''}
						/>
						{#if form?.missing}<p class="error">Bitte füllen sie die Felder aus!</p>{/if}
						<button type="submit" class="submit">Passwort ändern</button>
					</form>
				</div>
			<div class="right">
				<div class="top-indicator" />
				<div class="right-text">
					<h2>FitnessHub</h2>
					<h5>Von Cardio Carsten zu Markus Masse, wir bitten jeden zur Kasse!</h5>
				</div>
				<div class="bottom-indicator" />
			</div>
		</div>
	</section>
</body>