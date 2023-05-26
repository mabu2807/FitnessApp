
<head>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>

<body>
  <div class="header">
    <div class="navbar">
      <div class="navbar-brand">
        <h1>Fitness Tracker</h1>
      </div>
      <button class="navbar-toggler">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
      <nav class="navbar-collapse">
        <ul class="navbar-nav">
          <li><a href="/" class="a-nav">Home</a></li>
          <li><a href="/tracker" class="a-nav">Workouts</a></li>
          <li><a href="/" class="a-nav">Progress</a></li>
          <li><a href="/" class="a-nav">Settings</a></li>
          <li><a href="/login" class="navbar-button">Log In</a></li>
        </ul>
      </nav>
    </div>
  </div>

</body>

<slot />

<style>

  /* Hier kommt der CSS-Code für die Navbar-Styles */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.header {
  background-color: #393e46;
  padding: 20px;
  color: #ffffff;
  margin: 0;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand h1 {
  font-size: 24px;
  margin: 0;
}

.navbar-toggler {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  background-color: #ffffff;
  margin-bottom: 5px;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.navbar-nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
}

.navbar-nav li {
  margin-left: 20px;
}

.navbar-nav .a-nav {
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease-in-out;
}

.navbar-nav .a-nav:hover {
  color: #00adb5;
}


.navbar-button {
  text-decoration: none;
  padding: 8px 18px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: #00adb5;
  border: 2px solid #00adb5;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.navbar-button:hover {
  background-color: #393e46;
  border: white 2px solid;
  color: white;
  cursor: pointer;
  transition: all ease 0.2s;
}

/* Responsive Styles */

@media (max-width: 768px) {
  .navbar-toggler {
    display: block;
  }

  .navbar-collapse {
    display: none;
  }

  .navbar-collapse {
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #393e46;
    padding: 10px 20px;
    z-index: 99;
  }

  .navbar-nav {
    flex-direction: column;
    align-items: flex-start;
  }

  .navbar-nav li {
    margin-left: 0;
    margin-bottom: 10px;
  }

  .navbar-nav a {
    font-size: 14px;
  }

  .navbar-toggler .bar {
    background-color: #ffffff;
  }

  /* .navbar-toggler.show .bar:nth-child(1) {
    transform: translateY(6px) rotate(45deg);
  }

  .navbar-toggler.show .bar:nth-child(2) {
    opacity: 0;
  }

  .navbar-toggler.show .bar:nth-child(3) {
    transform: translateY(-6px) rotate(-45deg);
  } */
}

</style>
 