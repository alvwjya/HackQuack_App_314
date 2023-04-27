import React from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";

function PaymentMethod() {
  return (
    <Container className="py-5">
      <h1>Payment Method</h1>

      <hr />

      <Form>
        <Form.Group className="mb-3" controlId="formBasicTotal">
          <Form.Label>Total</Form.Label>
          <Form.Control type="text" placeholder="$ amount" disable />
        </Form.Group>

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
              <Form.Control type="text" placeholder="MM/YYYY" />
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
      </Form>

      <hr />

      <div className="d-grid gap-2">
        <Button variant="primary" size="lg">
          Confirm
        </Button>
        <Button variant="secondary" size="lg">
          Cancel
        </Button>
      </div>
    </Container>
  );
}

export default PaymentMethod;
