import React from "react";
import { Container, Card } from "react-bootstrap";

function CustomerRatingAndReview() {
  return (
    <Container className="py-5">
      <h1>RECEIPT</h1>

      <hr />

      <div class="container p-3">
        <Card>
          <Card.Header>Receipt</Card.Header>
          <Card.Body>
            <Card.Text>Date & Time</Card.Text>
            <Card.Text>Price</Card.Text>
          </Card.Body>
        </Card>
      </div>

      <hr />
    </Container>
  );
}

export default CustomerRatingAndReview;
