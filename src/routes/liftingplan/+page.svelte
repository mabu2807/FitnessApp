<!-- App.svelte -->
<script lang="ts">
	import Dialog, { Header, Title, Content, Actions } from '@smui/dialog';
	import Button, { Label } from '@smui/button';

	// export let data;

	export let plans = [
		{
			id: '0',
			title: 'Trainingsplan 1: Muskelaufbau',
			description: 'Ein intensiver Trainingsplan für Fettverbrennung und Ausdauersteigerung.',
			image: 'plan1.jpg',
			plan: [
				{
					id: 1,
					exercise: 'Bankdrücken',
					description:
						'Beim Bankdrücken (engl.: „Bench Press“) liegt man auf einer sog. „Flachbank“ und drückt aus Brust, Schultern und Armen eine Langhantel nach oben – nachdem man sie vorher abgesenkt hat.',
					imagePath: 'plan1.jpg',
					sets: '3',
					repetitions: '18',
					weigth: '120'
				},
				{
					id: 2,
					exercise: 'Butterfly',
					description:
						'Bewege die Arme so weit, bis die Griffstangen vor der Brust zusammentreffen (oder kurz bevor sie sich berühren). Die Arme sollten fast durchgestreckt sein. Beim Zusammenführen der Arme vorne vor der Brust atmest du aus. Anschließend kannst du einatmen, während die Arme kontrolliert in die Ausgangsposition zurückkehren.',
					imagePath: 'plan2.jpg',
					sets: '3',
					repetitions: '18',
					weigth: '120'
				},
				{
					id: 1,
					exercise: 'Bankdrücken',
					description:
						'Beim Bankdrücken (engl.: „Bench Press“) liegt man auf einer sog. „Flachbank“ und drückt aus Brust, Schultern und Armen eine Langhantel nach oben – nachdem man sie vorher abgesenkt hat.',
					imagePath: 'plan1.jpg',
					sets: '3',
					repetitions: '18',
					weigth: '120'
				},
				{
					id: 2,
					exercise: 'Butterfly',
					description:
						'Bewege die Arme so weit, bis die Griffstangen vor der Brust zusammentreffen (oder kurz bevor sie sich berühren). Die Arme sollten fast durchgestreckt sein. Beim Zusammenführen der Arme vorne vor der Brust atmest du aus. Anschließend kannst du einatmen, während die Arme kontrolliert in die Ausgangsposition zurückkehren.',
					imagePath: 'plan2.jpg',
					sets: '3',
					repetitions: '18',
					weigth: '120'
				},
				{
					id: 1,
					exercise: 'Bankdrücken',
					description:
						'Beim Bankdrücken (engl.: „Bench Press“) liegt man auf einer sog. „Flachbank“ und drückt aus Brust, Schultern und Armen eine Langhantel nach oben – nachdem man sie vorher abgesenkt hat.',
					imagePath: 'plan1.jpg',
					sets: '3',
					repetitions: '18',
					weigth: '120'
				},
				{
					id: 2,
					exercise: 'Butterfly',
					description:
						'Bewege die Arme so weit, bis die Griffstangen vor der Brust zusammentreffen (oder kurz bevor sie sich berühren). Die Arme sollten fast durchgestreckt sein. Beim Zusammenführen der Arme vorne vor der Brust atmest du aus. Anschließend kannst du einatmen, während die Arme kontrolliert in die Ausgangsposition zurückkehren.',
					imagePath: 'plan2.jpg',
					sets: '3',
					repetitions: '18',
					weigth: '120'
				}
			]
		},
		{
			id: '1',
			title: 'Trainingsplan 2: Fettverbrennung',
			description: 'Ein intensiver Trainingsplan für Fettverbrennung und Ausdauersteigerung.',
			image: 'plan2.jpg',
			plan: [
				{
					id: 1,
					exercise: 'Bankdrücken',
					description:
						'Beim Bankdrücken (engl.: „Bench Press“) liegt man auf einer sog. „Flachbank“ und drückt aus Brust, Schultern und Armen eine Langhantel nach oben – nachdem man sie vorher abgesenkt hat.',
					imagePath: 'plan1.jpg',
					sets: '3',
					repetitions: '18',
					weigth: '120'
				},
				{
					id: 2,
					exercise: 'Butterfly',
					description:
						'Bewege die Arme so weit, bis die Griffstangen vor der Brust zusammentreffen (oder kurz bevor sie sich berühren). Die Arme sollten fast durchgestreckt sein. Beim Zusammenführen der Arme vorne vor der Brust atmest du aus. Anschließend kannst du einatmen, während die Arme kontrolliert in die Ausgangsposition zurückkehren.',
					imagePath: 'plan2.jpg',
					sets: '3',
					repetitions: '18',
					weigth: '120'
				},
				{
					id: 1,
					exercise: 'Bankdrücken',
					description:
						'Beim Bankdrücken (engl.: „Bench Press“) liegt man auf einer sog. „Flachbank“ und drückt aus Brust, Schultern und Armen eine Langhantel nach oben – nachdem man sie vorher abgesenkt hat.',
					imagePath: 'plan1.jpg',
					sets: '3',
					repetitions: '18',
					weigth: '120'
				},
				{
					id: 2,
					exercise: 'Butterfly',
					description:
						'Bewege die Arme so weit, bis die Griffstangen vor der Brust zusammentreffen (oder kurz bevor sie sich berühren). Die Arme sollten fast durchgestreckt sein. Beim Zusammenführen der Arme vorne vor der Brust atmest du aus. Anschließend kannst du einatmen, während die Arme kontrolliert in die Ausgangsposition zurückkehren.',
					imagePath: 'plan2.jpg',
					sets: '3',
					repetitions: '18',
					weigth: '120'
				},
				{
					id: 1,
					exercise: 'Bankdrücken',
					description:
						'Beim Bankdrücken (engl.: „Bench Press“) liegt man auf einer sog. „Flachbank“ und drückt aus Brust, Schultern und Armen eine Langhantel nach oben – nachdem man sie vorher abgesenkt hat.',
					imagePath: 'plan1.jpg',
					sets: '3',
					repetitions: '18',
					weigth: '120'
				},
				{
					id: 2,
					exercise: 'Butterfly',
					description:
						'Bewege die Arme so weit, bis die Griffstangen vor der Brust zusammentreffen (oder kurz bevor sie sich berühren). Die Arme sollten fast durchgestreckt sein. Beim Zusammenführen der Arme vorne vor der Brust atmest du aus. Anschließend kannst du einatmen, während die Arme kontrolliert in die Ausgangsposition zurückkehren.',
					imagePath: 'plan2.jpg',
					sets: '3',
					repetitions: '18',
					weigth: '120'
				}
			]
		},
		{
			id: '2',
			title: 'Trainingsplan 3: Flexibilität',
			description: 'Ein flexibler Trainingsplan für Ganzkörperfitness und Beweglichkeit.',
			image: 'plan3.jpg',
			plan: [
				{
					id: 1,
					exercise: 'Bankdrücken',
					description:
						'Beim Bankdrücken (engl.: „Bench Press“) liegt man auf einer sog. „Flachbank“ und drückt aus Brust, Schultern und Armen eine Langhantel nach oben – nachdem man sie vorher abgesenkt hat.',
					imagePath: 'plan1.jpg'
				},
				{
					id: 2,
					exercise: 'Butterfly',
					description:
						'Bewege die Arme so weit, bis die Griffstangen vor der Brust zusammentreffen (oder kurz bevor sie sich berühren). Die Arme sollten fast durchgestreckt sein. Beim Zusammenführen der Arme vorne vor der Brust atmest du aus. Anschließend kannst du einatmen, während die Arme kontrolliert in die Ausgangsposition zurückkehren.',
					imagePath: 'plan2.jpg'
				}
			]
		},
		{
			id: '3',
			title: 'Trainingsplan 4: Beweglichkeit',
			description: 'Ein umfassender Trainingsplan für die Beweglichkeit.',
			image: 'plan4.jpg',
			plan: [
				{
					id: 1,
					exercise: 'Bankdrücken',
					description:
						'Beim Bankdrücken (engl.: „Bench Press“) liegt man auf einer sog. „Flachbank“ und drückt aus Brust, Schultern und Armen eine Langhantel nach oben – nachdem man sie vorher abgesenkt hat.',
					imagePath: 'plan1.jpg'
				},
				{
					id: 2,
					exercise: 'Butterfly',
					description:
						'Bewege die Arme so weit, bis die Griffstangen vor der Brust zusammentreffen (oder kurz bevor sie sich berühren). Die Arme sollten fast durchgestreckt sein. Beim Zusammenführen der Arme vorne vor der Brust atmest du aus. Anschließend kannst du einatmen, während die Arme kontrolliert in die Ausgangsposition zurückkehren.',
					imagePath: 'plan2.jpg'
				}
			]
		}
	];

	$: plength = plans.length;

	let open = false;
	let showPlan: any;

	let addOnOpen = false;

	function setPlan(plan: any) {
		open = true;
		showPlan = plan;
	}

	function addOns() {
		addOnOpen = true;
	}
</script>
<!-- 
	

	.plan-card {
		width: calc(33.33% - 20px);
		margin-bottom: 20px;
		background-color: #ffffff;
		border-radius: 8px;
		padding: 20px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.plan-image {
		width: 100%;
		height: 270px;
		border-radius: 4px;
	}

	.plan-content {
		margin-top: 10px;
	}

	.plan-title {
		font-size: 18px;
		margin-bottom: 10px;
	}

	.plan-description {
		font-size: 14px;
		margin-bottom: 10px;
		overflow: hidden;
		text-overflow: ellipsis;
	} -->
<main>
	{#if plength > 0}
		<div class=" bg-gray-100 mb-6 py-4 px-6 flex items-center justify-center flex-col ">
			<h1 class="text-2xl font-bold">Wähle einen Trainingsplan</h1>
			<p class=" text-base text-gray-500">Entdecke unsere vielfältigen Trainingsmöglichkeiten</p>
		</div>
		<div class=" flex flex-wrap justify-center gap-4 font-sans">
			{#each plans as plan}
				<div class="plan-card w-1/3 mb-5 bg-white rounded-lg p-4 shadow">
					<img src={plan.image} alt={plan.title} class="plan-image w-full h-72 rounded-md" />
					<div class="mt-4">
						<h3 class="mb-3  text-lg font-bold">{plan.title}</h3>
						<p class="mb-3 text-sm text-gray-700">{plan.description}</p>
						<button on:click={() => setPlan(plan)} class="btn variant-filled">
							<Label>Auswählen</Label>
						</button>
					</div>
				</div>
			{/each}
		</div>

		{#if showPlan}
			<Dialog
				bind:open
				aria-labelledby="large-scroll-title"
				aria-describedby="large-scroll-content"
				surface$style="width: 1050px; max-width: calc(100vw - 32px);"
			>
				<Title id="large-scroll-title">{showPlan.title}</Title>
				<Content id="large-scroll-content">
					<div />
					<div class="flex flex-col justify-center items-center mt-5">
						{#each { length: showPlan.plan.length } as _, i}
							<h2>Übung {i + 1}: {showPlan.plan[i].exercise}</h2>
							<div class="flex flex-row text-center">
								<div class="w-3/5 h-72 rounded-lg border-solid border-gray-400 border-2">
									<img class="w-full h-full object-cover" src={showPlan.plan[i].imagePath} alt={showPlan.plan[i].imagePath} />
								</div>
								<div class="w-full h-1/5">
									<p>
										<b> {showPlan.plan[i].sets} </b> Sätze x <b> {showPlan.plan[i].repetitions} </b>
										Wiederholungen (Gewicht: Langhantel mit zusätzlichen
										<b> {showPlan.plan[i].weigth}kg </b>)
									</p>

									<h4>Hinweise zur Ausführung:</h4>
									<p>{showPlan.plan[i].description}</p>
								</div>
							</div>
						{/each}
					</div>
				</Content>
				<Actions>
					<Button action="accept">
						<Label>Done</Label>
					</Button>
				</Actions>
			</Dialog>
		{/if}
		
	{:else}
		<p class="no-plan-message">Keine Trainingspläne gefunden.</p>
	{/if}
</main>



<!-- 
<style>
	

	.select-button {
		font-size: 16px;
		padding: 8px 16px;
		margin-top: 10px;
		border: none;
		background-color: #393e46;
		color: #ffffff;
		border: 1px solid #393e46;
		border-radius: 4px;
		cursor: pointer;
	}

	.select-button:hover {
		border: none;
		background-color: #ffffff;
		color: #393e46;
		border: 1px solid #393e46;
		border-radius: 4px;
		cursor: pointer;
		transition: 0.5s ease all;
	}

	.info-container {
		background-color: #f5f5f5;
		padding: 20px;
		border-radius: 8px;
		text-align: center;

		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	.info-title {
		font-size: 24px;
		margin-bottom: 10px;
	}

	.info-text {
		font-size: 16px;
		margin-bottom: 20px;
	}
	.button-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.subscribe-button {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 18px;
		padding: 10px 20px;
		border: none;
		background-color: #fffdfd;
		color: #393e46;
		border-radius: 7px;
		cursor: pointer;
		border: 2px solid #393e46;
		overflow: hidden;
		margin-bottom: 20px;
		transition: background-color 0.3s ease;
		animation: shadow-animation 2s infinite linear;
	}

	@keyframes shadow-animation {
		0% {
			box-shadow: 0 4px 10px rgba(157, 157, 157, 0.518);
		}
		25% {
			box-shadow: 6px 10px 20px rgba(0, 0, 0, 0.341);
		}
		50% {
			box-shadow: 4px 18px 25px rgba(0, 0, 0, 0.518);
		}
		75% {
			box-shadow: 6px 10px 20px rgba(0, 0, 0, 0.341);
		}
		100% {
			box-shadow: 0px 4px 10px rgba(157, 157, 157, 0.518);
		}
	}

	.subscribe-button:hover {
		background-color: #393e46;
		color: white;
	}
	.subscribe-button:hover .plus-icon {
		background-color: white;
		color: #393e46;
		transition: all 0.2s ease;
	}

	.subscribe-container-plus {
		margin-left: 20px;
		color: #393e46;
	}

	.subscribe-text {
		font-size: 18px;
		font-family: 'Lato', sans-serif;
	}

	.plus-icon {
		display: inline-block;
		width: 20px;
		height: 20px;
		background-color: #393e46;
		color: white;

		border-radius: 50%;
		position: relative;
		margin-left: 5px;
		transform: translateX(-50%);
		animation: plus-icon-animation 2s infinite alternate;
	}

	@keyframes plus-icon-animation {
		0% {
			transform: translateX(-50%) scale(1);
		}
		50% {
			transform: translateX(-50%) scale(1.2);
		}
		100% {
			transform: translateX(-50%) scale(1);
		}
	}

	.category {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;
		background-color: #f5f5f5;
		font-weight: bold;
		margin: 20px 0;
		text-align: center;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	.category-title {
		font-size: 28px;
	}

	.category-description {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-size: 18px;
		margin-bottom: 5px;
		text-align: center;
		color: rgb(144, 144, 144);
	}

	.plan-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 20px;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	.plan-card {
		width: calc(33.33% - 20px);
		margin-bottom: 20px;
		background-color: #ffffff;
		border-radius: 8px;
		padding: 20px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.plan-image {
		width: 100%;
		height: 270px;
		border-radius: 4px;
	}

	.plan-content {
		margin-top: 10px;
	}

	.plan-title {
		font-size: 18px;
		margin-bottom: 10px;
	}

	.plan-description {
		font-size: 14px;
		margin-bottom: 10px;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.footer-n {
		background-color: #393e46;
		color: #ffffff;

		padding: 44px 0;
		width: 100%;
		text-align: center;
		margin-top: 5%;
	}
	.footer {
		background-color: #393e46;
		color: #ffffff;

		padding: 44px 0;
		width: 100%;
		text-align: center;
		margin-top: 18%;
	}

	.footer-content {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.footer-text {
		font-size: 14px;
		margin: 0;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
</style> -->
