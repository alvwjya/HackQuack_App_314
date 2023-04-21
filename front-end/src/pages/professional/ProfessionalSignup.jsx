import React from "react";
import { Container, Button } from "react-bootstrap";

function ProfessionalSignup() {
  return (
    <>
      <form action="action_page.php">
        <div class="container">
          <h1>Professional Log In</h1>
          <p>Headline</p>

          <hr></hr>

          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" id="email" required></input>

          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" id="psw" required></input>

          <label for="psw-repeat"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required></input>

          <hr></hr>
          
          <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
          <button type="submit" class="registerbtn">Register</button>

        </div>
      </form> 
    </>
  );
}

export default ProfessionalSignup;
