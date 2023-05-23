import React, { useState, useEffect, useContext } from "react";
import { Container, Button, Form } from "react-bootstrap";
import AuthContext from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CustomerCreateNewRequest() {
  const API_ENDPOINT = process.env.REACT_APP_API_URL;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [service_type, setServiceType] = useState([]);
  const [form, setForm] = useState({
    taskTitle: "",
    taskDescription: "",
    serviceType: 0,
  });

  const url = `${API_ENDPOINT}/get-service-types`;
  useEffect(() => {
    async function getData() {
      const res = await axios.get(url);
      if (res.status === 200) {
        setServiceType(res.data);
      }
    }
    getData();
  }, [url]);

  console.log(service_type);

  async function handleSubmit() {
    const url = `${API_ENDPOINT}/client-new-request`;
    const reqBody = {
      client_id: user.userId,
      request_title: form.taskTitle,
      service_type_id: form.serviceType,
      description: form.taskDescription,
    };

    const res = await axios.post(url, reqBody);

    if (res.status === 200) {
      navigate("/customer-service-board-request");
    } else {
      alert(JSON.stringify(res.data));
    }
  }

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
              return <option value={item.id}>{item.service_type_name}</option>;
            })}
          </Form.Select>
        </Form.Group>

        <hr />

        <div className="d-grid gap-2">
          <Button variant="primary" size="lg" onClick={handleSubmit}>
            Make Request
          </Button>
          <Button href="/" variant="cancel" size="lg">
            Cancel
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default CustomerCreateNewRequest;
