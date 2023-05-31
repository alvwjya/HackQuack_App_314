const express = require("express");
const router = express.Router();

const getClientDetails = require("./Client.GetUserDetails");
const getProfessionalDetails = require("./Professional.GetUserDetails");

router.use("/", getClientDetails);
router.use("/", getProfessionalDetails);

module.exports = router;
