import React from "react";
import { Container, Button } from "react-bootstrap";

function CustomerDashboard() {
  return (
    <Container className="py-5">
      <h1>DASHBOARD</h1>
      <h2>Customer Account</h2>

      <hr />

      <div className="d-grid gap-2">
        <Button href="/customer-create-new-request" variant="primary" size="lg">
          Create New Request
        </Button>
        <Button
          href="/customer-service-board-request"
          variant="primary"
          size="lg"
        >
          Service Board
        </Button>
        <Button href="/customer-account" variant="primary" size="lg">
          Account
        </Button>
      </div>

      <hr />
    </Container>
  );
}

export default CustomerDashboard;
