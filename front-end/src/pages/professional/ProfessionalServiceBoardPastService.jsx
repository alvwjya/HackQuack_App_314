import React from "react";
import { Nav, Container, Card, Button, Row, Col } from "react-bootstrap";

function ProfessionalServicePastService() {
  const data = [1, 2, 3, 4, 5];
  return (
    <Container className="py-5">
      <h1>SERVICE BOARD</h1>

      <hr />

      <Nav
        className="justify-content-center"
        variant="tabs"
        defaultActiveKey="/professional-service-board-past-service"
      >
        <Nav.Item>
          <Nav.Link href="/professional-service-board-request">
            Request(s)
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/professional-service-board-offer">Offer(s)</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/professional-service-board-active-service">
            Active Service(s)
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/professional-service-board-past-service">
            Past Service(s)
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <hr />
    </Container>
  );
}

export default ProfessionalServicePastService;
