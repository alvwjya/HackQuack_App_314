import React from "react";
import { Container, Button } from "react-bootstrap";

function Welcome() {
  return (
    <>
      <Container>
        <div>Welcome</div>
        <Button href="/customer-sign-up"variant="primary">Sign up Customer</Button>
        <Button href="/professional-sign-up" variant="primary">Sign up Professional</Button>
        <Button href="/login" variant="primary">Log in</Button>
      </Container>
    </>
  );
}

export default Welcome;
