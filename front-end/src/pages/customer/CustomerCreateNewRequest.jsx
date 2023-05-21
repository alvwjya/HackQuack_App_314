import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";

function CustomerCreateNewRequest() {
  const service_type = ["One", "Two", "Three", "Four", "Five"];
  const [form, setForm] = useState({
    taskTitle: "",
    taskDescription: "",
    serviceType: 0,
  });

  async function handleSubmit() {}

  function handleTaskTitleChange(event) {
    setForm({ ...form, taskTitle: event.target.value });
  }

  function handleTaskDescriptionChange(event) {
    setForm({ ...form, taskDescription: event.target.value });
  }

  function handleServiceTypeChange(event) {
    setForm({ ...form, serviceType: event.target.value });
  }

  console.log(form);

  return (
    <Container className="py-5">
      <Form>
        <h1>REQUEST NEW SERVICE</h1>

        <hr />

        <Form.Group className="mb-3" controlId="formBasicTaskTitle">
          <Form.Label>Task Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter task title"
            value={form.taskTitle}
            onChange={handleTaskTitleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTaskDescription">
          <Form.Label>Task Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter task description"
            value={form.taskDescription}
            onChange={handleTaskDescriptionChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicServiceType">
          <Form.Label>Service Type</Form.Label>
          <Form.Select
            aria-label="selectServiceType"
            value={form.serviceType}
            onChange={handleServiceTypeChange}
          >
            <option value="">Please select</option>
            {service_type.map((item, index) => {
              return <option value={index}>{item}</option>;
            })}
          </Form.Select>
        </Form.Group>

        <hr />

        <div className="d-grid gap-2">
          <Button variant="primary" size="lg">
            Make Request
          </Button>
          <Button variant="cancel" size="lg">
            Cancel
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default CustomerCreateNewRequest;
