<script>
  import { onMount } from 'svelte';
  import { fade, fly} from 'svelte/transition';

    

    let items = [
    { id: 1, name: 'John Doe', text: 'Die FitnessApp hat mein Training auf ein ganz neues Level gebracht. Ich liebe die Vielfalt der Kurse und die Möglichkeit, meinen Fortschritt zu verfolgen.', imgSrc: 'src/assets/customer1.jpg' },
    { id: 2, name: 'Hampelmann Hagen', text: 'einfach gut', imgSrc: 'src/assets/customer1.jpg'},
    { id: 3, name: 'Jane Smith', text: 'einwandfrei', imgSrc:'src/assets/customer2.jpg'}, 
  ];

  let currentIndex = 0;
  let visibleItems = [];

  const showItems = () => {
    if (items.length <= 2) {
      visibleItems = items;
    } else {
      visibleItems = [
        items[currentIndex],
        items[(currentIndex + 1) % items.length]
      ];
    }
  };

  const handlePrevious = () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItems();
  };

  const handleNext = () => {
    currentIndex = (currentIndex + 1) % items.length;
    showItems();
  };

  onMount(() => {
    showItems();
  });

  </script>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   
    <title>Fitness Tracker</title>
  </head>
  <body>
    <main>
      <section class="hero">
        <h2>Welcome to Fitness Tracker</h2>
        <p>Track your fitness progress and achieve your goals.</p>
        <a href="/getStarted" class="btn">Get Started</a>
      </section>
      
      <section id="courses">
        <h2>Unsere Kurse</h2>
        <div class="course">
          <img src="src/assets/workout1.jpg" alt="Kurs 1">
          <h3>Pilates</h3>
          <p>Ein Ganzkörpertraining zur Verbesserung von Flexibilität, Kraft und Körperhaltung.</p>
        </div>
        <div class="course">
          <img src="src/assets/workout2.jpg" alt="Kurs 2">
          <h3>Yoga</h3>
          <p>Entspannen Sie Ihren Geist und stärken Sie Ihren Körper mit verschiedenen Yoga-Übungen.</p>
        </div>
        <div class="course">
          <img src="src/assets/workout3.jpg" alt="Kurs 3">
          <h3>HIIT</h3>
          <p>Eine intensive Trainingsform mit abwechselnden Phasen von hoher Intensität und kurzen Ruhephasen.</p>
        </div>
      </section>
      
      <h2 class="headTestimonials">Was unsere Kunden sagen</h2>
      <section id="testimonials">
        <div class="arrow" on:click={handleNext}><i class="fa-solid fa-arrow-left fa-3x"></i></div>
        {#each visibleItems as item (item.id)}
         <div class="testimonial" transition:fade="{{duration:70, delay:300}}">
         <img src={"src/assets/test.jpeg"} alt="Kunde {item.id}">
          <p>{item.text}</p>
          <cite>{item.name}</cite>
         </div>
        {/each}
        <div class="arrow" on:click={handlePrevious}><i class="fa-solid fa-arrow-right fa-3x"></i></div>
      </section>
      
      <section id="contact">
        <h2>Kontaktieren Sie uns</h2>
        <form>
          <input type="text" name="name" placeholder="Name" required>
          <input type="email" name="email" placeholder="E-Mail-Adresse" required>
          <textarea name="message" placeholder="Nachricht" required></textarea>
          <button type="submit">Senden</button>
        </form>
      </section>
      
      
    </main>
    

<footer class="footer">
  <div class="footer-content">
    <p class="footer-text">&copy; 2023 Fitness Tracker. All rights reserved.</p>
    <a class="linkFooter" href="https://www.youtube.com/@RoswitaRuhl"><i class="fa-brands fa-youtube fa-2x"></i></a>
    <a class="linkFooter" href="https://www.instagram.com/ksvlangen/"><i class="fa-brands fa-instagram fa-2x"></i></a>
    <a class="linkFooter" href="https://twitter.com/mibi61?s=21&t=O8Ege5KSxyYHHBAtUfSaJQ"><i class="fa-brands fa-square-twitter fa-2x"></i></a>
    <a class="linkFooter" href="https://www.linkedin.com/in/luca-chmielarski?original_referer="><i class="fa-brands fa-linkedin fa-2x"></i></a>

  </div>
</footer>

  </body>
  
  <style>
   body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  #courses {
  text-align: center;
  padding: 50px 0;
}

.course {
  display: inline-block;
  width: 300px;
  padding: 20px;
  margin: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.342);
  transition: transform 0.3s ease-in-out;
}

.course:hover {
  transform: scale(1.05);
}

.course img {
  width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
}

.course h3 {
  margin-bottom: 10px;
}

.course p {
  margin-bottom: 10px;
}

.arrow {
  margin-left: 110px;
  margin-right: 110px;
}

.headTestimonials {
  background-color: #f9f9f9;
  text-align: center;
  margin-bottom: 0;
  padding: 20px;
}
  
  #testimonials {
  background-color: #f9f9f9;
  /* padding: 50px 0;
  text-align: center;
  margin-top: 80px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.testimonial {
  display: inline-block;
  height: 200px;
  width: 300px;
  padding: 20px;
  margin: 30px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.testimonial img {
  object-fit: cover;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.testimonial p {
  margin-bottom: 10px;
}

.testimonial cite {
  font-style: italic;
  color: #888;
}

.hero {
    background-color: #eeeeee;
    padding: 40px;
    text-align: center;
  }
  
  .hero h2 {
    font-size: 36px;
    margin-bottom: 20px;
  }
  
  .hero p {
    font-size: 18px;
    margin-bottom: 40px;
  }

  .btn {
      display: inline-block;
      padding: 10px 20px;
      background-color: #333;
      color: #ffffff;
      text-decoration: none;
      border-radius: 4px;
      font-size: 16px;
      transition: background-color 0.3s ease-in-out;
    }
  
    .btn:hover {
      background-color: blue;
    }


#contact {
  background-color: white;
  padding: 50px 0;
  text-align: center;
}

form {
  max-width: 500px;
  margin: 0 auto;
}

input,
textarea {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button[type="submit"] {
  display: inline-block;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

button[type="submit"]:hover {
  background-color: #555;
}
  
   
.footer {
  background-color: #393e46;
  color: #ffffff;
  width: 100%;
  height: 60px;
  padding: 22px 0;
}

.footer-content {
  margin-right: 30%;
  margin-left: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.footer-text {
  font-size: 14px;
  margin: 0;
}

i:hover {
  color:#888;
}

.linkFooter {
  color: white;
}


  
  
  </style>