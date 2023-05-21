import React, { useState } from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";

function ProfessionalSignUp() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    suburb: "",
    state: "",
    postcode: "",
    serviceType: 0,
    password: "",
    confirmedPassword: "",
    taxNumber: "",
    ABN: 0,
  });

  async function handleSubmit() {}

  function handleFirstNameChange(event) {
    setForm({ ...form, firstName: event.target.value });
  }

  function handleLastNameChange(event) {
    setForm({ ...form, lastName: event.target.value });
  }

  function handleEmailChange(event) {
    setForm({ ...form, email: event.target.value });
  }

  function handleAddressChange(event) {
    setForm({ ...form, address: event.target.value });
  }

  function handleSuburbChange(event) {
    setForm({ ...form, suburb: event.target.value });
  }

  function handleStateChange(event) {
    setForm({ ...form, state: event.target.value });
  }

  function handlePostcodeChange(event) {
    setForm({ ...form, postcode: event.target.value });
  }

  function handlePasswordChange(event) {
    setForm({ ...form, password: event.target.value });
  }

  function handleConfirmedPasswordChange(event) {
    setForm({ ...form, confirmedPassword: event.target.value });
  }

  function handleTaxNumber(event) {
    setForm({ ...form, taxNumber: event.target.value });
  }

  function handleABN(event) {
    setForm({ ...form, ABN: event.target.value });
  }

  console.log(form);

  async function handleSubmit() {}

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
              <Form.Control
                type="text"
                placeholder="Enter first name"
                value={form.firstName}
                onChange={handleFirstNameChange}
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                value={form.lastName}
                onChange={handleLastNameChange}
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            value={form.email}
            onChange={handleEmailChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAddress_1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            value={form.address}
            onChange={handleAddressChange}
          />
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

        <Form.Group className="mb-3" controlId="formBasicServiceType">
          <Form.Label>Service Type</Form.Label>
          <Form.Select aria-label="selectServiceType">
            <option>Please select</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRepeatPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Enter confirm Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTaxNumber">
          <Form.Label>Tax Number</Form.Label>
          <Form.Control type="text" placeholder="Enter tax number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicABN">
          <Form.Label>ABN</Form.Label>
          <Form.Control type="text" placeholder="Enter ABN" />
        </Form.Group>

        <Button href="/add-payment-method" variant="primary" size="lg">
          Add Payment Method
        </Button>
      </Form>

      <hr />

      <div className="d-grid gap-2">
        <Button variant="primary" size="lg">
          Sign Up
        </Button>
        <Button variant="cancel" size="lg">
          Cancel
        </Button>
      </div>
    </Container>
  );
}

export default ProfessionalSignUp;
