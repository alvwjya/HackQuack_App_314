/* Front End: ProfessionalServiceBoardRequestPriceOffer */

const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();

router.post("/professional-accept-request", async function (req, res) {
  try {
    const {
      acceptance,
      cost,
      service_request_id,
      professional_id,
    } = req.body;

    const acceptRequest = await prisma.professional_service_request.create({
      data: {
        acceptance,
        cost,
        service_request_id,
        professional_id,
      },
    });
    res.json(acceptRequest);
  } catch (err) {
    throw err;
  }
});

module.exports = router;