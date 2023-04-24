import React from "react";
import { Container, Form, Card, Button } from "react-bootstrap";

function ProfessionalViewRequest() {
  return (
    <Container className="py-5">
      <h1>SERVICE BOARD</h1>

      <Card>
        <Card.Header>Service Title</Card.Header>
        <Card.Body>
          <Card.Title>Type of Issue</Card.Title>
          <Card.Subtitle></Card.Subtitle>
          <Card.Text>Information</Card.Text>
          <Button variant="primary">Learn more</Button>
          <Button variant="primary">Decline</Button>
          <Button variant="primary">Accept</Button>
        </Card.Body>
        <Card.Footer>Location</Card.Footer>
        <Card.Footer>Time</Card.Footer>
      </Card>
    </Container>
  );
}

export default ProfessionalViewRequest;
