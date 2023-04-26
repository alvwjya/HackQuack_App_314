import React from "react";
import { Nav, Container, Card, Button, Row, Col } from "react-bootstrap";

function CustomerServiceBoard() {
  const data = [1, 2, 3, 4, 5];
  return (
    <Container className="py-5">
      <h1>SERVICE BOARD</h1>

      <hr />

      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Request(s)</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Offer(s)</Nav.Link>
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
              <Row>
                <Col xs={10}>
                  <Button
                    href="/customer-offer-professional-details"
                    variant="primary"
                  >
                    Learn more
                  </Button>
                </Col>
                <Col xs={1}>
                  <Button variant="primary">Decline</Button>
                </Col>
                <Col xs={1}>
                  <Button variant="primary">Accept</Button>
                </Col>
              </Row>
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
