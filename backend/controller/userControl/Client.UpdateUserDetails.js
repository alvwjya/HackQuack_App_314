const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();

router.put("/client/:userId", async function (req, res) {
  try {
    const { clientId } = req.params;
    const { firstName, lastName, email, phone } = req.body;

    const updatedClient = await prisma.client.update({
      where: { id: parseInt(clientId) },
      data: {
        firstName,
        lastName,
        email,
        phone,
      },
    });

    res.json(updatedClient);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
