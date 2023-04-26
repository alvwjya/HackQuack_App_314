import React from "react";
import { Container, Button } from "react-bootstrap";

function ProfessionalDashboard() {
  return (
    <Container className="py-5">
      <h1>DASHBOARD</h1>
      <h2>Professional Account</h2>

      <hr />

      <div className="d-grid gap-2">
        <Button
          href="/professional-service-board-request"
          variant="primary"
          size="lg"
        >
          Service Board
        </Button>
        <Button href="/professional-account" variant="primary" size="lg">
          Account
        </Button>
      </div>

      <hr />
    </Container>
  );
}

export default ProfessionalDashboard;
