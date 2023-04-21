import React from "react";
import { Container, Button, Form, Row, Col, Image } from "react-bootstrap";

function ProfessionalSignUp() {
  return (
    <Container className="py-5">
      <Form>
        <h1>Professional Sign Up</h1>
        <p>Headline</p>

        <Form.Group className="mb-3" controlId="formBasicIndustry">
          <Form.Label>Industry</Form.Label>
          <Form.Control type="text" placeholder="Enter industry" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNameCompany">
          <Form.Label>Name of your company</Form.Label>
          <Form.Control type="text" placeholder="Enter name of your company" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLogo">
          <Row>
            <Col align = "center">
              <Image src="/favicon.ico" roundedCircle/>
            </Col>
            <Col>
              <Row>
                <Button variant="primary" className = "mt-5" size="lg">Change</Button>
                <Button variant="primary" className = "mt-5" size="lg">Remove</Button>
              </Row>
            </Col>
          </Row>
        </Form.Group>

        <div className="d-grid gap-2">
          <Button variant="primary" size="lg">Continue</Button>
          <Button variant="secondary" size="lg">Cancel</Button>
        </div>

      </Form>
    </Container>
  );
}

export default ProfessionalSignUp;
