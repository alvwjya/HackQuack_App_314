import React from "react";
import { Nav, Container, Card, Button, Row, Col } from "react-bootstrap";

function ProfessionalServiceBoardRequest() {
  const data = [1, 2, 3, 4, 5];
  return (
    <Container className="py-5">
      <h1>SERVICE BOARD</h1>

      <hr />

      <Nav
        className="justify-content-center"
        variant="tabs"
        defaultActiveKey="/professional-service-board-request"
      >
        <Nav.Item>
          <Nav.Link href="/professional-service-board-request">
            Request(s)
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/professional-service-board-offer">Offer(s)</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/professional-service-board-active-service">
            Active Service(s)
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/professional-service-board-past-service">
            Past Service(s)
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {data.map((data) => (
        <div class="container py-3">
          <Card>
            <Card.Header>Service Title</Card.Header>
            <Card.Body>
              <Card.Title>Type of Issue</Card.Title>
              <Card.Text>Information</Card.Text>
              <Button
                href="/customer-service-board-request-offer"
                variant="primary"
              >
                Offer(s)
              </Button>{" "}
              <Button variant="primary">Cancel Request</Button>
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

export default ProfessionalServiceBoardRequest;