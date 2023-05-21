import React, { useState } from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";

function PaymentMethod() {
  const [form, setForm] = useState({
    cardNumber: "",
    expiry: "",
    CVV: "",
    billingEmail: "",
  });

  async function handleSubmit() {}

  function handleCardNumberChange(event) {
    setForm({ ...form, cardNumber: event.target.value });
  }

  function handleExpiryChange(event) {
    setForm({ ...form, expiry: event.target.value });
  }

  function handleCVVChange(event) {
    setForm({ ...form, expiry: event.target.value });
  }

  function handleBillingEmailChange(event) {
    setForm({ ...form, email: event.target.value });
  }

  console.log(form);

  return (
    <Container className="py-5">
      <h1>Add Payment Method</h1>

      <hr />

      <Form>
        <Form.Group className="mb-3" controlId="formBasicCardNumber">
          <Form.Label>Card Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter card number"
            value={form.cardNumber}
            onChange={handleCardNumberChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCardNumberInfo">
          <Row>
            <Col>
              <Form.Label>Expiry</Form.Label>
            </Col>
            <Col>
              <Form.Label>CVV</Form.Label>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                type="text"
                placeholder="MM/YYYY"
                value={form.expiry}
                onChange={handleExpiryChange}
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Enter CVV"
                value={form.CVV}
                onChange={handleCVVChange}
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRepeatPassword">
          <Form.Label>Billing Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter billing email"
            value={form.billingEmail}
            onChange={handleBillingEmailChange}
          />
        </Form.Group>
      </Form>

      <hr />

      <div className="d-grid gap-2">
        <Button variant="primary" size="lg">
          Confirm
        </Button>
        <Button variant="cancel" size="lg">
          Cancel
        </Button>
      </div>
    </Container>
  );
}

export default PaymentMethod;
