
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
        <a href="/tracker" class="btn">Get Started</a>
      </section>
      <section class="workouts">
        <h2>Popular Workouts</h2>
        <div class="workout-card">
          <img src="src/assets/workout1.jpg" alt="Workout 1">
          <div class="workout-details">
            <h3>Cardio Blast</h3>
            <p>A high-intensity cardio workout to burn calories.</p>
          </div>
          <a href="/" class="btn">Start Workout</a>
        </div>
        <div class="workout-card">
          <img src="src/assets/workout2.jpg" alt="Workout 2">
          <div class="workout-details">
            <h3>Strength Training</h3>
            <p>Build strength and tone your muscles with this workout.</p>
          </div>
          <a href="/" class="btn">Start Workout</a>
        </div>
      </section>
      <section class="progress">
          <div class="container">
            <h2>Your Progress</h2>
            <p>Track your progress and stay motivated.</p>
            <div class="progress-chart">
              <div class="chart-row">
                <div class="chart-label">Jan</div>
                <div class="chart-bar" style="height: 70%;"></div>
                <div class="chart-value">70%</div>
              </div>
              <div class="chart-row">
                <div class="chart-label">Feb</div>
                <div class="chart-bar" style="height: 80%;"></div>
                <div class="chart-value">80%</div>
              </div>
              <div class="chart-row">
                <div class="chart-label">Mar</div>
                <div class="chart-bar" style="height: 90%;"></div>
                <div class="chart-value">90%</div>
              </div>
              <div class="chart-row">
                <div class="chart-label">Apr</div>
                <div class="chart-bar" style="height: 60%;"></div>
                <div class="chart-value">60%</div>
              </div>
              <div class="chart-row">
                <div class="chart-label">May</div>
                <div class="chart-bar" style="height: 85%;"></div>
                <div class="chart-value">85%</div>
              </div>
              <div class="chart-row">
                <div class="chart-label">Jun</div>
                <div class="chart-bar" style="height: 75%;"></div>
                <div class="chart-value">75%</div>
              </div>
              <div class="chart-row">
                <div class="chart-label">Jul</div>
                <div class="chart-bar" style="height: 55%;"></div>
                <div class="chart-value">55%</div>
              </div>
              <div class="chart-row">
                <div class="chart-label">Aug</div>
                <div class="chart-bar" style="height: 70%;"></div>
                <div class="chart-value">70%</div>
              </div>
              <div class="chart-row">
                <div class="chart-label">Sep</div>
                <div class="chart-bar" style="height: 95%;"></div>
                <div class="chart-value">95%</div>
              </div>
              <div class="chart-row">
                <div class="chart-label">Oct</div>
                <div class="chart-bar" style="height: 85%;"></div>
                <div class="chart-value">85%</div>
              </div>
              <div class="chart-row">
                <div class="chart-label">Nov</div>
                <div class="chart-bar" style="height: 65%;"></div>
                <div class="chart-value">65%</div>
              </div>
              <div class="chart-row">
                <div class="chart-label">Dec</div>
                <div class="chart-bar" style="height: 80%;"></div>
                <div class="chart-value">80%</div>
              </div>
            </div>
          </div>
        </section>
        
        
    </main>
  
<footer class="footer">
  <div class="footer-content">
    <p class="footer-text">&copy; 2023 Fitness Tracker. All rights reserved.</p>
  </div>
</footer>

  </body>
  
  <style>
  
  /* Global Styles */
  
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
  
  
  
  /* Hero Section Styles */
  
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
  
    /* Hero Section Styles */
  
    .btn {
      display: inline-block;
      padding: 10px 20px;
      background-color: #00adb5;
      color: #ffffff;
      text-decoration: none;
      border-radius: 4px;
      font-size: 16px;
      transition: background-color 0.3s ease-in-out;
    }
  
    .btn:hover {
      background-color: #393e46;
    }
  
    /* Workouts Section Styles */
  
    .workouts {
      padding: 40px;
      text-align: center;
    }
  
    .workouts h2 {
      font-size: 36px;
      margin-bottom: 20px;
    }
  
    .workout-card {
      display: inline-block;
      width: 300px;
      margin: 20px;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 4px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    }
  
    .workout-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    }
  
    .workout-card img {
      width: 100%;
      border-radius: 4px;
    }
  
    .workout-card .workout-details {
      margin-top: 20px;
    }
  
    .workout-card h3 {
      font-size: 24px;
      margin-bottom: 10px;
    }
  
    .workout-card p {
      font-size: 16px;
      margin-bottom: 10px;
    }
  
    /* Progress Section Styles */
  
   /* Progress Section Styles */
  
  .progress {
    background-color: #fff;
    padding: 80px 0;
  }
  
  .progress h2 {
    font-size: 36px;
    font-weight: 700;
    color: #444;
    margin-bottom: 30px;
    text-align: center;
  }
  
  .progress p {
    font-size: 18px;
    font-weight: 400;
    color: #777;
    text-align: center;
    margin-bottom: 50px;
  }
  
  .progress .progress-chart {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  
  .progress .chart-row {
    width: calc(100% / 12 - 20px);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  }
  
  .progress .chart-label {
    font-size: 18px;
    font-weight: 700;
    color: #444;
    margin-bottom: 10px;
  }
  
  .progress .chart-bar {
    width: 30px;
    background-color: #007bff;
    transition: height 0.8s ease-in-out;
  }
  
  .progress .chart-value {
    font-size: 16px;
    font-weight: 400;
    color: #777;
    margin-top: 10px;
  }
  
  @media screen and (max-width: 992px) {
    .progress .chart-row {
      width: calc(100% / 6 - 20px);
    }
  }
  
  
   
.footer {
  background-color: #393e46;
  color: #ffffff;
  width: 100%;
  height: 60px;
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