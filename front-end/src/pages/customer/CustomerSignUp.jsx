import React, { useState } from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import axios from "axios";

const API_ENDPOINT = process.env.REACT_APP_API_URL;

function CustomerSignUp() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    suburb: "",
    state: "",
    postcode: "",
    password: "",
    confirm_password: "",
  });

  async function handleSubmit() {
    console.log(API_ENDPOINT);
    const url = `${API_ENDPOINT}/signup/customer`;

    if (form.password !== form.confirm_password) {
      console.log("Password and confirm password don't match");
      return;
    }

    const res = await axios.post(url, form);
    console.log(res);
  }

  function handleFirstNameChange(event) {
    setForm({ ...form, first_name: event.target.value });
  }

  function handleLastNameChange(event) {
    setForm({ ...form, last_name: event.target.value });
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
    setForm({ ...form, confirm_password: event.target.value });
  }

  console.log(form);

  return (
    <Container className="py-5">
      <h1>Customer Sign Up</h1>

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
                value={form.first_name}
                onChange={handleFirstNameChange}
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                value={form.last_name}
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
            value={form.confirm_password}
            onChange={handleConfirmedPasswordChange}
          />
        </Form.Group>
      </Form>

      <hr />

      <div className="d-grid gap-2">
        <Button
          href="/customer-dashboard"
          className="btn-customer-button"
          size="lg"
        >
          Sign Up
        </Button>
        <Button variant="cancel" size="lg">
          Cancel
        </Button>
      </div>
    </Container>
  );
}

export default CustomerSignUp;
