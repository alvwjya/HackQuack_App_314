import React, { useEffect, useState, useContext } from "react";
import {
  Navbar,
  Nav,
  Image,
  Container,
  Card,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import AuthContext from "../../contexts/AuthContext";
import { LinkContainer } from "react-router-bootstrap";
import axios from "axios";

function CustomerServiceBoardRequest() {
  const { user } = useContext(AuthContext);
  const API_ENDPOINT = process.env.REACT_APP_API_URL;
  const url = `${API_ENDPOINT}/view-all-active-request/client/${user.userId}`;

  const [getActive, setGetActive] = useState([]);
  const [getUserDetails, setUserDetails] = useState({});

  async function handleCancelRequestOnClick(event) {}

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(url);
        if (res.status === 200) {
          setUserDetails(res.data.getUserLocation);
          setGetActive(res.data.getAllActive);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [url]);

  // console.log(getResult);

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
        <h1>SERVICE BOARD</h1>

        <hr />

        <Nav
          className="justify-content-center"
          variant="tabs"
          defaultActiveKey="/customer-service-board-request"
        >
          <LinkContainer to="/customer-service-board-request">
            <Nav.Item>
              <Nav.Link href="/customer-service-board-request">
                Request(s)
              </Nav.Link>
            </Nav.Item>
          </LinkContainer>

          <LinkContainer to="/customer-service-board-active-service">
            <Nav.Item>
              <Nav.Link href="/customer-service-board-active-service">
                Active Service(s)
              </Nav.Link>
            </Nav.Item>
          </LinkContainer>

          <LinkContainer to="/customer-service-board-past-service">
            <Nav.Item>
              <Nav.Link href="/customer-service-board-past-service">
                Past Service(s)
              </Nav.Link>
            </Nav.Item>
          </LinkContainer>
        </Nav>

        {getActive.map((data) => (
          <div class="container py-3">
            <Card>
              <Card.Header>{data.request_title}</Card.Header>
              <Card.Body>
                <Card.Title>Issue Type: {data.service_type_id}</Card.Title>
                <Card.Text>Information: {data.description}</Card.Text>
                <LinkContainer to="/customer-service-board-request-offer">
                  <Button variant="primary">Offer(s)</Button>
                </LinkContainer>{" "}
                <LinkContainer to="">
                  <Button className="btn-warning">Cancel Request</Button>
                </LinkContainer>
              </Card.Body>

              <Card.Footer>Location: {getUserDetails.suburb}</Card.Footer>
              <Card.Footer>Time: {new Date(data.request_time).toLocaleDateString()}</Card.Footer>
            </Card>
          </div>
        ))}

        <hr />
      </Container>
    </div>
  );
}

export default CustomerServiceBoardRequest;
