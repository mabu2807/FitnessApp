<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import Chart from "chart.js/auto";

  let trainingPlans = [
    {
      name: "Plan 1",
      exercises: [
        { name: "Bankdrücken", weight: [] },
        { name: "Butterfly", weight: [] },
        { name: "Thomasrow", weight: [] }
      ]
    },
    {
      name: "Plan 2",
      exercises: [
        { name: "Seitheben", weight: [] },
        { name: "Bizeps", weight: [] },
        { name: "Trizeps", weight: [] }
      ]
    }
  ];

  let selectedTrainingPlan = trainingPlans[0];
  let weightInput = "";
  let weightInput2 = "";

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

  function addWeight() {
    const weight = parseFloat(weightInput);
    const weight2 = parseFloat(weightInput2);
    if (!isNaN(weight) && !isNaN(weight2)) {
      selectedTrainingPlan.exercises[selectedExerciseIndex].weight.push({ x: weight, y: weight2 });
      updateChart(charts[selectedExerciseIndex], selectedTrainingPlan.exercises[selectedExerciseIndex].weight);
    }
    weightInput = "";
    weightInput2 = "";
  }

  function updateWeight(event: any) {
    const weight = parseFloat(event.target.value);
    const index = parseInt(event.target.dataset.index);
    if (!isNaN(weight)) {
      (selectedTrainingPlan.exercises[selectedExerciseIndex].weight[index] as any) = weight;
      updateChart(charts[selectedExerciseIndex], selectedTrainingPlan.exercises[selectedExerciseIndex].weight);
    }
  }

  let selectedExerciseIndex = 0;

  onMount(() => {
    const containers = document.querySelectorAll(".exercise-container");
    containers.forEach((container, index) => {
      const canvas = container.querySelector("canvas");
      const chart = createChart(canvas);
      charts.push(chart);
      updateChart(chart, selectedTrainingPlan.exercises[index].weight);
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

  {#each trainingPlans as trainingPlan}
    <section>
      <h2>{trainingPlan.name}</h2>
      <div class="container">
        {#each trainingPlan.exercises as exercise, index}
          <div class="exercise-container" on:keydown={() => {
            selectedTrainingPlan = trainingPlan;
            selectedExerciseIndex = index;
          }}>
            <h3>{exercise.name}</h3>
            <div class="input-container">
              {#each exercise.weight as weight, weightIndex}
                <input type="number" placeholder="Gewicht" value={weight} on:change={updateWeight} data-index={weightIndex} />
              {/each}
              <input type="number" placeholder="Gewicht" bind:value={weightInput} />
              <input type="number" placeholder="Gewicht 2" bind:value={weightInput2} />
              <button on:click={addWeight}>Hinzufügen</button>
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