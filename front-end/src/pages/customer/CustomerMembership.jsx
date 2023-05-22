import React from "react";
import { Container, Button, Form, Card } from "react-bootstrap";
import axios from "axios";

const API_ENDPOINT = process.env.REACT_APP_API_URL;

function CustomerMembership() {
  const membershipAnuallyCost = 1000;

  function handleSignUpMembershipOnClick(event) {
    console.log(API_ENDPOINT);
    const url = `${API_ENDPOINT}/subscribe-memberships/client`;
  }

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

        <Form.Group className="mb-3" controlId="formBasicMembershipEndDate">
          <Form.Label>Status</Form.Label>
          <Form.Control type="text" placeholder="Inactive" disabled />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Card className="mx-auto" style={{ width: 350 }}>
            <Card.Header>
              <h4>Customer Membership</h4>
              <p>billed anually</p>
              <h2>{membershipAnuallyCost} AUD/year</h2>
            </Card.Header>
            <Card.Body>
              <p>&#9989; Unlimited Assistance Callouts</p>
            </Card.Body>
          </Card>
        </Form.Group>

        <Button href="/add-payment-method" variant="primary" size="lg">
          Edit Payment Method
        </Button>
      </Form>

      <hr />

      <div className="d-grid gap-2">
        <Button
          className="btn-customer-button"
          onClick={handleSignUpMembershipOnClick}
          size="lg"
        >
          Sign Up
        </Button>
        <Button className="btn-cancel" size="lg">
          Cancel Membership
        </Button>
      </div>
    </Container>
  );
}

export default CustomerMembership;
