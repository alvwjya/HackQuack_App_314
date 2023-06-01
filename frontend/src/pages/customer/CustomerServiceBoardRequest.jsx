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
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CustomerServiceBoardRequest() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const url = `/service/client/all-request/${user.userId}`;

  const [allRequest, setAllRequest] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(url);
        console.log(res.data);
        if (res.status === 200) {
          setAllRequest(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [url]);

  const [allOffer, setAllOffer] = useState([]);

  async function handleAcceptOfferOnClick(event) {}

  async function handleCancelRequestOnClick(event) {}

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

        {allRequest.length === 0 ? (
          <p>No Request</p>
        ) : (
          <>
            {allRequest.map((data) => (
              <div className="container py-3">
                <Card>
                  <Card.Header>
                    <strong>{data.request_title}</strong>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      Service Type: {data.service_type.service_type_name}
                    </Card.Text>
                    <Card.Text>Information: {data.description}</Card.Text>
                    <Button variant="primary">Offer(s)</Button>{" "}
                    <LinkContainer to="">
                      <Button className="btn-warning">Cancel Request</Button>
                    </LinkContainer>
                  </Card.Body>

                  <Card.Footer>Location: {data.client.suburb}</Card.Footer>
                  <Card.Footer>
                    Time:{" "}
                    {`${new Date(
                      data.request_time
                    ).toLocaleDateString()} ${new Date(
                      data.request_time
                    ).toLocaleTimeString()}`}
                  </Card.Footer>
                </Card>
              </div>
            ))}
          </>
        )}

        <hr />
      </Container>
    </div>
  );
}

export default CustomerServiceBoardRequest;
