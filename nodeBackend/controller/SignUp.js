const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const router = express.Router();

router.post("/signuo/professional", async function (req, res) {
    const userId = req.params.userId;
    let dailyAssess = {
        breakfast: false,
        lunch: false,
        dinner: false,
        snack: false
    }
    res.status(200).json({dailyAssess})
})

module.exports = router;