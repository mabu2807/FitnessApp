
<script lang="ts">
  import { onMount } from 'svelte';
  import Dialog, { Header, Title, Content, Actions } from '@smui/dialog';
  import IconButton from '@smui/icon-button';
  import Button, { Label } from '@smui/button';
	import { element } from 'svelte/internal';

  let open = false;
  let removeDisabled = true;
  let addDisabled = true;
  
  


  function addOn(){
    open = true;
  }

  function add(){
    let iconToMove = [];
    availableData.forEach(element => {
      if(element.selected==true){
        iconToMove.push(element);
      }
    });
    iconToMove.forEach(item => {
      selectedData.push(item);
      availableData.splice(availableData.indexOf(item), 1);
    })
    selectedData.forEach(item => {
      item.selected=false;
    });
    availableData.forEach(item => {
      item.selected=false;
    });
    selectedData=selectedData;
    availableData=availableData;
    removeDisabled=true;
    addDisabled=true;

  }

  function remove(){
    let iconToMove = [];
    selectedData.forEach(element => {
      if(element.selected==true){
        iconToMove.push(element);
      }
    });
    iconToMove.forEach(item => {
      availableData.push(item);
      selectedData.splice(selectedData.indexOf(element),1);
    })
    availableData.forEach(item => {
      item.selected=false;
    });
    selectedData.forEach(item => {
      item.selected=false;
    });
    selectedData=selectedData;
    availableData=availableData;
    removeDisabled=true;
    addDisabled=true;
    
  }

  

  function buttonRemoveDisabled(){
    removeDisabled=true;
    selectedData.forEach(element => {
      if(element.selected==true){
        removeDisabled=false;
      }
    })
      }

  function buttonAddDisabled(){
    addDisabled=true;
    availableData.forEach(element => {
      if(element.selected==true){
        addDisabled=false;
      }
    })
      }


  

  let selectedData = [
    {
      title: 'Krafttraining',
      imageSrc: 'src/assets/workout2.jpg',
      description: ' Sed do eiusmod temporrem ipsum dolor sit ametorididunt ut labore et dolore magna aliqua. ',
      link: '\liftingplan',
      selected: false
    },
    {
      title: 'Cardio',
      imageSrc: 'src/assets/workout1.jpg',
      description: ' labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqu',
      link: 'https://example.com/button2',
      selected: false
    }
  ];

  let availableData = [
    {
      title: 'Yoga',
      imageSrc: 'src/assets/workout3.jpg',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. minim veniam, quis nostrud exercita',
      link: 'https://example.com/button3',
      selected: false
    }
  ]

</script>

  <main>
    <div class="category">
      <h1 class="category-title">Wähle eine Trainingskategorie</h1>
      <p class="category-description">Entdecke unsere vielfältigen Trainingsmöglichkeiten</p>
      
    </div>
    <div class="button-cards">
      {#each selectedData as button}
      <a href={button.link}  class="button-card">
        <div class="image-container">
          <img src={button.imageSrc} alt="Button Image" />
        </div>
        <div class="card-details">
          <h2>{button.title}</h2>
          <p class = "description">{button.description}</p>
        </div>
      </a>
      {/each}
    </div>
    


<div class="info-container">
  <h2 class="info-title">Weitere Trainingspläne abonnieren</h2>
  <p class="info-text">Erhalte Zugriff auf eine Vielzahl von zusätzlichen Trainingsplänen, um dein Fitnessziel zu erreichen.</p>
  <div class="button-container">

    <button class="subscribe-button" on:click={addOn}>
      <div class="subscribe-container-text">
        
        <p class="subscribe-text">Jetzt Abonnieren</p>
      </div>
      <div class="subscribe-container-plus">
        
        <span class="plus-icon">+</span>
      </div>
    </button>
  </div>
</div>

<Dialog
  bind:open
  aria-labelledby="large-scroll-title"
  aria-describedby="large-scroll-content"
  surface$style="width: 1050px; max-width: calc(100vw - 32px);">
  <Title id="large-scroll-title">{"Erweitere dein Training"}</Title>
  <Content id="large-scroll-content">
    <hr>
    <h2>Füge neue Sportarten hinzu</h2>
    <div class="icon-container">
    {#each {length: availableData.length} as _, i}
    <div>
        <button style="{availableData[i].selected ? 'box-shadow: 0 0 10px black; border-radius: 8px; transition: .5s ease all;' : 'outline-style: none;'}" class="icon-card" on:click={()=>{availableData[i].selected=!availableData[i].selected; buttonAddDisabled()}}>
          <img class="image-container" src="{availableData[i].imageSrc}" alt="{availableData[i].imageSrc}">
          <div class="icon-title">{availableData[i].title}</div>
        </button>
      </div>
          {/each}
        </div>
        <hr>
        <h2>Lösche ausgewählte Sportarten</h2>
    <div class="icon-container">
      {#each {length: selectedData.length} as _, i}
    <div>
        <button style="{selectedData[i].selected ? 'box-shadow: 0 0 10px black; border-radius: 8px; transition: .5s ease all;' : 'outline-style: none;'}" class="icon-card" on:click={()=>{selectedData[i].selected=!selectedData[i].selected; buttonRemoveDisabled()}}>
          
          <img class="image-container" src="{selectedData[i].imageSrc}" alt="{selectedData[i].imageSrc}">
          <div class="icon-title">{selectedData[i].title}</div>
        </button>
    </div>
          {/each}
    </div>
        
  </Content>
  <Actions>
    <Button on:click={remove} disabled={removeDisabled}>
      <Label>Remove</Label>
    </Button>
    <Button on:click={add} disabled={addDisabled}>
      <Label>Add</Label>
    </Button>
  </Actions>
</Dialog>



  </main>
  <footer class="footer">
    <div class="footer-content">
      <p class="footer-text">&copy; 2023 Fitness Tracker. All rights reserved.</p>
   
  </div>
</footer>

<style>

.icon-container {
  display: flex;
  align-items: center;
  
}


  .icon-title {
    margin-top: 5px;
  text-align: center;
  font-size: 12px;
  }





  
  .category {
    display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  font-weight: bold;
 
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

  .button-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
  }

  .button-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 300px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    transition: box-shadow 0.3s ease-in-out;
    text-decoration: none;
    color: inherit;
    margin: 10px;
  }

  .icon-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 130px;
    height: 130px;
    background-color: #fff;
    border: none; 
    /* border-radius: 8px; */
    overflow: hidden;
    /* outline-style: solid;
    outline-color: black; */
    /* box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease-in-out; */
    text-decoration: none;
    color: inherit;
    margin: 10px;
  }

  .icon-card:hover {
    border-radius: 8px;
    transform: scale(1.1);
    transition: 0.5s ease all;
  }



  .button-card:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.518);
    width: 255px;
    /* height: 305px; */
    transition: all ease 0.2s;
  }

  .image-container {
    width: 100%;
    height: 180px;
    overflow: hidden;
    object-fit: cover;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card-details {
    padding: 10px;
    text-align: center;
  }

  h2 {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
    margin: 0;
    margin: 5px 0 10px 0;
  }

  .description {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    margin-top: 0;
    color: rgb(144, 144, 144);
    text-overflow: ellipsis;
  }



.info-container {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  margin-top: 50px;
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
}


</style>
