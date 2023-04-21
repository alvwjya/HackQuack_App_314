import React from "react";
import { Container, Button, Image } from "react-bootstrap";

function Welcome() {
  return (
    <Container>
      <h1 style={{ display: "flex", justifyContent: "center" }}>Welcome</h1>
      
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Image
          src="/favicon.ico"
          roundedCircle
          style={{ display: "flex", justifyContent: "center" }}
        />
      </Container>

      <div className="d-grid gap-2">
        <Button href="/customer-sign-up" variant="primary">
          Sign up Customer
        </Button>
        <Button href="/professional-sign-up" variant="primary">
          Sign up Professional
        </Button>
        <Button href="/login" variant="primary">
          Log in
        </Button>
      </div>
    </Container>
  );
}

export default Welcome;
