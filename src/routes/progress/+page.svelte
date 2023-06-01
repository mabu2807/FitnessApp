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
          { x: 3, y: 100 },
          { x: 5, y: 90 },
          { x:  7, y: 85 },
          { x: 1, y: 110 }
        ],
      },
      {
        name: "Übung 2",
        weight: [
          { x: 5, y: 20 },
          { x: 10, y: 15 },
          { x: 15, y: 12 },
          { x: 25, y: 9 },
          { x: 27, y: 5 }
        ],
      },
      {
        name: "Übung 2",
        weight: [
          { x: 5, y: 20 },
          { x: 10, y: 15 },
          { x: 15, y: 12 },
          { x: 25, y: 9 },
          { x: 27, y: 5 }
        ],
      },
      {
        name: "Übung 2",
        weight: [
          { x: 5, y: 20 },
          { x: 10, y: 15 },
          { x: 15, y: 12 },
          { x: 25, y: 9 },
          { x: 27, y: 5 }
        ],
      }
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
    let chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [],
        datasets: [
          {
            label: "Gewicht",
            data: [],
            borderColor: 'rgb(54, 162, 235)',
           backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderWidth: 1
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
              text: "Wiederholungen"
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
      console.log(trainingPlans[planIndex].exercises[exerciseIndex].weight);
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

  function toggleChartType(planIndex: any, exerciseIndex: any) {
  const chartIndex = planIndex * trainingPlans[0].exercises.length + exerciseIndex;
  const chart = charts[chartIndex];

  // Ändere den Diagrammtyp von 'line' zu 'bar' oder umgekehrt
  chart.config.type = chart.config.type === 'line' ? 'bar' : 'line';

  // Aktualisiere das Diagramm, um die Änderungen anzuzeigen
  chart.update();
}


</script>




<main>

  <div class="category">
    <h1 class="category-title">Verfolge deine Trainingspläne</h1>
    <p class="category-description">Nutze die Möglichkeit deinen Trainingsplan zu verfolgen und deine entdecke deine Stärken und Schwächen!</p>
    
  {#each trainingPlans as trainingPlan, planIndex}
    <section class="section-wrapper">
      <div class="title-wrapper">
        <h2>{trainingPlan.name}</h2>
      </div>
      <div class="container">
        {#each trainingPlan.exercises as exercise, exerciseIndex}
          <div class="exercise-container" on:keydown={() => {
            selectedTrainingPlan = trainingPlan;
            selectedExerciseIndex = exerciseIndex;
          }}>
          <div class="exc-title-wrapper">

            <h3>{exercise.name}</h3>
          </div>
            <div class="input-container">
              
              <input type="number" placeholder="Wiederholungen" bind:value={weightInput[planIndex][exerciseIndex]} />
              <input type="number" placeholder="Gewicht" bind:value={weightInput2[planIndex][exerciseIndex]} />
              <div class="button-wrapper">

                <button class="button" on:click={() => addWeight(planIndex, exerciseIndex)}>Hinzufügen</button>
                <button class="typ-button" on:click={() => toggleChartType(planIndex, exerciseIndex)}>Diagrammtyp Ändern</button>
              </div>
              <canvas></canvas>
            </div>
          </div>
        {/each}
      </div>
    </section>
  {/each}
</main>

<style>
 
 .category {
    display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  font-weight: bold;
 margin-bottom: 40px;
  text-align: center;
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.category-title {
  font-size: 28px;
}


.category-description {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 18px;
  margin-bottom: 5px;
  text-align: center;
  color: rgb(144, 144, 144);
}


.title-wrapper {

  padding-top: 15px;
  background-color: #f5f5f5;
  text-align: center;
  /* border-radius: 20px; */
 
  
}

.title-wrapper h2 {
  font-weight: 900;
}

.section-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
  background-color: #f5f5f5;
}

.container {
  display: flex;
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  width: 100%;
  
}

.exercise-container {
  background-color: rgb(221, 221, 221);
  border-radius: 10px;
  border: 2px solid rgb(169, 169, 169);
  padding: 20px;
  transition: background-color 0.3s ease;
  width: 33%;
}

.exc-title-wrapper {
  width: 100%;
  text-align: center;
}


h2,
h3 {
  margin-top: 0;
}

.input-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

input[type="number"] {
  width: 96%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button-wrapper {
  display: flex;
  justify-content: space-between;

  height: 40px;
}

.button {
  background-color: #333;
  color: #fff;
  padding: 3px 60px;
  border: 2px solid #333;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
}

.button:hover {
  background-color: white;
  color: #333;
  transition: all 0.4s ease-in-out;
}

.typ-button {
  background-color: white;
  color: black;
  padding: 10px 20px;
  border: 2px solid #333;
  border-radius: 5px;
  cursor: pointer;
 
  font-weight: 600;
}

.typ-button:hover {
  color: white;
  background-color: #333;
  transition: all .4s ease-in-out;
}

canvas {
  
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  color: white;
  background-color: rgb(253, 253, 253);
}
</style>