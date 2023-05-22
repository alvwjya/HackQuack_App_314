import React, { useState } from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../contexts/AuthContext";
import { USER_TYPE } from "../constants/userTypes";

const API_ENDPOINT = process.env.REACT_APP_API_URL;

function ProfessionalSignUp() {
  const navigate = useNavigate();

  const {service_type} = [1, 2, 3, 4, 5];

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",

    abn: "",
    tfn: "",

    address: "",
    suburb: "",
    state: "",
    postcode: "",

    service_type_id: 0,

    password: "",
    confirm_password: "",
  });

  async function handleSubmit() {
    console.log(API_ENDPOINT);
    const url = `${API_ENDPOINT}/signup/professional`;

    if (form.password !== form.confirm_password) {
      console.log("Password and confirm password don't match");
      return;
    }

    const res = await axios.post(url, form);
    console.log(res);

    console.log("Professional - Create account sucessfully!");

    navigate("/professional-dashboard");
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

  function handleABN(event) {
    setForm({ ...form, abn: event.target.value });
  }

  function handleTaxNumber(event) {
    setForm({ ...form, tfn: event.target.value });
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

  function handleServiceTypeChange(event) {
    setForm({ ...form, service_type_id: event.target.value });
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
      <h1>PROFESSIONAL SIGN UP</h1>

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

        <Form.Group className="mb-3" controlId="formBasicTaxNumber">
          <Form.Label>Tax Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter tax number"
            value={form.tfn}
            onChange={handleTaxNumber}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicABN">
          <Form.Label>ABN</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter ABN"
            value={form.abn}
            onChange={handleABN}
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

        <Form.Group className="mb-3" controlId="formBasicServiceType">
          <Form.Label>Service Type</Form.Label>
          <Form.Select
            aria-label="selectServiceType"
            value={form.serviceType}
            onChange={handleServiceTypeChange}
          >
            <option>Please select</option>
            {service_type.map((item, index) => {
              return <option value={index}>{item}</option>;
            })}
          </Form.Select>
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

        <Button href="/add-payment-method" variant="primary" size="lg">
          Add Payment Method
        </Button>
      </Form>

      <hr />

      <div className="d-grid gap-2">
        <Button
          className="btn-professional-button"
          size="lg"
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
        <Button href="/" className="btn-cancel" size="lg">
          Cancel
        </Button>
      </div>
    </Container>
  );
}

export default ProfessionalSignUp;
