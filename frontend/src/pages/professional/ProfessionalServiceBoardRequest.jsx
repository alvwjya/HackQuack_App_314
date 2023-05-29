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
  const url = `/professional-view-active-service-requests/${user.userId}`;

  const navigate = useNavigate();

  const [getActive, setGetActive] = useState([]);
  const [getUserDetails, setUserDetails] = useState({});
  const [serviceId, setServiceId] = useState(0);

  const [form, setForm] = useState({
    cost: 0,
    acceptance: 0,
    professional_id: user.userId,
    service_request_id: 0,
  });

  const [requests, setRequests] = useState([]);
  const commisionFee = 5;

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(url);
        console.log(res.data);
        if (res.status === 200) {
          // setUserDetails(res.data.getUserLocation);
          setGetActive(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [url]);

 function handleOfferRequest(event){
  console.log(event.target.id)
  setServiceId(event.target.id)
 }

  async function handleAcceptOfferOnClick() {
    const url = `/professional-accept-request`;
    const reqBody = {
      cost: form.cost,
      acceptance: 1,
      professional_id: user.userId,
      service_request_id: serviceId,
    };
    console.log(reqBody)

    const res = await axios.post(url, reqBody);

    if (res.status === 200) {
      console.log(res.data)
      navigate("/professional-service-board-offer");
    } else {
      console.log(res.data)
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
                class="d-inline-block align-top"
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
            <Row>
              <Col>
                <div class="container py-3">
                  <Card>
                    <Card.Header>{data.request_title}</Card.Header>
                    <Card.Body>
                      <Card.Title>
                        Issue Type: {data.service_type_id}
                      </Card.Title>
                      <Card.Subtitle>Customer Name</Card.Subtitle>
                      <Card.Text>Information: {data.description}</Card.Text>
                      <LinkContainer to="/professional-service-board-request-detail">
                        <Button className="btn-info">Learn More</Button>
                      </LinkContainer>{" "}
                      <LinkContainer to="">
                        <Button className="btn-warning">Decline Request</Button>
                      </LinkContainer>{" "}
                      <LinkContainer to="">
                        <Button
                          id={data.id}
                          className="btn-primary"
                          onClick={handleOfferRequest}
                        >
                          Offer Service
                        </Button>
                      </LinkContainer>
                    </Card.Body>
                    <Card.Footer>Location</Card.Footer>
                    <Card.Footer>Time</Card.Footer>
                  </Card>
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
          );
        })}

        <hr />
      </Container>
    </div>
  );
}

export default ProfessionalServiceBoardRequest;
