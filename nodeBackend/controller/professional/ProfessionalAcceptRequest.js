// FrontEnd: ProfessionalServiceBoardRequest => ProfessionalServiceBoardRequestPriceOffer

const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const router = express.Router();


router.post("/professional-accept-request",async function (req, res) 
{
    
}
);

module.exports = router;