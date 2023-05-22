const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();

router.get(
  "/view-all-active-request/client/:userId",
  async function (req, res) {
    try {
      const {userId} = req.params;
      console.log(userId)
      const getAllActive = await prisma.service_request.findMany({
        where: {
          client_id: parseInt(userId),
          professional_service_request: {
            none: {
              transaction: {
                some: {
                  professional_id: {
                    not: null,
                  },
                },
              },
            },
          },
        },
      });
      res.status(200).json(getAllActive);
    } catch (err) {
      throw err;
      res.status(500).json(err);
    }
  }
);

module.exports = router;
