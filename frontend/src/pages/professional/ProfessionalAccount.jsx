import React, { useEffect, useContext, useState } from "react";
import {
  Container,
  Button,
  Navbar,
  Nav,
  Image,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import AuthContext from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ProfessionalAccount() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // GET USER-PROFESSIONAL DATA
  const url = `/user/professional/${user.userId}`;
  const [professionalData, setProfessionalData] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(url);
        console.log(res.data);
        if (res.status === 200) {
          setProfessionalData(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [url]);

  // UPDATE USER-PROFESSIONAL DATA
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
    confirmedPassword: "",
  });

  async function handleSubmit() {}

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
    setForm({ ...form, confirmedPassword: event.target.value });
  }

  return (
    <div>
      <Navbar bg="professional-tab" variant="light">
        <Container>
          <LinkContainer to="/professional-dashboard">
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

          <LinkContainer to="/professional-service-board-request">
            <Nav.Link>Service Board</Nav.Link>
          </LinkContainer>

          <Navbar.Collapse className="justify-content-end">
            <LinkContainer to="/professional-account">
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
        <h2>Professional Account</h2>

        <hr />

        <div className="d-grid gap-2">
          <LinkContainer to="/professional-membership">
            <Button className="btn-professional-button" size="lg">
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
                  placeholder={professionalData.first_name}
                  value={form.first_name}
                  onChange={handleFirstNameChange}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder={professionalData.last_name}
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
              placeholder={professionalData.email}
              disabled
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddress_1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder={professionalData.address}
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
                  placeholder={professionalData.suburb}
                  value={form.suburb}
                  onChange={handleSuburbChange}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder={professionalData.state}
                  value={form.state}
                  onChange={handleStateChange}
                />
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder={professionalData.postcode}
                  value={form.postcode}
                  onChange={handlePostcodeChange}
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicTaxNumber">
            <Form.Label>Tax Number</Form.Label>
            <Form.Control
              type="text"
              placeholder={professionalData.tfn}
              disabled
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicABN">
            <Form.Label>ABN</Form.Label>
            <Form.Control
              type="text"
              placeholder={professionalData.abn}
              disabled
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Service Type</Form.Label>
            <Form.Control
              type="text"
              placeholder={professionalData.service_type_id}
              disabled
            />
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
    </div>
  );
}

export default ProfessionalAccount;
