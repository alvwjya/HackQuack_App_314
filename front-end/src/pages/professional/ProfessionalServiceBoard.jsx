import React from "react";
import { Container, Form, Card, Button, Row, Col } from "react-bootstrap";

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

          <Row>
            <Col sm={8}>
              <Button variant="primary">Learn more</Button>
            </Col>
            <Col sm={2}>
              <Button variant="primary">Decline</Button>
            </Col>
            <Col sm={2}>
              <Button variant="primary">Accept</Button>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>Location</Card.Footer>
        <Card.Footer>Time</Card.Footer>
      </Card>
    </Container>
  );
}

export default ProfessionalViewRequest;
