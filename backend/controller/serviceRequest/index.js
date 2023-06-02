const express = require("express");
const router = express.Router();

const clientNewRequest = require("./Client.NewRequest");
const professionalNewOffer = require("./Professional.NewOffer");
const clientGetAllProfessionalOffer = require("./Client.GetAllProfessionalOffer");
const professionalGetClientRequest = require("./Professional.GetClientRequest");

router.use("/client", clientNewRequest);
router.use("/professional", professionalNewOffer);
router.use("/client", clientGetAllProfessionalOffer);
router.use("/professional", professionalGetClientRequest);

module.exports = router;
