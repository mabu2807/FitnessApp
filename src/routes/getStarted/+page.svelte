<script>
    import { onMount } from 'svelte';
    let arrows = "<<< ";
    let currentPage = 0;
    let pages = [
      { title: 'Ziele', value: '', prevValue: null, description: 'Füge deine Körpergröße ein, damit wir ein optimalen Trainingsplan für dich erstellen können!'  },
      { title: 'Körpergröße', value: '', prevValue: null, description: 'Füge deine Körpergröße ein, damit wir ein optimalen Trainingsplan für dich erstellen können!' },
      { title: 'Gewicht', value: '', prevValue: null, description: 'Füge deine Körpergröße ein, damit wir ein optimalen Trainingsplan für dich erstellen können!'  },
      { title: 'Geburtsdatum', value: '', prevValue: null, description: 'Füge deine Körpergröße ein, damit wir ein optimalen Trainingsplan für dich erstellen können!'  },
      { title: 'Aktivitätslevel', value: '', prevValue: null, description: 'Füge deine Körpergröße ein, damit wir ein optimalen Trainingsplan für dich erstellen können!'  },
      { title: 'Körperfettanteil', value: '', prevValue: null, description: 'Füge deine Körpergröße ein, damit wir ein optimalen Trainingsplan für dich erstellen können!'  }
    ];
  
    onMount(() => {
      currentPage = 0;
    });
  

    function nextPage() {
      if (currentPage < pages.length - 1) {
        currentPage += 1;
      }
    }
  
    function previousPage() {
      if (currentPage > 0) {
        currentPage -= 1;
      }
    }
  
    function selectCard(value) {
      pages[currentPage].value = value;
    //   nextPage();
    }
  </script>
<body>


  <div class="overview">
    {#each pages as page, i}
    <div class="overview-wrapper">

        <a class="overview-link" on:click={() => currentPage = i}>
            {page.title}
        </a>
        <p> {page.value !== '' ? `${page.value}` : ''}</p>
    </div>
    {/each}
  </div>
  
  {#each pages as page, i}
    {#if i === currentPage}
    
            {#if i === 0}
            <div class="card-container" class:hidden={i !== currentPage}>
                {#each ['Lose weight', 'Gain muscle', 'Stay fit'] as goal}
                <div
                class="card {page.value === goal ? 'selected' : ''}"
                on:click={() => selectCard(goal)}>
                <h2 class="card-title">{goal}</h2>
                <p class="card-description">{goal === 'Lose weight' ? 'Gewicht reduzieren und Fett abbauen' : goal === 'Gain muscle' ? 'Muskeln aufbauen und Körper definieren' : 'Allgemeine Fitness erhalten und verbessern'}</p>
            </div>
            {/each}
        </div>
        {:else}
        <div class="page-wrapper">

            <div class="page">
                
        
        <div class="input-container" class:hidden={i !== currentPage}>
            <div class="input-label-wrapper">
                <span class="input-label">{page.title}</span>
                <span class="input-description">{page.description}</span>
            </div>
            
            <input class="input-field" type="text" bind:value={page.value} required placeholder="Hier eintragen..."/>
        </div>
        
    </div>
</div>
        {/if}
        {#if currentPage > 0}
        <div class="button-container-left">
            
            <button class="back-button" on:click={previousPage}>{arrows} Zurück</button>
           
        </div>
        {/if}
        <div class="button-container-right">
            
            <button class="next-button" on:click={nextPage}>
                {i === pages.length - 1 ? 'Abschließen' : 'Weiter >>>'}
            </button>
            
    </div>
    {/if}
    {/each}
  </body>
  
  <style>
 

    
.overview {
    position: absolute;
    bottom: -66px;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20%;
    gap: 0.5rem;
    font-size: 0.9rem;
    background-color: #393e46;
  }

  .overview-wrapper {
    display: flex;
    flex-direction: column;
    margin-right: 40px;
    
    width: 150px;
    height: 75px;
    max-width: 150px;
  }

  .overview-wrapper p {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color:white;
    font-weight: 700;
    
  }
  .overview-link {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
    color: rgb(193, 193, 193);
    font-size: 17px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    max-width: 140px;
    font-weight: 700;
  }

  

    .card-container {
      display: flex;
      justify-content: center;
      gap: 1rem;
      opacity: 1;
      transition: opacity 0.5s;
      margin-top: 7%;
    }
  
    .card-container.hidden {
      opacity: 0;
    }
  
    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      border-radius: 4px;
      background-color: white;
      border: 1px solid #000000;
      width: 200px;
      height: 200px;
      
      cursor: pointer;
      margin: 40px 0;
      transition: transform 0.3s, box-shadow 0.3s;
    }
  
    .card:hover {
      transform: scale(1.05);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      border: 2px solid black;
    }
  
    .card.selected {
      background-color: #007bff;
      color: white;
      border-color: #007bff;
    }
  
    .card.selected:hover {
      transform: scale(1);
      box-shadow: none;
     
    }
  
    .card-title {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      text-align: center;
    }
  
    .card-description {
      font-size: 0.9rem;
      text-align: center;
    }

    .page-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 10%;
        margin-left: 28%;
        padding: 20px;
        width: 40%;
        border-radius: 8px;
        box-shadow: 0 0 10px black;
    }

    

.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  
  font-family: Arial, sans-serif;
  
}



.input-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    
}

.input-description {
    text-align: center;
    color: #797070;
    border-radius: 8px;
    padding: 20px 20px;
}

.input-label-wrapper {
    width: auto;
    height: 30%;
    display: flex;
    flex-direction: column;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.input-label {
  font-size: 1.7rem;
  text-align: center;
  font-weight: 700;
}

.input-field {
  font-size: 16px;
  padding: 10px;
  width: 40%;
  border: none;
  margin:10% 0 4% 0;
  border: 2px solid #ccc;
  border-radius: 8px;
  transition: border-color 0.3s ease;
}

.input-field:focus {
  border-color: #007bff;
  outline: none;
}

  
    .button-container-left {
        position: absolute;
        left: 5%;
        bottom: 15%;
    }

    .button-container-right {
        position: absolute;
        right: 5%;
        bottom: 15%;
    } 

    .back-button {
        cursor: pointer;
       padding: 20px 50px;
       background-color: white;
       border: 2px solid #c82333;
       font-weight: 600;
       color: #c82333;
       border-radius: 8px;
       font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
     
     
    }
  
    .back-button:hover {
        background-color: #c82333;
      color: white;
      transition: all ease .5s;
      
    }
  
    .next-button {
        cursor: pointer;
       padding: 20px 50px;
       background-color: white;
       border: 2px solid #0056b3;
       font-weight: 600;
       color: #0056b3;
       border-radius: 8px;
       font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
  
    .next-button:hover {
      background-color: #0056b3;
      color: white;
      transition: all ease .5s;
    }
  </style>