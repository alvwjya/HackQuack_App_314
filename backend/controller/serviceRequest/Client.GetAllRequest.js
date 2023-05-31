const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();

router.get("/all-request/:userId", async function (req, res) {
  try {
    const userId = req.params.userId;
    const getAllRequest = await prisma.service_request.findMany({
      where: { client: { id: parseInt(userId) }, transaction: undefined },
      include: { service_type: true, client: true },
    });
    console.log(getAllRequest);
    res.status(200).json(getAllRequest);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
