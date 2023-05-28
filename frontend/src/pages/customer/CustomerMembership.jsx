import React, { useEffect, useState, useContext } from "react";
import {
  Navbar,
  Nav,
  Image,
  Container,
  Button,
  Form,
  Card,
} from "react-bootstrap";
import AuthContext from "../../contexts/AuthContext";
import { LinkContainer } from "react-router-bootstrap";
import axios from "axios";

const API_ENDPOINT = process.env.REACT_APP_API_URL;

function CustomerMembership() {
  const membershipAnuallyCost = 1000;

  const { user } = useContext(AuthContext);
  const API_ENDPOINT = process.env.REACT_APP_API_URL;
  // const url = `${API_ENDPOINT}/subscribe-memberships/client${user.userId}`;

  const [getActive, setGetActive] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const getMembershipsUrl = `${API_ENDPOINT}/get-client-memberships/${user.userId}`;

  useEffect(() => {
    async function getData() {
      const res = await axios.get(getMembershipsUrl);
      if (res.status === 200) {
        setUserDetails(res.data);
        console.log(res.data)
      }
    }
    getData();
  }, [getMembershipsUrl]);

  console.log(userDetails);

  async function handleSubscribe(event) {
    const url = `${API_ENDPOINT}/subscribe-memberships/client`;
    const body = { client_id: user.userId, cost: membershipAnuallyCost };
    const res = await axios.post(url, body);
    if(res.status === 200){
      console.log("Signed Up")
    }
  }

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
                class="d-inline-block align-top"
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
                  class="d-inline-block align-top"
                  alt=""
                />
              </Nav.Link>
            </LinkContainer>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="py-5">
        <h1>CUSTOMER MEMBERSHIP</h1>

        <hr />

        <Form>
          <Form.Group className="mb-3" controlId="formBasicMembershipStartDate">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="text"
              placeholder="DD/MM/YYYY"
              disabled
              value={
                Object.keys(userDetails).length === 0
                  ? "Invalid"
                  : userDetails.start_date
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicMembershipEndDate">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="text"
              placeholder="DD/MM/YYYY"
              disabled
              value={
                Object.keys(userDetails).length === 0
                  ? "Invalid"
                  : userDetails.due_date
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicMembershipEndDate">
            <Form.Label>Status</Form.Label>
            <Form.Control
              type="text"
              placeholder="Inactive"
              disabled
              value={
                new Date(userDetails.due_date) < new Date()
                  ? "Inactive"
                  : userDetails.start_date
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPrice">
            <Card className="mx-auto" style={{ width: 350 }}>
              <Card.Header>
                <h4>Customer Membership</h4>
                <p>billed anually</p>
                <h2>{membershipAnuallyCost} AUD/year</h2>
              </Card.Header>
              <Card.Body>
                <p>&#9989; Unlimited Assistance Callouts</p>
              </Card.Body>
            </Card>
          </Form.Group>

          <Button href="/add-payment-method" variant="primary" size="lg">
            Edit Payment Method
          </Button>
        </Form>

        <hr />

        <div className="d-grid gap-2">
          <LinkContainer to="">
            <Button
              className="btn-customer-button"
              size="lg"
              onClick={handleSubscribe}
            >
              Sign Up
            </Button>
          </LinkContainer>

          <Button className="btn-cancel" size="lg">
            Cancel Membership
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default CustomerMembership;
