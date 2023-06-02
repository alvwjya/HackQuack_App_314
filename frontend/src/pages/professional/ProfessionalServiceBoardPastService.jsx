import React, { useContext, useEffect, useState } from "react";
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

function ProfessionalServicePastService() {
  const { user } = useContext(AuthContext);

  const [getPastRequest, setGetPastRequest] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get(
          `/service/client/get-past-service/${user.userId}`
        );
        setGetPastRequest(data);
      } catch (err) {
        alert(JSON.stringify(err));
      }
    }
    getData();
  }, []);

  console.log(getPastRequest);

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
        <h1>SERVICE BOARD</h1>

        <hr />

        <Nav
          className="justify-content-center"
          variant="tabs"
          defaultActiveKey="/professional-service-board-past-service"
        >
          <LinkContainer to="/professional-service-board-request">
            <Nav.Item>
              <Nav.Link href="/professional-service-board-request">
                Request(s)
              </Nav.Link>
            </Nav.Item>
          </LinkContainer>

          <LinkContainer to="/professional-service-board-offer">
            <Nav.Item>
              <Nav.Link href="/professional-service-board-offer">
                Offer(s)
              </Nav.Link>
            </Nav.Item>
          </LinkContainer>

          <LinkContainer to="/professional-service-board-active-service">
            <Nav.Item>
              <Nav.Link href="/professional-service-board-active-service">
                Active Service(s)
              </Nav.Link>
            </Nav.Item>
          </LinkContainer>

          <LinkContainer to="/professional-service-board-past-service">
            <Nav.Item>
              <Nav.Link href="/professional-service-board-past-service">
                Past Service(s)
              </Nav.Link>
            </Nav.Item>
          </LinkContainer>
        </Nav>

        {getPastRequest.length === 0 ? (
          <>
            <br />
            No Past Service Available
          </>
        ) : (
          <>
            {getPastRequest.map((data) => (
              <div className="container py-3">
                <Card>
                  <Card.Header>
                    Type of Issue: {data.service_type.service_type_name}
                  </Card.Header>

                  <Card.Body>
                    <Card.Title>
                      {" "}
                      Service Title: {data.request_title}
                    </Card.Title>
                    <Card.Subtitle>Professional Name</Card.Subtitle>
                    <Card.Text>Information: {data.description}</Card.Text>
                    <LinkContainer to="/receipt">
                      <Button variant="primary">Receipt</Button>
                    </LinkContainer>
                    <LinkContainer to="/receipt">
                      <Button className="btn-primary">Receipt</Button>
                    </LinkContainer>
                  </Card.Body>

                  <Card.Footer>
                    {`Location: ${data.client.address}, ${data.client.suburb}`}
                  </Card.Footer>
                  <Card.Footer>
                    Time: {new Date(data.request_time).toLocaleString()}
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

export default ProfessionalServicePastService;
