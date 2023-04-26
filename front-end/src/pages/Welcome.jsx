import React from "react";
import { Container, Button, Image, Card } from "react-bootstrap";

function Welcome() {
  return (
    <Container style={{ backgroundColor: "#CDBFA0" }}>
      <br />

      <Card
        className="mx-auto"
        style={{ backgroundColor: "lightslategray", width: 500 }}
      >
        <Card.Body>
          <br />
          <h1 style={{ display: "flex", justifyContent: "center" }}>Welcome</h1>

          <Container style={{ display: "flex", justifyContent: "center" }}>
            <Image
              src="/newlogo.ico"
              roundedCircle
              style={{ display: "flex", justifyContent: "centre" }}
            />
          </Container>

          <br />

          <div className="d-grid gap-2">
            <Button href="/customer-sign-up" variant="primary">
              Sign up Customer
            </Button>

            <Button href="/professional-sign-up" variant="primary">
              Sign up Professional
            </Button>

            <Button href="/login" variant="secondary">
              Log in
            </Button>
          </div>
        </Card.Body>
      </Card>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div style={{ display: "flex", justifyContent: "center" }}>
        HackQuack Enterprises 2023 (TM)
      </div>
    </Container>
  );
}

export default Welcome;
