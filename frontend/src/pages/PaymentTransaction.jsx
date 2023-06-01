import React, { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import AuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const data = [1, 2, 3, 4, 5];

function PaymentTransaction() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // GET USER PAYMENT TRANSACTION
  const url = `//${user.userId}`;
  const [dataStatement, setDataStatement] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(url);
        console.log(res.data);
        if (res.status === 200) {
          setDataStatement(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [url]);

  // GET PROFESIONAL DATA

  // GET CUSTOMER DATA

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
