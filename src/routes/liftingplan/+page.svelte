<!-- App.svelte -->
<script lang="ts">
 import Dialog, { Header, Title, Content, Actions } from '@smui/dialog';
  import IconButton from '@smui/icon-button';
  import Button, { Label } from '@smui/button';


// export let data;

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
  
  let length = plans.length;

  let open = false;
  let response = 'Nothing yet.';

  function closeHandler(e: CustomEvent<{ action: string }>) {
    switch (e.detail.action) {
      case 'close':
        response = 'Closed without response.';
        break;
      case 'reject':
        response = 'Rejected.';
        break;
      case 'accept':
        response = 'Accepted.';
        break;
    }
  }

  </script>
  
<pre class="status">Response: {response}</pre>
  <main>
   

      {#if length > 0}
      <div class="category">
        <h1 class="category-title">Wähle einen Trainingsplan</h1>
        <p class="category-description">Entdecke unsere vielfältigen Trainingsmöglichkeiten</p>
        
      </div>
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
  
  <footer class="footer-n">
    <div class="footer-content">
      <p class="footer-text">&copy; 2023 Fitness Tracker. All rights reserved.</p>
   
  </div>
</footer>
  {:else}
  <div class="info-container">
    <h2 class="info-title">Du hast noch keine Trainingspläne abonniert</h2>
    <p class="info-text">Abonniere jetzt und erhalte Zugriff auf eine Vielzahl von zusätzlichen Trainingsplänen, um dein Fitnessziel zu erreichen.</p>
    <div class="button-container">
      
      <button class="subscribe-button">
        <div class="subscribe-container-text">
              
          <p class="subscribe-text">Jetzt Abonnieren</p>
        </div>
        <div class="subscribe-container-plus">
          
          <span class="plus-icon">+</span>
        </div>
      </button>
        </div>
      </div>

      
  <footer class="footer">
    <div class="footer-content">
      <p class="footer-text">&copy; 2023 Fitness Tracker. All rights reserved.</p>
   
  </div>
</footer>
      {/if}
    
      
    </main>

  


  <style>

.info-container {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
    box-shadow: 4px 18px 25px rgba(0, 0, 0, 0.518)  }
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
  color:#393e46;
  transition: all 0.2s ease;
}


.subscribe-container-plus {
  margin-left: 20px;
  color: #393e46;
}



.subscribe-text {
  font-size: 18px;
  font-family: "Lato", sans-serif;
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
 margin: 20px 0 ;
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
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}


  </style>
  