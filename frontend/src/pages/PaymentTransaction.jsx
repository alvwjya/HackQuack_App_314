import React from "react";
import { Container, Form, Row, Col, Card } from "react-bootstrap";

function PaymentTransaction() {
  const data = [1, 2, 3, 4, 5];
  return (
    <Container className="py-5">
      <h1>PAYMENT TRANSACTION</h1>

      <hr />

      <table class="table table-hover">
        <thead>
          <tr>
            <th>Payment Time</th>
            <th>Professional</th>
            <th>Customer</th>
            <th>Amount</th>
            <th>Description</th>
          </tr>
        </thead>
        {data.map((data) => (
          <tbody>
            <tr>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
            </tr>
          </tbody>
        ))}
      </table>

      <hr />
    </Container>
  );
}

export default PaymentTransaction;
