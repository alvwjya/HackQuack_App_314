import React, { useState, useContext, useEffect } from "react";
import {
  Navbar,
  Nav,
  Image,
  Container,
  Card,
  Button,
  Form,
  Row,
  Col,
  FormGroup,
  Table,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import AuthContext from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ProfessionalServiceActiveService() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [reload, setReload] = useState(false);

  // GET ALL ACTIVE SERVICES
  const [getAllServices, setAllServices] = useState([]);
  useEffect(() => {
    const url = `/service/professional/view-all-offers/${user.userId}`;
    async function getData() {
      try {
        const res = await axios.get(url);
        if (res.status === 200) {
          setAllServices(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [reload]);

  async function handleFinishService(event) {
    const url = `/service/professional/`;
    const reqBody = {};

    const res = await axios.post(url, reqBody);

    if (res.status === 200) {
      navigate("/professional-service-board-past-service");
    } else {
      alert(JSON.stringify(res.data));
    }
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
        <h1>SERVICE BOARD</h1>

        <hr />

        <Nav
          className="justify-content-center"
          variant="tabs"
          defaultActiveKey="/professional-service-board-active-service"
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

        {getAllServices.length === 0 ? (
          <>
            <br />
            No Active Service
          </>
        ) : (
          <>
            {getAllServices.map((data) => (
              <div className="container py-3">
                <Card>
                  <Card.Header>Service ID: {data.id}</Card.Header>
                  <Card.Body>
                    <Card.Title>{data.request_title}</Card.Title>
                    <Card.Subtitle>
                      Customer Name: {data.client.first_name}{" "}
                      {data.client.last_name}
                    </Card.Subtitle>
                    <br />
                    <Card.Text>
                      Service Type: {data.service_type.service_type_name}
                    </Card.Text>
                    <Card.Text>Information: {data.description}</Card.Text>
                    <Button
                      variant="primary"
                      value={data.id}
                      onClick={handleFinishService}
                    >
                      Finish Service
                    </Button>
                  </Card.Body>

                  <Card.Footer>
                    {`Location: ${data.client.address}, ${data.client.suburb}`}
                  </Card.Footer>
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

export default ProfessionalServiceActiveService;
