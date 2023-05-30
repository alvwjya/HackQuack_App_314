import React, { useContext, useState, useEffect } from "react";
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
import AuthContext from "../../contexts/AuthContext";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ProfessionalServiceBoardRequest() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const url = `/service/professional/view-all-offers/${user.userId}`;

  const [getActive, setGetActive] = useState([]);

  const [serviceId, setServiceId] = useState(0);

  const [form, setForm] = useState({
    cost: 0,
    acceptance: 0,
    professional_id: user.userId,
    service_request_id: 0,
  });

  const commisionFee = 5;

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(url);
        console.log(res.data);
        if (res.status === 200) {
          setGetActive(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [url]);

  async function handleSendOffer(event) {
    const url = `/service/professional/new-offer`;
    const reqBody = {
      cost: form.cost,
      acceptance: 1,
      professional_id: user.userId,
      service_request_id: serviceId,
    };
    console.log(reqBody);

    const res = await axios.post(url, reqBody);

    if (res.status === 200) {
      console.log(res.data);
      navigate("/professional-service-board-offer");
    } else {
      console.log(res.data);
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
          defaultActiveKey="/professional-service-board-request"
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

        {getActive.map((data) => {
          return (
            <div className="container py-3">
              <Card>
                <Card.Header>Service ID: {data.id}</Card.Header>
                <Card.Body>
                  <Card.Title>{data.request_title}</Card.Title>
                  <Card.Subtitle>Customer Name: {}</Card.Subtitle>
                  <Card.Text>Information: {data.description}</Card.Text>
                  <LinkContainer to="/professional-service-board-request-detail">
                    <Button className="btn-info">Learn More</Button>
                  </LinkContainer>{" "}
                  <LinkContainer to="">
                    <Button className="btn-warning">Decline Request</Button>
                  </LinkContainer>{" "}
                  <Button className="btn-primary" value={data.id}>
                    Offer Service
                  </Button>
                </Card.Body>
                <Card.Footer>Location: {}</Card.Footer>
                <Card.Footer>Time: {data.request_time}</Card.Footer>
              </Card>
            </div>
          );
        })}

        <hr />
      </Container>
    </div>
  );
}

export default ProfessionalServiceBoardRequest;
