const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();

router.post("/signup/client", async function (req, res) {
  res.status(200);
});

module.exports = router;
