import React from "react";
import { Container, Button, Card, Row, Col } from "react-bootstrap";

function CustomerOfferProfessionalDetails() {
  const data = [1, 2, 3, 4, 5];
  return (
    <Container className="py-5">
      <h1>PROFESSIONAL INFORMATION</h1>

      <hr />

      <div class="container p-3">
        <Card>
          <Card.Header>Professional Name</Card.Header>
          <Card.Body>
            <Card.Text>Information</Card.Text>
            <Card.Text>Price</Card.Text>

            <Row>
              <Col xs={10}>
                <Button variant="primary">Learn more</Button>
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
          <Card.Footer>Ratings and Reviews</Card.Footer>
        </Card>
      </div>

      <hr />
    </Container>
  );
}

export default CustomerOfferProfessionalDetails;
