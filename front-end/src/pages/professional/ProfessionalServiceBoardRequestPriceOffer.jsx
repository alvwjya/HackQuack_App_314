import React from "react";
import {
  Nav,
  Container,
  Form,
  Button,
  Card,
  Row,
  Col,
  FormGroup,
  Table,
} from "react-bootstrap";

function ProfessionalPriceOffer() {
  return (
    <Container className="py-5">
      <h1>SERVICE BOARD</h1>

      <hr />

      <Nav
        className="justify-content-center"
        variant="tabs"
        defaultActiveKey="/professional-service-board-request"
      >
        <Nav.Item>
          <Nav.Link href="/professional-service-board-request">
            Request(s)
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/professional-service-board-offer">Offer(s)</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/professional-service-board-active-service">
            Active Service(s)
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/professional-service-board-past-service">
            Past Service(s)
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Row>
        <Col>
          <div class="container py-3">
            <Card>
              <Card.Header>Service Title</Card.Header>
              <Card.Body>
                <Card.Title>Type of Issue</Card.Title>
                <Card.Subtitle>Customer Name</Card.Subtitle>
                <Card.Text>Information</Card.Text>
                <Button
                  href="/professional-service-board-request-detail"
                  variant="primary"
                >
                  Learn More
                </Button>{" "}
                <Button variant="primary">Decline Request</Button>{" "}
                <Button
                  href="/professional-service-board-request-price-offer"
                  variant="primary"
                >
                  Offer Service
                </Button>
              </Card.Body>
              <Card.Footer>Location</Card.Footer>
              <Card.Footer>Time</Card.Footer>
            </Card>
          </div>
        </Col>
        <Col>
          <Form>
            <FormGroup className="py-3" controlId="formBasicPriceOffer">
              <Form.Label>PRICE AND DETAIL</Form.Label>
              <Table>
                <tr>
                  <td>
                    <Form.Label>Service Price</Form.Label>
                  </td>
                  <td>
                    <Form.Control type="text" placeholder="Enter price" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Label>Comission Fee</Form.Label>
                  </td>
                  <td>
                    <Form.Control type="text" placeholder="Enter price" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Label>Tax</Form.Label>
                  </td>
                  <td>
                    <Form.Control type="text" placeholder="Enter price" />
                  </td>
                </tr>
              </Table>

              <div className="d-grid gap-2">
                <Button variant="primary" size="lg">
                  Send Offer
                </Button>
              </div>
            </FormGroup>
          </Form>{" "}
        </Col>
      </Row>

      <hr />
    </Container>
  );
}

export default ProfessionalPriceOffer;
