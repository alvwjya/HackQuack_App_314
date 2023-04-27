import React from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  Form,
  Container,
  Button,
} from "react-bootstrap";

function CustomerDashboard() {
  return (
    <div>
      <Navbar className="p-3" bg="primary">
        <Navbar.Brand href="/customer-dashboard">HACKQUACK</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Nav.Link href="/customer-service-board-request">
          Service Board
        </Nav.Link>
      </Navbar>

      <Container className="py-5">
        <h1>Welcome, John Doe!</h1>
        <h2>Customer Account</h2>

        <hr />

        <div className="d-grid gap-2">
          <Button
            href="/customer-create-new-request"
            variant="primary"
            size="lg"
          >
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
    </div>
  );
}

export default CustomerDashboard;
