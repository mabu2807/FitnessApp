<!-- App.svelte -->
<script lang="ts">
import { onMount } from 'svelte';

let plans = [
      {
        title: "Trainingsplan 1",
        description: "Ein umfassender Trainingsplan für Muskelaufbau und Kraftsteigerung.",
        image: "src/assets/plan1.jpg"
      },
      {
        title: "Trainingsplan 2",
        description: "Ein intensiver Trainingsplan für Fettverbrennung und Ausdauersteigerung.",
        image: "src/assets/plan2.jpg"
      },
      {
        title: "Trainingsplan 3",
        description: "Ein flexibler Trainingsplan für Ganzkörperfitness und Beweglichkeit.",
        image: "src/assets/plan3.jpg"
      },
      {
        title: "Trainingsplan 4",
        description: "Ein umfassender Trainingsplan für die Beweglichkeit.",
        image: "src/assets/plan4.jpg"
      }
      
    ];
  

  </script>
  

  <main>
    <div class="plan-container">
      {#each plans as plan}
        <div class="plan-card">
          <img src={plan.image} alt={plan.title} class="plan-image">
          <div class="plan-content">
            <h3 class="plan-title">{plan.title}</h3>
            <p class="plan-description">{plan.description}</p>
            <button class="select-button">Auswählen</button>
            </div>
        </div>
      {/each}
    </div>

 
  </main>
  <footer class="footer">
    <div class="footer-content">
      <p class="footer-text">&copy; 2023 Fitness Tracker. All rights reserved.</p>
   
  </div>
</footer>
  


  <style>


    .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }

  .modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    max-width: 500px;
    text-align: center;
  }

    .plan-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 20px;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
  
    .select-button {
      font-size: 16px;
      padding: 8px 16px;
      margin-top: 10px;
      border: none;
      background-color: #393e46;
      color: #ffffff;
      border-radius: 4px;
      cursor: pointer;
    }

    .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .popup-content {
    background-color: #ffffff;
    border-radius: 8px;
    padding: 20px;
    max-width: 100%;
    text-align: center;
  }

  .popup-close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 16px;
    color: #888888;
    cursor: pointer;
  }

.footer {
  background-color: #393e46;
  color: #ffffff;
  padding: 44px;
  
 
  
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
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}


  </style>
  