const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();

router.delete("/cancel-memberships/client", async function (req, res) {
  try {
    const { client_id } = req.body;
    const deleteClientMemberships = await prisma.membership.deleteMany({
      where: {
        client: { id: parseInt(client_id) },
      },
    });
    res.status(200).json(deleteClientMemberships);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
