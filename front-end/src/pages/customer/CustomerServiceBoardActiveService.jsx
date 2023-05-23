import React from "react";
import { Nav, Container, Card, Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function CustomerServiceBoardActive() {
  const data = [1, 2, 3, 4, 5];
  return (
    <Container className="py-5">
      <h1>SERVICE BOARD</h1>

      <hr />

      <Nav
        className="justify-content-center"
        variant="tabs"
        defaultActiveKey="/customer-service-board-active-service"
      >
        <LinkContainer to="/customer-service-board-request">
          <Nav.Item>
            <Nav.Link href="/customer-service-board-request">
              Request(s)
            </Nav.Link>
          </Nav.Item>
        </LinkContainer>

        <LinkContainer to="/customer-service-board-active-service">
          <Nav.Item>
            <Nav.Link href="/customer-service-board-active-service">
              Active Service(s)
            </Nav.Link>
          </Nav.Item>
        </LinkContainer>

        <LinkContainer to="/customer-service-board-past-service">
          <Nav.Item>
            <Nav.Link href="/customer-service-board-past-service">
              Past Service(s)
            </Nav.Link>
          </Nav.Item>
        </LinkContainer>
      </Nav>

      {data.map((data) => (
        <div class="container py-3">
          <Card>
            <Card.Header>Service Title</Card.Header>

            <Card.Body>
              <Card.Title>Type of Issue</Card.Title>
              <Card.Subtitle>Professional Name</Card.Subtitle>
              <Card.Text>Information</Card.Text>
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

export default CustomerServiceBoardActive;
