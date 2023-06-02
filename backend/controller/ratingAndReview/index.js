const express = require("express");
const router = express.Router();

const newRatingAndReview = require("./NewRatingAndReview");


router.use("/", newRatingAndReview);

module.exports = router;
