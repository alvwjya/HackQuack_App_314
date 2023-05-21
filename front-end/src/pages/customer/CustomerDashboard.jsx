import React from "react";
import { Nav, Navbar, Container, Button, Image, Card } from "react-bootstrap";

function CustomerDashboard() {
  return (
    <div>
      <Navbar bg="customer-tab" variant="light">
        <Container>
          <Navbar.Brand href="/customer-dashboard">
            <Image
              src="/favicon.ico"
              width="30"
              height="30"
              class="d-inline-block align-top"
              alt=""
            />{" "}
            HACKQUACK
          </Navbar.Brand>

          <Nav.Link href="/customer-service-board-request">
            Service Board
          </Nav.Link>

          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="/customer-account">
              John Doe{" "}
              <Image
                src="/newlogo.ico"
                width="30"
                height="30"
                class="d-inline-block align-top"
                alt=""
              />
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="py-5">
        <h1>Welcome, John Doe!</h1>
        <h3>Customer Account</h3>

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
          <Button
            href="/customer-account"
            className="btn-customer-button"
            variant="primary"
            size="lg"
          >
            Account
          </Button>
        </div>

        <hr />
      </Container>
    </div>
  );
}

export default CustomerDashboard;
