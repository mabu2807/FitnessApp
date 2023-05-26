<script>
    import { onMount } from 'svelte';
  
    let currentPage = 0;
    let pages = [
      { title: 'Ziele', value: '', prevValue: null },
      { title: 'Körpergröße', value: '', prevValue: null },
      { title: 'Gewicht', value: '', prevValue: null },
      { title: 'Geburtsdatum', value: '', prevValue: null },
      { title: 'Aktivitätslevel', value: '', prevValue: null },
      { title: 'Abschluss', value: '', prevValue: null }
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
      nextPage();
    }
  </script>
  
  
  
  {#each pages as page, i}
    {#if i === currentPage}
      <div class="page">
        {#if currentPage > 0}
          <div class="button-container">
            <button class="back-button" on:click={previousPage}>Zurück</button>
          </div>
        {/if}
        {#if i === 0}
          <div class="card-container" class:hidden={i !== currentPage}>
            {#each ['Lose weight', 'Gain muscle', 'Stay fit'] as goal}
              <div
                class="card {page.value === goal ? 'selected' : ''}"
                on:click={() => selectCard(goal)}
              >
                <h2 class="card-title">{goal}</h2>
                <p class="card-description">{goal === 'Lose weight' ? 'Gewicht reduzieren und Fett abbauen' : goal === 'Gain muscle' ? 'Muskeln aufbauen und Körper definieren' : 'Allgemeine Fitness erhalten und verbessern'}</p>
              </div>
            {/each}
          </div>
        {:else}
          <div class="input-container" class:hidden={i !== currentPage}>
            <label class="input-label">{page.title}</label>
            <input class="input-field" type="text" bind:value={page.value} />
          </div>
        {/if}
        <div class="button-container">
          <button class="next-button" on:click={nextPage}>
            {i === pages.length - 1 ? 'Abschließen' : 'Weiter'}
          </button>
        </div>
      </div>
    {/if}
  {/each}
  
  
  <style>

    /* ... Deine vorherigen Stile hier ... */
  
    .card-container {
      display: flex;
      justify-content: center;
      gap: 1rem;
      opacity: 1;
      transition: opacity 0.5s;
    }
  
    .card-container.hidden {
      opacity: 0;
    }
  
   
    .back-button {
      margin-bottom: 1rem;
      font-size: 1rem;
      background-color: #dc3545;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 0.5rem 1rem;
      cursor: pointer;
      transition: background-color 0.3s;
    }
  
    .back-button:hover {
      background-color: #c82333;
    }

    .card-container {
      display: flex;
      justify-content: center;
      gap: 1rem;
      opacity: 1;
      transition: opacity 0.5s;
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
      border: 1px solid #ccc;
      width: 200px;
      height: 200px;
      cursor: pointer;
      transition: transform 0.3s, box-shadow 0.3s;
    }
  
    .card:hover {
      transform: scale(1.05);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
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

    .page {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      font-family: Arial, sans-serif;
    }
  
    .input-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 2rem;
      opacity: 1;
      transition: opacity 0.5s;
    }
  
    .input-container.hidden {
      opacity: 0;
    }
  
    .input-label {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
  
    .input-field {
      padding: 0.5rem;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      width: 200px;
      transition: border-color 0.3s;
    }
  
    .input-field:focus {
      outline: none;
      border-color: #007bff;
    }
  
    .button-container {
      display: flex;
      justify-content: center;
    }
  
    .next-button {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
  
    .next-button:hover {
      background-color: #0056b3;
    }
  </style>