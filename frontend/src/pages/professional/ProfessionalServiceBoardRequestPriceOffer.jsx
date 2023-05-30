import React, { useContext, useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Image,
  Container,
  Form,
  Button,
  Card,
  Row,
  Col,
  FormGroup,
  Table,
} from "react-bootstrap";
import AuthContext from "../../contexts/AuthContext";
import { LinkContainer } from "react-router-bootstrap";
import axios from "axios";

function ProfessionalPriceOffer() {
  const { user } = useContext(AuthContext);

  const [form, setForm] = useState({
    cost: 0,
    acceptance: 0,
    professional_id: user.userId,
    service_request_id: 0,
  });

  const [requests, setRequests] = useState([]);
  const commisionFee = 5;

  useEffect(() => {
    async function getRequests() {
      const url = `/professional-view-active-service-requests/${user.userId}`;
      const res = await axios.get(url);
      if (res.status === 200) {
        setRequests(res.data);
      }
    }
    getRequests();
  });

  async function handleAcceptOfferOnClick(event) {
    const url = `/professional-accept-request`;
    // console.log(form);
    const postData = await axios.post(url, {
      cost: parseInt(form.cost) + parseInt(commisionFee),
      acceptance: 1,
      professional_id: user.userId,
      // service_request_id:,
    });
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

        <Row>
          <Col>
            <div className="container py-3">
              {requests.map((item) => {
                return (
                  <Card>
                    <Card.Header>Service Title</Card.Header>
                    <Card.Body>
                      <Card.Title>Type of Issue</Card.Title>
                      <Card.Subtitle>Customer Name</Card.Subtitle>
                      <Card.Text>Information</Card.Text>
                      <LinkContainer to="/professional-service-board-request-detail">
                        <Button className="btn-info">Learn More</Button>
                      </LinkContainer>{" "}
                      <LinkContainer to="">
                        <Button className="btn-warning">Decline Request</Button>
                      </LinkContainer>{" "}
                      <LinkContainer to="">
                        <Button className="btn-primary">Offer Service</Button>
                      </LinkContainer>
                    </Card.Body>
                    <Card.Footer>Location</Card.Footer>
                    <Card.Footer>Time</Card.Footer>
                  </Card>
                );
              })}
            </div>
          </Col>
          <Col>
            <Form>
              <FormGroup className="py-3" controlId="formPriceOffer">
                <Form.Label>PRICE AND DETAIL</Form.Label>
                <Table>
                  <tr>
                    <td>
                      <Form.Label>Service Price</Form.Label>
                    </td>
                    <td>
                      <Form.Control
                        type="text"
                        placeholder="Enter price"
                        value={form.cost}
                        onChange={(e) =>
                          setForm({ ...form, cost: e.target.value })
                        }
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Form.Label>Comission Fee</Form.Label>
                    </td>
                    <td>
                      <Form.Control
                        value={parseInt(commisionFee)}
                        type="text"
                        placeholder=""
                        disabled
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Form.Label>Total Price</Form.Label>
                    </td>
                    <td>
                      <Form.Control
                        type="text"
                        placeholder=""
                        disabled
                        value={parseInt(form.cost) + parseInt(commisionFee)}
                      />
                    </td>
                  </tr>
                </Table>

                <div className="d-grid gap-2">
                  <Button
                    className="btn-primary"
                    size="lg"
                    onClick={handleAcceptOfferOnClick}
                  >
                    Send Offer
                  </Button>
                </div>
              </FormGroup>
            </Form>{" "}
          </Col>
        </Row>

        <hr />
      </Container>
    </div>
  );
}

export default ProfessionalPriceOffer;
