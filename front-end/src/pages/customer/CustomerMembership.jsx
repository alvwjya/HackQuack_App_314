import React from "react";
import { Container, Button, Form } from "react-bootstrap";

function CustomerMembership() {
  return (
    <Container className="py-5">
      <h1>CUSTOMER MEMBERSHIP</h1>

      <hr />

      <Form>
        <Form.Group className="mb-3" controlId="formBasicMembershipStartDate">
          <Form.Label>Start Date</Form.Label>
          <Form.Control type="text" placeholder="DD/MM/YYYY" disabled />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMembershipEndDate">
          <Form.Label>End Date</Form.Label>
          <Form.Control type="text" placeholder="DD/MM/YYYY" disabled />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="$ amount" disable />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicABN">
          <Form.Label>ABN</Form.Label>
          <Form.Control type="text" placeholder="Enter ABN" />
        </Form.Group>

        <Button variant="primary" size="lg">
          Edit Payment Method
        </Button>
      </Form>

      <hr />

      <div className="d-grid gap-2">
        <Button variant="primary" size="lg">
          Sign Up
        </Button>
        <Button variant="secondary" size="lg">
          Cancel
        </Button>
      </div>
    </Container>
  );
}

export default CustomerMembership;
