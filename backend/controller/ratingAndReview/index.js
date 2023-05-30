const express = require("express");
const router = express.Router();

const getProfessionalRating = require("./GetProfessionalRating");
const newRatingAndReview = require("./NewRatingAndReview");

router.use("/", getProfessionalRating);
router.use("/", newRatingAndReview);

module.exports = router;
