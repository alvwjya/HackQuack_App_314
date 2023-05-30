const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();

router.put("/professional/:userId", async function (req, res) {
  const { professionalId } = req.params;
  const {
    firstName,
    lastName,
    email,
    abn,
    address,
    suburb,
    tfn,
    state,
    postcode,
    cardNumber,
    cardSecurityNum,
    cardExpiryDate,
  } = req.body;

  try {
    const updatedProfessional = await prisma.professional.update({
      where: { id: parseInt(professionalId) },
      data: {
        firstName,
        lastName,
        email,
        abn,
        address,
        suburb,
        tfn,
        state,
        postcode,
        cardNumber,
        cardSecurityNum,
        cardExpiryDate: new Date(cardExpiryDate),
      },
    });

    res.json(updatedProfessional);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
