const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();

router.post("/signup/professional", async function (req, res) {
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
      card_number,
      card_security_num,
      card_expiry_date,
      service_type_id,
    } = req.body;

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
        card_number,
        card_security_num,
        card_expiry_date: new Date(card_expiry_date),
        service_type: { connect: { id: service_type_id } },
      },
    });

    res.status(200).json({ signupProfessional });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
