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
  Form,
  FormGroup,
  Table,
} from "react-bootstrap";
import AuthContext from "../../contexts/AuthContext";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CustomerServiceBoardRequest() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // GET ALL CURRENT REQUEST(S) FOR A SERVICE OF THE USER
  const url = `/service/client/all-request/${user.userId}`;
  const [allRequest, setAllRequest] = useState([]);
  const [offerForm, setOfferForm] = useState(false);
  const [serviceId, setServiceId] = useState(0);
  const [getAllOffer, setGetAllOffer] = useState([]);
  const [reload, setReload] = useState(false);

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
  }, [url, reload]);

  async function handleViewAllOffers(event) {
    setServiceId(event.currentTarget.value);
    if (parseInt(serviceId) === parseInt(event.currentTarget.value)) {
      setOfferForm(!offerForm);
    } else {
      try {
        const { data } = await axios.get(
          `/service/client/view-offers/${serviceId}`
        );
        setGetAllOffer(data);
        setOfferForm(true);
      } catch (err) {
        alert(JSON.stringify(err));
      }
    }
  }

  async function handleCancelRequestOnClick() {
    try {
      const res = await axios.delete(
        `/service/client/cancel-request/${serviceId}`
      );
      console.log(res.data);
      if (res.status === 200) {
        alert("Successfully cancel request");
        setReload(!reload);
        setOfferForm(false);
      }
    } catch (err) {
      alert(JSON.stringify(err));
    }
  }

  async function handleAcceptOfferOnClick(event) {
    const url = `/service/professional/new-offer`;
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

        <Container>
          <Row>
            <Col>
              {allRequest.length === 0 ? (
                <p>No Request</p>
              ) : (
                <>
                  {allRequest.map((data) => (
                    <div className="container py-3">
                      <Card>
                        <Card.Header>Service ID: {data.id}</Card.Header>
                        <Card.Body>
                          <Card.Title>{data.request_title}</Card.Title>
                          <Card.Text>
                            Service Type: {data.service_type.service_type_name}
                          </Card.Text>
                          <Card.Text>Information: {data.description}</Card.Text>
                          <LinkContainer to="">
                            <Button
                              className="btn-warning"
                              value={data.id}
                              onClick={handleCancelRequestOnClick}
                            >
                              Cancel Request
                            </Button>
                          </LinkContainer>{" "}
                          <Button
                            variant="primary"
                            value={data.id}
                            onClick={handleViewAllOffers}
                          >
                            Offer(s)
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
            </Col>
            {offerForm && (
              <Col>
                {getAllOffer.length === 0 ? (
                  <p>No Professional Offer</p>
                ) : (
                  <div className="container py-3">
                    <strong>OFFER(S)</strong>
                    <p>Service Request ID: {}</p>
                    <Card>
                      <Card.Header>Professional Name</Card.Header>
                      <Card.Body>
                        <Card.Text>Information: {}</Card.Text>
                        <Card.Text>Price: {}</Card.Text>
                        <LinkContainer to="/customer-service-board-request-offer-detail">
                          <Button className="btn-info">Learn more</Button>
                        </LinkContainer>{" "}
                        <LinkContainer to="">
                          <Button className="btn-warning">Decline</Button>
                        </LinkContainer>{" "}
                        <LinkContainer to="">
                          <Button className="btn-primary">Accept</Button>
                        </LinkContainer>
                      </Card.Body>
                      <Card.Footer>Location: {}</Card.Footer>
                      <Card.Footer>Ratings: {}</Card.Footer>
                      <Card.Footer>Reviews: {}</Card.Footer>
                    </Card>
                  </div>
                )}
              </Col>
            )}
          </Row>
        </Container>

        <hr />
      </Container>
    </div>
  );
}

export default CustomerServiceBoardRequest;
