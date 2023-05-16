// Front End: ProfessionalServiceBoardRequest

const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const router = express.Router();


router.post("/professional-decline-request",async function (req, res) {

    }
);

module.exports = router;