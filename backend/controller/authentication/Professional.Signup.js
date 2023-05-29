const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.post("/professional", async function (req, res) {
  try {
    const {
      first_name,
      last_name,
      abn,
      password,
      suburb,
      email,
      state,
      tfn,
      postcode,
      service_type_id,
    } = req.body;

    const getEMail = await prisma.professional.findMany({
      where: {
        email,
      },
    });

    if (getEMail.length !== 0) {
      return res.status(409).json({ message: "Email already exist" });
    }

    const signupProfessional = await prisma.professional.create({
      data: {
        first_name,
        last_name,
        email,
        abn,
        tfn,
        password,
        suburb,
        state,
        postcode,
        service_type: { connect: { id: parseInt(service_type_id) } },
      },
    });
    res.status(200).json({ signupProfessional });
  } catch (err) {
    throw (err)
    res.status(500).json(err);
  }
});

module.exports = router;
