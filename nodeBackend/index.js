const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(require("./controller/professional/ProfessionalSignUp"));
app.use(require("./controller/client/ClientSignUp"));
app.use(require("./controller/client/ClientSignUp"));

app.use(
  require("./controller/professional/ProfessionalViewActiveServiceRequests")
);
app.use(require("./controller/payment"));

app.get("/", (req, res) => {
  console.log("Welcome to Hackquack");
  res.send("Hello World!!!");
});

// This is used to show the port of the server.
app.listen(port, () => {
  console.log("Server is running on port: ", port);
});
