import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import axios from "axios";

function CustomerRatingAndReview() {
  const service_type = ["One", "Two", "Three", "Four", "Five"];
  return (
    <Container className="py-5">
      <Form>
        <h1>Rating and Review</h1>

        <hr />

        <Form.Group className="mb-3" controlId="formBasicServiceType">
          <Form.Label>Rating</Form.Label>
          <Form.Select aria-label="rating">
            <option value="">Please rate the service</option>
            {service_type.map((item, index) => {
              return <option value={index}>{item}</option>;
            })}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTaskDescription">
          <Form.Label>Review</Form.Label>
          <Form.Control
            type="text"
            placeholder="Please write the review for the service"
          />
        </Form.Group>

        <hr />

        <div className="d-grid gap-2">
          <Button className="btn-primary" size="lg">
            Submit
          </Button>
          <Button href="/" className="btn-cancel" size="lg">
            Cancel
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default CustomerRatingAndReview;
