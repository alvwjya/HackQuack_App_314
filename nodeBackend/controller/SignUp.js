const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();

router.post("/signup/professional", async function (req, res) {
  const {
    first_name,
    last_name,
    ABN,
    TFN,
    password,
    suburb,
    state,
    postcode,
    card_number,
    card_security_num,
    card_expiry_date,
    service_type_id,
  } = req.params.body;
  const signupPeofessional = await prisma.professional.create({
    data: {
      first_name,
      last_name,
      ABN,
      TFN,
      password,
      suburb,
      state,
      postcode,
      card_number,
      card_security_num,
      card_expiry_date,
      //   service_type: { connect: { service_type_id: service_type_id } },
      service_type: { connect: service_type_id },
    },
  });

  res.status(200).json({ dailyAssess });
});

module.exports = router;
