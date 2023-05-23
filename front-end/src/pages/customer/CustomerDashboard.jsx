import React, { useContext } from "react";
import { Nav, Navbar, Container, Button, Image } from "react-bootstrap";
import AuthContext from "../../contexts/AuthContext";
import { LinkContainer } from "react-router-bootstrap";

function CustomerDashboard() {
  const { user } = useContext(AuthContext);

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

          <Nav.Link>Service Board</Nav.Link>

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
          <LinkContainer to="/customer-account">
            <Button className="btn-customer-button" variant="primary" size="lg">
              Account
            </Button>
          </LinkContainer>

          <LinkContainer to="/customer-create-new-request">
            <Button className="btn-primary" size="lg">
              Create New Request
            </Button>
          </LinkContainer>

          <LinkContainer to="/customer-service-board-request">
            <Button className="btn-primary" size="lg">
              Service Board
            </Button>
          </LinkContainer>

          <LinkContainer to="/payment-transaction">
            <Button className="btn-primary" size="lg">
              Payment Transaction
            </Button>
          </LinkContainer>
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
