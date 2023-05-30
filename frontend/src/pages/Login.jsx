import React, { useState, useContext } from "react";
import {
  Alert,
  Container,
  ToggleButton,
  ToggleButtonGroup,
  Button,
  Form,
  CardGroup,
  Card,
  Image,
} from "react-bootstrap";
import axios from "axios";
import AuthContext from "../contexts/AuthContext";


function Login() {
  const { setUser } = useContext(AuthContext);

  const [form, setForm] = useState({
    loginUserType: "customer",
    loginEmail: "",
    loginPassword: "",
  });

  async function handleSubmit() {
    const url = `/signin`;

    if (form.password !== form.confirm_password) {
      console.log("Password and confirm password don't match");
      return;
    }

    const res = await axios.post(url, form);

    if (res.status === 200) {
      setUser({
        userId: res.data.userId,
        userType: res.data.userType,
        firstName: res.data.firstName,
        lastName: res.data.lastName,
      });
    } else {
      console.log(res);
    }
  }

  function handleUserTypeChange(event) {
    console.log(event);
    setForm({ ...form, loginUserType: event });
  }

  function handleEmailChange(event) {
    setForm({ ...form, loginEmail: event.target.value });
  }

  function handlePasswordChange(event) {
    setForm({ ...form, loginPassword: event.target.value });
  }

  //To swap the customer and proffesional button colors
  function colorChanger(params) {

    if (1===1) {

      
      return;
    }

  }

  return (
    <div>
      <Container className="py-5">
        <CardGroup className="shadow-lg mx-auto" style={{ width: 1000 }}>
          <Card>
            <Image className="h-100" src="/hackquack-welcome.gif"></Image>
          </Card>
          <Card>
            <Card.Body>
              <h1
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Login
              </h1>

              <div className="py-2 d-grid gap-2">
                <ToggleButtonGroup
                  type="radio"
                  name="options"
                  defaultValue={"customer"}
                  onChange={[handleUserTypeChange, colorChanger]}
                >
                  <ToggleButton
                    className="btn-customer-button"
                    id="customer"
                    value="customer"
                    checked={form.loginUserType === "customer"}
                    
                  >
                    Customer
                  </ToggleButton>
                  <ToggleButton
                    id="professional"
                    value="professional"
                    className="btn-professional-button"
                    checked={form.loginUserType === "customer"}
                    
                  >
                    Professional
                  </ToggleButton>
                </ToggleButtonGroup>
              </div>

              <hr />

              <div className="py-2">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Email"
                      value={form.loginEmail}
                      onChange={handleEmailChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      value={form.loginPassword}
                      onChange={handlePasswordChange}
                    />
                  </Form.Group>
                </Form>
              </div>

              <hr />

              <div className="d-grid gap-2">
                <Button onClick={handleSubmit}>Login </Button>
              </div>

              <div className="py-2 d-flex justify-content-center">
                <text>New Duckie?&nbsp;</text>
                <Alert.Link href="/">Sign Up</Alert.Link>
              </div>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
}

export default Login;