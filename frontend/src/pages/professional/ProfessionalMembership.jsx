import React, { useContext } from "react";
import { Container, Button, Form, Navbar, Nav, Image } from "react-bootstrap";
import AuthContext from "../../contexts/AuthContext";
import { LinkContainer } from "react-router-bootstrap";
import axios from "axios";

const professionalMembershipAnuallyCost = 1000;

function ProfessionalMembership() {
  const { user } = useContext(AuthContext);

  function handleSubscribe(event) {
    const url = `/subscribe-memberships/professional`;
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
        <h1>PROFESSIONAL MEMBERSHIP</h1>

        <hr />

        <Form>
          <Form.Group className="mb-3" controlId="formBasicMembershipStartDate">
            <Form.Label>Start Date</Form.Label>
            <Form.Control type="text" placeholder="DD/MM/YYYY" disabled />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicMembershipEndDate">
            <Form.Label>End Date</Form.Label>
            <Form.Control type="text" placeholder="DD/MM/YYYY" disabled />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" placeholder="$ amount" disable />
          </Form.Group>

          <LinkContainer to="/add-payment-method">
            <Button className="primary" size="lg">
              Edit Payment Method
            </Button>
          </LinkContainer>
        </Form>

        <hr />

        <div className="d-grid gap-2">
          <LinkContainer to="">
            <Button
              className="btn-professional-button"
              onClick={handleSubscribe}
              size="lg"
            >
              Sign Up
            </Button>
          </LinkContainer>

          <LinkContainer to="">
            <Button className="btn-cancel" size="lg">
              Cancel Membership
            </Button>
          </LinkContainer>
        </div>
      </Container>
    </div>
  );
}

export default ProfessionalMembership;
