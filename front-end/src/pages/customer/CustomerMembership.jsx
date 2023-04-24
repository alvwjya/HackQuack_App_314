import React from "react";

function CustomerMembership() {
  return (
    <Container className="py-5">
      <h1>Professional Sign Up</h1>
      <p>Headline</p>

      <hr />

      <Form>
        <Form.Group className="mb-3" controlId="formBasicTaxNumber">
          <Form.Label>Tax Number</Form.Label>
          <Form.Control type="text" placeholder="Enter tax number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicABN">
          <Form.Label>ABN</Form.Label>
          <Form.Control type="text" placeholder="Enter ABN" />
        </Form.Group>

        <Button variant="primary" size="lg">
          Add Payment Method
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
