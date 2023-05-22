const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();

router.put("/renew-memberships/client", async function (req, res) {
  const { client_id } = req.body;

  try {
    const getCurrentDueDate = await prisma.membership.findFirst({
      where: { client_id: parseInt(client_id) },
    });

    const updateDueDate = new Date(
      getCurrentDueDate.due_date.setFullYear(
        getCurrentDueDate.due_date.getFullYear() + 1
      )
    );

    const renewCLientMembership = await prisma.membership.update({
      where: {
        id: getCurrentDueDate.id,
      },
      data: {
        due_date: updateDueDate,
      },
    });
    res.status(200).json(renewCLientMembership);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
