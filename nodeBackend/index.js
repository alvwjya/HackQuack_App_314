const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;

const app = express();

// ---Middleware---
app.use(cors());

// ---Routes---
app.get("/", function (req, res) {
  res.send("Welcome to MyFoodChoice Backend");
});

app.use(express.json());
app.use(require("./controller/professional/ProfessionalSignUp"));
app.use(require("./controller/client/ClientSignUp"));
app.use(require("./controller/GetAllServiceTypes"));
app.use(require("./controller/ClientNewRequest"));
app.use(require("./controller/manageMemberships/SubscribeClientMemberships"));
app.use(
  require("./controller/manageMemberships/SubscibeProfessionalMemberships")
);
app.use(require("./controller/manageMemberships/RenewProfessionalMemberships"));
app.use(require("./controller/manageMemberships/RenewClientMemberships"));
app.use(require("./controller/manageMemberships/CancelClientMemberships"))


// Port
app.listen(port, () => {
  console.log("Server is running on port: ", port);
});
