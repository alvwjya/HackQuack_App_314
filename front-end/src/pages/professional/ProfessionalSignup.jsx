import React from "react";
import { Container, Button } from "react-bootstrap";

function ProfessionalSignup() {
  return (
    <>
      <form action="action_page.php">
        <div class="container">
          <h1>Professional Log In</h1>
          <p>Headline</p>

          <hr/>

          <label for="fname"><b>First Name</b></label>
          <input type="text" placeholder="Enter first name" name="fname" id="fname" required></input>

          <label for="lname"><b>Last Name</b></label>
          <input type="text" placeholder="Enter last name" name="lname" id="lname" required></input>

          <label for="email"><b>Enter Email</b></label>
          <input type="text" placeholder="Enter email" name="email" id="email" required></input>

          <label for="address"><b>Address</b></label>
          <input type="text" placeholder="Enter address" name="address" id="address" required></input>

          <label for="suburn"><b>Suburn</b></label>
          <input type="text" placeholder="Enter suburn" name="suburn" id="suburn" required></input>

          <label for="state"><b>State</b></label>
          <input type="text" placeholder="Enter state" name="state" id="state" required></input>

          <label for="postcode"><b>Postcode</b></label>
          <input type="text" placeholder="Enter postcode" name="postcode" id="postcode" required></input>

          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter password" name="psw" id="psw" required></input>

          <label for="psw-repeat"><b>Confirm Password</b></label>
          <input type="password" placeholder="Enter confirm Password" name="psw-repeat" id="psw-repeat" required></input>

          <hr/>

          <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
          
          <div class="clearfix">
            <button type="button" class="cancelbtn">Cancel</button>
            <button type="submit" class="signupbtn">Sign Up</button>
          </div>
        </div>
      </form> 
    </>
  );
}

export default ProfessionalSignup;
