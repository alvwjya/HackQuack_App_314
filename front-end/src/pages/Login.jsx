import React from "react";
import { Container, Button, Form } from "react-bootstrap";

function Login() {
  return (
    <Container>
      <br />
      <h1>Login</h1>

      <hr />

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>
      </Form>

      <hr />

      {/*Button functionality yet to be implemented*/}
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg">
          Login Customer
        </Button>
        <Button variant="primary" size="lg">
          Login Professional
        </Button>
        <Button variant="secondary" size="lg">
          Back
        </Button>
      </div>
    </Container>
  );
}

export default Login;
