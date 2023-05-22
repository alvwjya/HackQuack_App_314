import React, { useContext } from "react";
import { Nav, Navbar, Container, Button, Image, Card } from "react-bootstrap";
import AuthContext from "../../contexts/AuthContext";

function CustomerDashboard() {
  const { user } = useContext(AuthContext);

  console.log(user);

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
              {user.firstName} {user.lastName}{" "}
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
        <h1>
          Welcome, {user.firstName} {user.lastName}!
        </h1>

        <h3>Customer Account</h3>

        <hr />

        <div className="d-grid gap-2">
          <Button
            href="/customer-account"
            className="btn-customer-button"
            variant="primary"
            size="lg"
          >
            Account
          </Button>

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

          <Button href="/payment-transaction" className="btn-primary" size="lg">
            Payment Transaction
          </Button>
        </div>

        <hr />

        <div className="d-grid gap-2">
          <Button href="/" variant="warning" size="lg">
            Log Out
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default CustomerDashboard;
