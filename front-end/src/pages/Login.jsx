import React from 'react';
import { Container, Button, Form, Row, Col } from "react-bootstrap";

function Login() {
    return (
      <Container>
         <br/><h1 style={{ display: "flex", justifyContent: "center" }}>Login</h1>

         <div className="d-grid gap-2">
            <Form.Group className="login" controlId="login-username">
               <Form.Label>Username</Form.Label>
               <Form.Control type="password" placeholder="Enter username"/>
            </Form.Group><br/>

            <Form.Group className="login" controlId="login-password">
               <Form.Label>Password</Form.Label>
               <Form.Control type="password" placeholder="Enter password"/>
            </Form.Group><br/>

            {/*Button functionality yet to be implemented*/}
            <div className="d-grid gap-2">
               <Button variant="primary" size="lg">Login</Button>
               <Button variant="secondary" size="lg">Back</Button>
            </div>

         </div>
    </Container>
    );
}

export default Login;