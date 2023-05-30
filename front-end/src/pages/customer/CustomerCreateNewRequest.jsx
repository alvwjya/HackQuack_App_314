import React from "react";
import { Container, Button, Form } from "react-bootstrap";

function CustomerCreateNewRequest() {
  return (
    <Container className="py-5">
      <Form>
        <h1>REQUEST NEW SERVICE</h1>

        <hr />

        <Form.Group className="mb-3" controlId="formBasicTaskTitle">
          <Form.Label>Task Title</Form.Label>
          <Form.Control type="text" placeholder="Enter task title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTaskDescription">
          <Form.Label>Task Description</Form.Label>
          <Form.Control type="text" placeholder="Enter task description" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicServiceType">
          <Form.Label>Service Type</Form.Label>
          <Form.Select aria-label="selectServiceType">
            <option>Please select</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>

        <hr />

        <div className="d-grid gap-2">
          <Button variant="primary" size="lg">
            Make Request
          </Button>
          <Button variant="secondary" size="lg">
            Cancel
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default CustomerCreateNewRequest;
