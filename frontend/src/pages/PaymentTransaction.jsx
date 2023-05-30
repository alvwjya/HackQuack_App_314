import React from "react";
import { Container, Form, Row, Col, Card } from "react-bootstrap";

function PaymentTransaction() {
  const data = [1, 2, 3, 4, 5];
  return (
    <Container className="py-5">
      <h1>PAYMENT TRANSACTION</h1>

      <hr />
      {data.map((data) => (
        <div className="container py-3">
          <Card>
            <Card.Body>
              <h3>Receipt</h3>

              <hr />

              <Form>
                <Form.Group className="mb-3" controlId="formBasicCardNumber">
                  <Form.Label>Total</Form.Label>
                  <Form.Control type="text" placeholder="AUD" disable />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="formBasicCardNumberInfo"
                >
                  <Row>
                    <Col>
                      <Form.Label>Date</Form.Label>
                    </Col>
                    <Col>
                      <Form.Label>Time</Form.Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="DD/MM/YYYY"
                        disable
                      />
                    </Col>
                    <Col>
                      <Form.Control type="text" placeholder="HH : MM" disable />
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </div>
      ))}
      <hr />
    </Container>
  );
}

export default PaymentTransaction;
