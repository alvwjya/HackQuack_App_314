import React from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";

function Payment() {
  return (
    <Container className="py-5">
      <Form>
        <h1>Payment</h1>

        <Form.Group className="mb-3" controlId="formBasicCardNumber">
          <Form.Label>Card Number</Form.Label>
          <Form.Control type="text" placeholder="Enter card number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCardNumberInfo">
          <Row>
            <Col>
              <Form.Label>Expiry</Form.Label>
            </Col>
            <Col>
              <Form.Control type="text" placeholder="MM YY" />
            </Col>
            <Col>
              <Form.Label>CCV</Form.Label>
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Enter CCV" />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRepeatPassword">
          <Form.Label>Billing Email</Form.Label>
          <Form.Control type="text" placeholder="Enter billing email" />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button variant="primary" size="lg">
            Confirm
          </Button>
          <Button variant="secondary" size="lg">
            Cancel
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Payment;
