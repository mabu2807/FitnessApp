
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fitness Registration</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <section class="register">
    <div class="register_box">
      <div class="left">
        <div class="top_link">
          <a href="/"><img src="logo.png" alt="Logo"></a>
        </div>
        <div class="contact">
          <form action="#">
            <h3>Create an Account</h3>
            <input type="text" placeholder="Username">
            <input type="email" placeholder="Email">
            <input type="password" placeholder="Password">
            <input type="password" placeholder="Confirm Password">
            <button type="submit" class="submit">Sign Up</button>
          </form>
        </div>
      </div>
      <div class="right">
        <div class="right-text">
          <h2>Join FitnessHub</h2>
          <h5>Your path to a healthier lifestyle</h5>
        </div>
        <div class="right-indicator"></div>
      </div>
    </div>
  </section>
</body>


<style>

body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.register {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
}

.register_box {
  width: 1050px;
  height: 600px;
  position: relative;
  background: #fff;
  border-radius: 10px;
  box-shadow: 1px 4px 22px -8px #0004;
  display: flex;
  overflow: hidden;
}

.register_box .left {
  width: 41%;
  height: 100%;
  padding: 25px 25px;
  background-color: #fff;
}

.register_box .right {
  width: 59%;
  height: 100%;
  background-color: #000;
}

.left h3 {
  text-align: center;
  margin-bottom: 40px;
  color: #000;
}

.left input {
  border: none;
  width: 80%;
  margin: 15px 0px;
  border-bottom: 1px solid #000;
  padding: 7px 9px;
  width: 91%;
  overflow: hidden;
  background: transparent;
  font-weight: 600;
  font-size: 14px;
  color: #000;
}

.register .submit {
  cursor: pointer;
  padding: 15px 70px;
  border: 2px solid black;
  border-radius: 8px;
  display: block;
  margin: auto;
  margin-top: 120px;
  background: #000;
  color: #fff;
  font-weight: bold;
  -webkit-box-shadow: 0px 9px 15px -11px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 9px 15px -11px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 9px 15px -11px rgba(0, 0, 0, 0.4);
}

.register .submit:hover {
  color:black;
  background-color: white;
  box-shadow: 0px 10px 20px -6px rgba(0, 0, 0, 0.627);
  transition: .5s ease all;
}

.right {
  background: radial-gradient(circle at center, #999999, #CCCCCC);
  color: #000;
  mix-blend-mode: difference;
  position: relative;
}

.right .right-text {
  height: 58%;
  position: relative;
  color: inherit; 
  mix-blend-mode: initial;
  transform: translate(0%, 45%);
}

.right-text h2 {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 50px;
  font-weight: 500;
  color: #000;
}

.right-text h5 {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 19px;
  font-weight: 400;
  color: #000;
}

.right-indicator {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 70px;
  height: 5px;
  background-color: #000;
  border-radius: 10px;
  animation: indicator 1.5s ease-in-out infinite alternate;
}
@keyframes indicator {
    0% {
      width: 200px;
    }
    50% {
      width: 250px;
    }
    100% {
      width: 200px;
    }
  }



</style>
