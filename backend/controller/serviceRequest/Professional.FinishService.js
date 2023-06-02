const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();

router.put("/finish-service/:serviceId", async function (req, res) {
  try {
    const serviceId = res.params.serviceId;
    const getFinishService = await prisma.transaction.update({
      where: { id: parseInt(serviceId) },
      data: {
        finish_status: 1,
        payment_time: new Date(),
      },
    });
    res.status(200).json(getFinishService)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
