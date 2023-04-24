import React from "react";
import { Container, Button } from "react-bootstrap";

function CustomerDashboard() {
  return (
    <Container className="py-5">
      <h1>DASHBOARD</h1>
      <h2>Customer Account</h2>

      <hr />

      <div className="d-grid gap-2">
        <Button variant="primary" size="lg">
          Service Board
        </Button>
        <Button variant="primary" size="lg">
          Account
        </Button>
      </div>

      <hr />
    </Container>
  );
}

export default CustomerDashboard;
