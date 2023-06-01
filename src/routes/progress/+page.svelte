<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import Chart from "chart.js/auto";

  let trainingPlans = [
  {
    name: "Plan 1",
    exercises: [
      {
        name: "Übung 1",
        weight: [
          { x: 10, y: 5 },
          { x: 20, y: 10 },
          { x: 15, y: 7 },
          { x: 25, y: 12 }
        ],
      },
      {
        name: "Übung 2",
        weight: [
          { x: 5, y: 2 },
          { x: 10, y: 4 },
          { x: 15, y: 7 },
          { x: 25, y: 12 },
          { x: 10, y: 5 }
        ],
      },
    ],
  },
  {
    name: "Plan 2",
    exercises: [
      {
        name: "Übung 3",
        weight: [
          { x: 30, y: 15 },
          { x: 40, y: 20 },
        ],
      },
      {
        name: "Übung 4",
        weight: [
          { x: 15, y: 7 },
          { x: 25, y: 12 },
        ],
      },
    ],
  },
];


  let selectedTrainingPlan = trainingPlans[0];
  let weightInput: Array<Array<string>> = trainingPlans.map(plan => plan.exercises.map(() => ""));
  let weightInput2: Array<Array<string>> = trainingPlans.map(plan => plan.exercises.map(() => ""));


  let charts: any[] = [];

  function createChart(canvas: any) {
    const ctx = canvas.getContext("2d");

    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [],
        datasets: [
          {
            label: "Gewicht",
            data: [],
            borderColor: "rgba(0, 123, 255, 0.5)",
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            type: "linear",
            position: "bottom",
            title: {
              display: true,
              text: "Datum"
            }
          },
          y: {
            title: {
              display: true,
              text: "Gewicht"
            }
          }
        }
      }
    });

    return chart;
  }

  function updateChart(chart: any, data: any) {
    chart.data.datasets[0].data = data;
    chart.update();
  }

  
  function addWeight(planIndex: number, exerciseIndex: number) {
    const weight = parseFloat(weightInput[planIndex][exerciseIndex]);
    const weight2 = parseFloat(weightInput2[planIndex][exerciseIndex]);
    if (!isNaN(weight) && !isNaN(weight2)) {
      trainingPlans[planIndex].exercises[exerciseIndex].weight.push({ x: weight, y: weight2 });
      const chartIndex = planIndex * trainingPlans[0].exercises.length + exerciseIndex;
      updateChart(charts[chartIndex], trainingPlans[planIndex].exercises[exerciseIndex].weight);
    }
    weightInput[planIndex][exerciseIndex] = "";
    weightInput2[planIndex][exerciseIndex] = "";
  }

  function updateWeight(event: any) {
  const weight = parseFloat(event.target.value);
  const planIndex = parseInt(event.target.dataset.planIndex);
  const exerciseIndex = parseInt(event.target.dataset.exerciseIndex);

  if (!isNaN(weight)) {
    (trainingPlans[planIndex].exercises[exerciseIndex].weight as any) = weight;
    updateChart(charts[planIndex * trainingPlans.length + exerciseIndex], trainingPlans[planIndex].exercises[exerciseIndex].weight);
  }
}



  let selectedExerciseIndex = 0;

  onMount(() => {
  const containers = document.querySelectorAll(".exercise-container");
  containers.forEach((container, index) => {
    const canvas = container.querySelector("canvas");
    const chart = createChart(canvas);
    charts.push(chart);
    const trainingPlanIndex = Math.floor(index / trainingPlans[0].exercises.length);
    const exerciseIndex = index % trainingPlans[0].exercises.length;
    updateChart(chart, trainingPlans[trainingPlanIndex].exercises[exerciseIndex].weight);
  });

  trainingPlans.forEach((plan, planIndex) => {
      plan.exercises.forEach((exercise, exerciseIndex) => {
        const chartIndex = planIndex * trainingPlans[0].exercises.length + exerciseIndex;
        updateChart(charts[chartIndex], exercise.weight);
      });
    });
});


  onDestroy(() => {
    charts.forEach((chart) => {
      chart.destroy();
    });
  });
</script>

<main>
  <h1>Fitness Tracking</h1>

  {#each trainingPlans as trainingPlan, planIndex}
    <section>
      <h2>{trainingPlan.name}</h2>
      <div class="container">
        {#each trainingPlan.exercises as exercise, exerciseIndex}
          <div class="exercise-container" on:keydown={() => {
            selectedTrainingPlan = trainingPlan;
            selectedExerciseIndex = exerciseIndex;
          }}>
            <h3>{exercise.name}</h3>
            <div class="input-container">
              
              <input type="number" placeholder="Gewicht" bind:value={weightInput[planIndex][exerciseIndex]} />
              <input type="number" placeholder="Gewicht 2" bind:value={weightInput2[planIndex][exerciseIndex]} />
              <button on:click={() => addWeight(planIndex, exerciseIndex)}>Hinzufügen</button>
            </div>
            <canvas></canvas>
          </div>
        {/each}
      </div>
    </section>
  {/each}
</main>

<style>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}

.exercise-container {
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 20px;
  transition: background-color 0.3s ease;
}



.exercise-container.selected {
  background-color: #ccc;
}

h2,
h3 {
  margin-top: 0;
}

input[type="number"] {
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border: 2px solid #333;
  border-radius: 5px;
  cursor: pointer;
  width: 40%;
  font-weight: 600;
}

button:hover {
  background-color: white;
  color: #333;
  transition: all 0.4s ease-in-out;
}

canvas {
  width: 100%;
  height: 200px;
  margin-top: 20px;
  border: 1px solid #ccc;
}
</style>