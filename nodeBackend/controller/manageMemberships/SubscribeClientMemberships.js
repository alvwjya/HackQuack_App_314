const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();

router.post("/subscribe-memberships/client", async function (req, res) {
  try {
    const { client_id, cost } = req.body;

    const date = new Date();

    const subs = await prisma.membership.create({
      data: {
        cost: parseFloat(cost),
        client_id: { connect: { id: parseInt(client_id) } },
        start_date: date,
        due_date: new Date(date.setFullYear(date.getFullYear() + 1)),
      },
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
