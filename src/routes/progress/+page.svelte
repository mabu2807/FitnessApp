<script lang="ts">
    import { onMount, onDestroy } from "svelte";
  import Chart from "chart.js/auto";

  let exercises = [
    { name: "Übung 1", weight: [] },
    { name: "Übung 2", weight: [] },
    { name: "Übung 3", weight: [] }
  ];

  let selectedExercise = exercises[0];
  let weightInput = "";
let weightInput2 = ""; 

  let charts = [];
  
    function createChart(canvas) {
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
  
    function updateChart(chart, data) {
      chart.data.datasets[0].data = data;
      chart.update();
    }
  
    function addWeight() {
  const weight = parseFloat(weightInput);
  const weight2 = parseFloat(weightInput2); // Wert des zweiten Eingabefelds
  if (!isNaN(weight) && !isNaN(weight2)) {
    selectedExercise.weight.push({ x: weight, y: weight2 }); // Verwenden Sie beide Werte, um einen Punkt im Diagramm zu erstellen
    updateChart(charts[exercises.indexOf(selectedExercise)], selectedExercise.weight);
  }
  weightInput = "";
  weightInput2 = ""; // Leeren Sie das zweite Eingabefeld
}
  
    function updateWeight(event) {
      const weight = parseFloat(event.target.value);
      const index = parseInt(event.target.dataset.index);
      if (!isNaN(weight)) {
        selectedExercise.weight[index] = weight;
        updateChart(charts[exercises.indexOf(selectedExercise)], selectedExercise.weight);
      }
    }
  
    

    onMount(() => {
      const containers = document.querySelectorAll(".exercise-container");
      containers.forEach((container, index) => {
        const canvas = container.querySelector("canvas");
        const chart = createChart(canvas);
        charts.push(chart);
        updateChart(chart, exercises[index].weight);
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
    <div class="container">
      {#each exercises as exercise, index}
        <div class="exercise-container" on:click={() => selectedExercise = exercise}>
          <h2>{exercise.name}</h2>
          <div class="input-container">
            {#each exercise.weight as weight, weightIndex}
              <input type="number" placeholder="Gewicht" value={weight} on:change={updateWeight} data-index={weightIndex} />
            {/each}
            <input type="number" placeholder="Gewicht" bind:value={weightInput} />
            <input type="number" placeholder="Gewicht 2" bind:value={weightInput2} /> <!-- Zweites Eingabefeld -->
            <button on:click={addWeight}>Hinzufügen</button>
          </div>
          <canvas></canvas>
        </div>
      {/each}
    </div>
  </main>
  <style>
  * {
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}

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

.exercise-container:hover {
 
}

.exercise-container.selected {
  background-color: #ccc;
}

h2 {
  margin-top: 0;
}

.input-container {
  margin-top: 10px;
}

input[type="number"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

canvas {
  width: 100%;
  height: 200px;
  margin-top: 20px;
  border: 1px solid #ccc;
}

  </style>
  