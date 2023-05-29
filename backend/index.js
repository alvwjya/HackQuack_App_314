const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const authentication = require("./controller/authentication/index");

const app = express();

app.use(cors());

// ---Routes---
app.get("/", function (req, res) {
  res.send("Welcome to HackQuackApp Backend");
});

app.use("/", authentication);

// Port
app.listen(port, () => {
  console.log("Server is running on port: ", port);
});
