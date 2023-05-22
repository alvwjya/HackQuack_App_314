import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import axios from "axios";

const API_ENDPOINT = process.env.REACT_APP_API_URL;

function ProfessionalMembership() {
  function handleSignUpMembershipOnClick(event) {
    console.log(API_ENDPOINT);
    const url = `${API_ENDPOINT}/subscribe-memberships/professional`;
  }

  return (
    <Container className="py-5">
      <h1>PROFESSIONAL MEMBERSHIP</h1>

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

        <Button variant="primary" size="lg">
          Edit Payment Method
        </Button>
      </Form>

      <hr />

      <div className="d-grid gap-2">
        <Button
          className="btn-professional-button"
          onClick={handleSignUpMembershipOnClick}
          size="lg"
        >
          Sign Up
        </Button>
        <Button className="btn-cancel" size="lg">
          Cancel
        </Button>
      </div>
    </Container>
  );
}

export default ProfessionalMembership;
