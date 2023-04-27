import React from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";

function ProfessionalSignUp() {
  return (
    <Container className="py-5">
      <h1>Professional Sign Up</h1>
      <p>Headline</p>

      <hr />

      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Row>
            <Col>
              <Form.Label>First Name</Form.Label>
            </Col>
            <Col>
              <Form.Label>Last Name</Form.Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control type="text" placeholder="Enter first name" />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Enter last name" />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress_1">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress_2">
          <Row>
            <Col>
              <Form.Label>Suburb</Form.Label>
            </Col>
            <Col>
              <Form.Label>State</Form.Label>
            </Col>
            <Col>
              <Form.Label>Postcode</Form.Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control type="text" placeholder="Enter suburb" />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Enter state" />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Enter postcode" />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRepeatPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Enter confirm Password" />
        </Form.Group>
      </Form>

      <hr />

      <div className="d-grid gap-2">
        <Button href="/professional-sign-up-two" variant="primary" size="lg">
          Next
        </Button>
        <Button variant="secondary" size="lg">
          Cancel
        </Button>
      </div>
    </Container>
  );
}

export default ProfessionalSignUp;
