import React, { useState } from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";

function ProfessionalAccount() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
    suburb: "",
    state: "",
    postcode: "",
    password: "",
    confirmedPassword: "",
    taxNumber: "",
    ABN: "",
  });

  async function handleSubmit() {}

  function handleFirstNameChange(event) {
    setForm({ ...form, firstName: event.target.value });
  }

  function handleLastNameChange(event) {
    setForm({ ...form, lastName: event.target.value });
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
      <h1>ACCOUNT</h1>
      <h2>Professional Account</h2>

      <hr />

      <div className="d-grid gap-2">
        <Button href="/professional-membership" variant="primary" size="lg">
          Membership
        </Button>
      </div>

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
          <Form.Control type="text" placeholder="johndoe@gmail.com" disabled />
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
              <Form.Control
                type="text"
                placeholder="Enter suburb"
                value={form.suburb}
                onChange={handleSuburbChange}
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Enter state"
                value={form.state}
                onChange={handleStateChange}
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Enter postcode"
                value={form.postcode}
                onChange={handlePostcodeChange}
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Service Type</Form.Label>
          <Form.Control type="text" placeholder="Service Type" disabled />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handlePasswordChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRepeatPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter confirm Password"
            value={form.confirmedPassword}
            onChange={handleConfirmedPasswordChange}
          />
        </Form.Group>
      </Form>

      <hr />

      <div className="d-grid gap-2">
        <Button variant="primary" size="lg">
          Save
        </Button>
        <Button variant="cancel" size="lg">
          Cancel
        </Button>
      </div>
    </Container>
  );
}

export default ProfessionalAccount;
