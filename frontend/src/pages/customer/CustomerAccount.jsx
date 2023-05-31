import React, { useEffect, useState, useContext } from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Form,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import AuthContext from "../../contexts/AuthContext";
import { LinkContainer } from "react-router-bootstrap";
import axios from "axios";

function CustomerAccount() {
  const { user } = useContext(AuthContext);

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
    const url = `/account/customer`;

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
    <div>
      <Navbar bg="customer-tab" variant="light">
        <Container>
          <LinkContainer to="/customer-dashboard">
            <Navbar.Brand>
              <Image
                src="/favicon.ico"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt=""
              />{" "}
              HACKQUACK
            </Navbar.Brand>
          </LinkContainer>

          <LinkContainer to="/customer-service-board-request">
            <Nav.Link>Service Board</Nav.Link>
          </LinkContainer>

          <Navbar.Collapse className="justify-content-end">
            <LinkContainer to="/customer-account">
              <Nav.Link>
                {user.firstName} {user.lastName}{" "}
                <Image
                  src="/newlogo.ico"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt=""
                />
              </Nav.Link>
            </LinkContainer>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="py-5">
        <h1>ACCOUNT</h1>
        <h2>Customer Account</h2>

        <hr />

        <div className="d-grid gap-2">
          <LinkContainer to="/customer-membership">
            <Button className="btn-customer-button" size="lg">
              Membership
            </Button>
          </LinkContainer>
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
                  placeholder={user.firstName}
                  value={form.first_name}
                  onChange={handleFirstNameChange}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder={user.lastName}
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
              placeholder={user.email}
              disabled="disabled"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddress_1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder={user.address}
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
          <Button variant="primary" size="lg" onClick={handleSubmit}>
            Save
          </Button>
          <Button variant="cancel" size="lg">
            Cancel
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default CustomerAccount;