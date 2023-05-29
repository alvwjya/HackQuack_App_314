const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();

router.post("/client", async function (req, res) {
  try {
    const {
      first_name,
      last_name,
      email,
      phone,
      password,
      suburb,
      state,
      postcode,
    } = req.body;

    const getEmail = await prisma.client.findMany({
      where: {
        email,
      },
    });
    if(getEmail.length !== 0 ){
      return res.status(409).json({"message": "Email "})
    }

    const signupClient = await prisma.client.create({
      data: {
        first_name,
        last_name,
        email,
        phone,
        password,
        suburb,
        state,
        postcode,
      },
    });
    res.status(200).json(signupClient);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
