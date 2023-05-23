import React from "react";
import { Nav, Container, Button, Card, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function CustomerServiceBoardOffer() {
  const data = [1, 2, 3, 4, 5];

  function handleAcceptOfferOnClick(event) {}

  return (
    <Container className="py-5">
      <h1>SERVICE BOARD</h1>

      <hr />

      <Nav
        className="justify-content-center"
        variant="tabs"
        defaultActiveKey="/customer-service-board-request"
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

      <Row>
        <Col>
          <div class="container py-3">
            <Card>
              <Card.Header>Service Title</Card.Header>
              <Card.Body>
                <Card.Title>Type of Issue</Card.Title>
                <Card.Text>Information</Card.Text>
                <LinkContainer to="/customer-service-board-request-offer">
                  <Button variant="primary">Offer(s)</Button>
                </LinkContainer>{" "}
                <LinkContainer to="">
                  <Button className="btn-warning">Cancel Request</Button>
                </LinkContainer>
              </Card.Body>

              <Card.Footer>Location</Card.Footer>
              <Card.Footer>Time</Card.Footer>
            </Card>
          </div>
        </Col>
        <Col>
          {data.map((data) => (
            <div class="container py-3">
              <Card>
                <Card.Header>Professional Name</Card.Header>
                <Card.Body>
                  <Card.Text>Information</Card.Text>
                  <Card.Text>Price: N/A</Card.Text>
                  <LinkContainer to="customer-service-board-request-offer-detail">
                    <Button className="btn-info">Learn more</Button>
                  </LinkContainer>{" "}
                  <LinkContainer to="">
                    <Button className="btn-warning">Decline</Button>{" "}
                  </LinkContainer>{" "}
                  <LinkContainer to="">
                    <Button className="btn-primary">Accept</Button>
                  </LinkContainer>{" "}
                </Card.Body>
                <Card.Footer>Location</Card.Footer>
                <Card.Footer>Ratings</Card.Footer>
                <Card.Footer>Reviews</Card.Footer>
              </Card>
            </div>
          ))}
        </Col>
      </Row>

      <hr />
    </Container>
  );
}

export default CustomerServiceBoardOffer;
