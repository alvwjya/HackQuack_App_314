const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();

router.delete("/cancel-memberships/professional", async function (req, res) {
  try {
    const { professional_id } = req.body;
    const deleteClientMemberships = await prisma.membership.deleteMany({
      where: {
        professional: { id: parseInt(professional_id) },
      },
    });
    res.status(200).json(deleteClientMemberships);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
