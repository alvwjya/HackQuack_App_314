/* Front End: ProfessionalServiceBoardRequestPriceOffer */

const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();

router.post("/professional-accept-request", async function (req, res) {
  const {
    id,
    acceptance,
    cost,
    service_request_id,
    professional_id,
    service_request,
    professional,
    transaction,
  } = req.body;

  const table = await prisma.professional_service_request.create({
    data: {
      id,
      acceptance,
      cost,
      service_request_id,
      professional_id,
      service_request,
      professional,
      transaction,
    },
  });
  res.json(table);
});

module.exports = router;
