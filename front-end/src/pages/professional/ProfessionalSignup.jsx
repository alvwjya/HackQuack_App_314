import React from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";

function ProfessionalSignup() {
  return (
    <Container className="py-5">
      <Form>
        <h1>Professional Log In</h1>
        <p>Headline</p>

        <hr />

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
              <Form.Label>Suburn</Form.Label>
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
              <Form.Control type="text" placeholder="Enter suburn" />
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

        <hr />

        <p>
          By creating an account you agree to our{" "}
          <a href="#">Terms & Privacy</a>.
        </p>


        <div className="d-grid gap-2">
          <Button variant="primary" size="lg">Sign Up</Button>
          <Button variant="secondary" size="lg">Cancel</Button>
        </div>

      </Form>
    </Container>
  );
}

export default ProfessionalSignup;
