const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;

const app = express();

// ---Middleware---
app.use(cors());
app.use(express.json({limit: '10mb'}));


// ---Routes---
app.get("/", function (req, res) {
  res.send("Welcome to MyFoodChoice Backend");
});

app.use(express.json());
app.use(require("./controller/professional/ProfessionalSignUp"));
app.use(require("./controller/client/ClientSignUp"));
app.use(require("./controller/client/ClientSignUp"));

// Port
app.listen(port, () => {
  console.log("Server is running on port: ", port);
});
