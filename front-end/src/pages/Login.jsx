import React from "react";
import {
  Alert,
  Container,
  ToggleButton,
  ToggleButtonGroup,
  Button,
  Form,
  CardGroup,
  Card,
  Image,
} from "react-bootstrap";

function Login() {
  return (
    <div>
      <Container className="py-5">
        <CardGroup className="shadow-lg mx-auto" style={{ width: 1000 }}>
          <Card>
            <Image className="h-100" src="/hackquack-welcome.gif"></Image>
          </Card>
          <Card>
            <Card.Body>
              <h1
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Login
              </h1>

              <div className="py-2 d-grid gap-2">
                <ToggleButtonGroup
                  type="radio"
                  name="options"
                  defaultValue={"customer"}
                >
                  <ToggleButton
                    id="customer"
                    value={"customer"}
                    className="btn-customer-button"
                  >
                    Customer
                  </ToggleButton>
                  <ToggleButton
                    id="professional"
                    value={2}
                    className="btn-professional-button"
                  >
                    Professional
                  </ToggleButton>
                </ToggleButtonGroup>
              </div>

              <hr />

              <div className="py-2">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                    />
                  </Form.Group>
                </Form>
              </div>

              <hr />

              <div className="d-grid gap-2">
                <Button
                  className="btn-customer-button"
                  href="/customer-dashboard"
                >
                  Login Customer
                </Button>
                <Button
                  className="btn-professional-button"
                  href="/professional-dashboard"
                >
                  Login Professional
                </Button>
                <Button>Login</Button>
              </div>

              <div className="py-2 d-flex justify-content-center">
                <text>New Duckie?&nbsp;</text>
                <Alert.Link href="#">Sign Up</Alert.Link>
              </div>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
}

export default Login;
