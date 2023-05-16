const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const router = express.Router();

router.get('/test', (req, res) => {
    res.send("Hello");
});

module.exports = router;