import React, { useContext } from "react";
import { Container, Button, Navbar, Nav, Image } from "react-bootstrap";
import AuthContext from "../../contexts/AuthContext";

function ProfessionalDashboard() {
  const { user } = useContext(AuthContext);

  console.log(user);

  return (
    <div>
      <Navbar bg="professional-tab" variant="light">
        <Container>
          <Navbar.Brand href="/professional-dashboard">
            <Image
              src="/favicon.ico"
              width="30"
              height="30"
              class="d-inline-block align-top"
              alt=""
            />{" "}
            HACKQUACK
          </Navbar.Brand>

          <Nav.Link href="/professional-service-board-request">
            Service Board
          </Nav.Link>

          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="/professional-account">
              {user.firstName} {user.lastName}
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
        <h3>Professional Account</h3>

        <hr />

        <div className="d-grid gap-2">
          <Button
            href="/professional-account"
            className="btn-professional-button"
            size="lg"
          >
            Account
          </Button>
          <Button
            href="/professional-service-board-request"
            variant="primary"
            size="lg"
          >
            Service Board
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

export default ProfessionalDashboard;
