/* Front End: ProfessionalServiceBoardRequest */

const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();

router.post("/professional-decline-request", async function (req, res) {
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
