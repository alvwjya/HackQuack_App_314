const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();

// Route for submitting a rating and review
router.post('/rating', async (req, res) => {
    
    const { 
        clientId, 
        transactionId, 
        rating, 
        review 
    } = req.body;

    try {
        const createdRating = await prisma.rating.create({
        data: {
            rating: rating,
            review: review,
            client: {
                connect: { id: parseInt(clientId) }
            },
            transaction: {
                connect: { id: parseInt(transactionId) }
            }
        },
        });
        console.log(`Rating and review submitted by client ${clientId}. ID: ${createdRating.id}`);
        res.status(200).json({ message: 'Rating and review submitted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to submit rating and review.' });
    } 
    });

    module.exports = router;