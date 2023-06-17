<script lang="ts">
	import { modalStore } from '@skeletonlabs/skeleton';

	const testExercise = [
		{
			id: 1,
			exercise: 'Bankdrücken schräg',
			description:
				'Beim Bankdrücken (engl.: „Bench Press“) liegt man auf einer sog. „Flachbank“ und drückt aus Brust, Schultern und Armen eine Langhantel nach oben – nachdem man sie vorher abgesenkt hat.',
			imagePath: 'plan1.jpg',
			sets: '3',
			repetitions: '18',
			weigth: '120'
		},
		{
			id: 2,
			exercise: 'Butterfly über Kopf',
			description:
				'Bewege die Arme so weit, bis die Griffstangen vor der Brust zusammentreffen (oder kurz bevor sie sich berühren). Die Arme sollten fast durchgestreckt sein. Beim Zusammenführen der Arme vorne vor der Brust atmest du aus. Anschließend kannst du einatmen, während die Arme kontrolliert in die Ausgangsposition zurückkehren.',
			imagePath: 'plan2.jpg',
			sets: '3',
			repetitions: '18',
			weigth: '120'
		},
		{
			id: 3,
			exercise: 'Bankdrücken stehend',
			description:
				'Beim Bankdrücken (engl.: „Bench Press“) liegt man auf einer sog. „Flachbank“ und drückt aus Brust, Schultern und Armen eine Langhantel nach oben – nachdem man sie vorher abgesenkt hat.',
			imagePath: 'plan1.jpg',
			sets: '3',
			repetitions: '18',
			weigth: '120'
		},
		{
			id: 4,
			exercise: 'Butterfly unterm Tisch',
			description:
				'Bewege die Arme so weit, bis die Griffstangen vor der Brust zusammentreffen (oder kurz bevor sie sich berühren). Die Arme sollten fast durchgestreckt sein. Beim Zusammenführen der Arme vorne vor der Brust atmest du aus. Anschließend kannst du einatmen, während die Arme kontrolliert in die Ausgangsposition zurückkehren.',
			imagePath: 'plan2.jpg',
			sets: '3',
			repetitions: '18',
			weigth: '120'
		},
		{
			id: 5,
			exercise: 'Bankdrücken aufm Stuhl',
			description:
				'Beim Bankdrücken (engl.: „Bench Press“) liegt man auf einer sog. „Flachbank“ und drückt aus Brust, Schultern und Armen eine Langhantel nach oben – nachdem man sie vorher abgesenkt hat.',
			imagePath: 'plan1.jpg',
			sets: '3',
			repetitions: '18',
			weigth: '120'
		},
		{
			id: 6,
			exercise: 'Butterfly mit Klatschen',
			description:
				'Bewege die Arme so weit, bis die Griffstangen vor der Brust zusammentreffen (oder kurz bevor sie sich berühren). Die Arme sollten fast durchgestreckt sein. Beim Zusammenführen der Arme vorne vor der Brust atmest du aus. Anschließend kannst du einatmen, während die Arme kontrolliert in die Ausgangsposition zurückkehren.',
			imagePath: 'plan2.jpg',
			sets: '3',
			repetitions: '18',
			weigth: '120'
		}
	];
</script>

{#if $modalStore[0]}
	<div class="card bg-success-400 mt-36">
		<div class="flex justify-end p-4">
			<button on:click={() => modalStore.close()}>
				<i class="fa-solid fa-circle-xmark text-2xl hover:text-error-500" />
			</button>
		</div>
		<div class="px-7 pb-7">
			{#each testExercise as exercise}
				<h6 class="h6 font-bold">Übung {exercise.id}: {exercise.exercise}</h6>
				<div class="flex flex-row gap-7 mb-6 mt-2">
					<div class="w-40">
						<img class="rounded" src={exercise.imagePath} alt={exercise.imagePath} />
					</div>
					<div class="w-full">
						<p class="sm:text-base text-sm">
							<b> {exercise.sets} </b> Sätze x <b> {exercise.repetitions} </b>
						</p>
						<p class="sm:text-base text-sm">
							Wiederholungen (Gewicht: Langhantel mit zusätzlichen
							<b> {exercise.weigth}kg</b>)
						</p>

						<!-- <h4>Hinweise zur Ausführung:</h4>
                <p class="text-sm">{exercise.description}</p> -->
					</div>
				</div>
			{/each}
		</div>
	</div>
{/if}
