import React from "react";
import { Nav, Container, Card, Button, Row, Col } from "react-bootstrap";

function CustomerServiceBoard() {
  const data = [1];
  return (
    <Container className="py-5">
      <h1>SERVICE BOARD</h1>

      <hr />

      <Nav variant="tabs" defaultActiveKey="/customer-service-board-request">
        <Nav.Item>
          <Nav.Link href="/customer-service-board-request">Request(s)</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/customer-service-board-offer">Offer(s)</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Active Service(s)</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Past Service(s)</Nav.Link>
        </Nav.Item>
      </Nav>

      {data.map((data) => (
        <div class="container p-3">
          <Card>
            <Card.Header>Service Title</Card.Header>
            <Card.Body>
              <Card.Title>Type of Issue</Card.Title>
              <Card.Text>Information</Card.Text>
              <Button variant="primary" align="right">
                Cancel Request
              </Button>
            </Card.Body>

            <Card.Footer>Location</Card.Footer>
            <Card.Footer>Time</Card.Footer>
          </Card>
        </div>
      ))}

      <hr />
    </Container>
  );
}

export default CustomerServiceBoard;
