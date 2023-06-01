<script>
  let isMenuOpen = false;

  function toggleMenu() {
      isMenuOpen = !isMenuOpen;
  }
</script>

<style>
  *,
  *::after,
  *::before {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
  }

  .navbar {
      background: #393e46;
      color: white;
      
      z-index: 100;
      position: relative;
      padding-left: 20px; /* Innenabstand auf der linken Seite */
  }

  .navbar-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 64px;
      padding-left: 80px;
  }

  .menu-items {
      display: flex;
      list-style: none;
      margin-right: 20px; /* Innenabstand auf der rechten Seite der Reiter */
  }

  .menu-items li {
      margin-left: 1.5rem;
      font-size: 1.3rem;
  }

  .navbar a {
      color: white;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease-in-out;
  }

  .navbar a:hover {
      color: #117964;
  }

  .hamburger-lines {
      display: none;
      cursor: pointer;
      position: relative;
      width: 30px;
      height: 20px;
  }

  .line {
      display: block;
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #393e46;
      transition: transform 0.3s ease-in-out;
  }

  .line1 {
      top: 0;
  }

  .line2 {
      top: 50%;
      transform: translateY(-50%);
  }

  .line3 {
      bottom: 0;
  }

  .login-button {
        background-color: #117964;
        color: #fff;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        font-size: 1.2rem;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;
    }

    .login-button:hover {
        background-color: #0e604c;
    }

    @media (max-width: 768px) {
        .navbar-container {
            justify-content: space-between;
            padding-right: 20px; /* Innenabstand auf der rechten Seite */
            padding-left: 0; /* Kein Innenabstand auf der linken Seite */
        }

        .menu-items {
            display: none;
            position: absolute;
            
            top: 100%;
            right: 0;
            width: 100%;
            background-color: #fff;
            padding: 20px;
            box-shadow: 5px 0px 10px 0px #aaa;
        }

        .login-button {
          padding: 8px 16px;
          margin-left: 20px;
        width: 27%;
        }

        .navbar-container.open .menu-items {
            display: flex;
            flex-direction: column;
        }

        .hamburger-lines {
            display: block;
        }

      }

  @media (max-width: 768px) {
      .navbar-container {
          justify-content: space-between;
          padding-right: 20px; /* Innenabstand auf der rechten Seite */
          padding-left: 0; /* Kein Innenabstand auf der linken Seite */
      }

      .menu-items {
          display: none;
          position: absolute;
          padding-top: 40px;
          top: 100%;
          right: 0;
          width: 100%;
          background-color: #393e46;
          padding: 20px;
          box-shadow: 5px 0px 10px 0px #aaa;
      }

      .navbar-container.open .menu-items {
          display: flex;
          flex-direction: column;
          
      }

      .hamburger-lines {
          display: block;
          
      }

      .hamburger-lines .line {
          background-color: white;
      }

      .navbar-container.open .line1 {
          transform: rotate(45deg) translate(5px, 6px);
      }

      .navbar-container.open .line2 {
          opacity: 0;
      }

      .navbar-container.open .line3 {
          transform: rotate(-45deg) translate(5px, -6px);
      }
  }
</style>

<nav class="navbar">
  <div class="navbar-container" class:open={isMenuOpen}>
      <h1 class="logo">FitnessHub</h1> <!-- Logo auf der linken Seite -->
      <ul class="menu-items">
          <li><a href="/">Home</a></li>
          <li><a href="/kategorie">Workouts</a></li>
          <li><a href="/progress">Progress</a></li>
          <button class="login-button">Login</button>
      </ul>
      <div class="hamburger-lines" on:click={toggleMenu}>
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
      </div>
  </div>
</nav>


<slot />
