import React from "react";
import { Container, Card, Form } from "react-bootstrap";

function CustomerOfferProfessionalDetails() {
  const data = [1, 2, 3, 4, 5];
  return (
    <Container className="py-5">
      <div class="container py-3">
        <Card>
          <Card.Body>
            <h1>Professional Name</h1>

            <hr />
            <Form.Group className="mb-3" controlId="formBasicInformation">
              <Form.Label>Information</Form.Label>
              <Form.Control type="text" placeholder="Information" disable />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" placeholder="AUD" disable />
            </Form.Group>

            <hr />
          </Card.Body>
          <Card.Footer>Location</Card.Footer>
          <Card.Footer>
            Ratings and Reviews{" "}
            {data.map((data) => (
              <div class="container py-3">
                <Card>
                  <Card.Header>Customer name</Card.Header>
                  <Card.Body></Card.Body>
                </Card>
              </div>
            ))}
          </Card.Footer>
        </Card>
      </div>
    </Container>
  );
}

export default CustomerOfferProfessionalDetails;
