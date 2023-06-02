const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();

// Route for submitting a rating and review
router.post("/new-rating", async (req, res) => {
  const { clientId, transactionId, rating, review } = req.body;

  try {
    const createdRating = await prisma.rating.create({
      data: {
        rating: rating,
        review: review,
        client: {
          connect: { id: parseInt(clientId) },
        },
        transaction: {
          connect: { id: parseInt(transactionId) },
        },
      },
    });
    res.status(200).json(createdRating);
  } catch (error) {
    res.status(500).json({ error: "Failed to submit rating and review." });
  }
});

module.exports = router;
