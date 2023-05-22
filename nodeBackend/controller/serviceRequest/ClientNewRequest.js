const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();

router.post("/client-new-request", async function (req, res) {
  try {
    const { id, client_id, request_title, service_type_id, description } =
      req.body;

    const clientNewRequest = await prisma.service_request.create({
      data: {
        id,
        client_id,
        request_title,
        service_type_id,
        request_time: new Date(),
        description,
      },
    });

    res.json(clientNewRequest);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
