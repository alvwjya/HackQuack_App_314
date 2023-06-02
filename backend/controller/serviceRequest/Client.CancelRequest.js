const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();

router.delete("/cancel-request/:offerId", async function (req, res) {
  try {
    const offerId = req.params.offerId;
    const cancelOffer = await prisma.service_request.delete({
      where: { id: parseInt(offerId) },
    });
    res.status(200).json(cancelOffer);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
