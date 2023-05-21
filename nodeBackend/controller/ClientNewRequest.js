const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const router = express.Router();

router.post("/client-new-request", async function(req, res){
    const{
        id,
        client_id,
        professional_request_id,
        description
    } = req.body;
    const table = await prisma.customer_new_request.create({
        data:{
            id,
            client_id,
            professional_request_id,
            description
            },
    });    
    res.json(table);
});

module.exports = router;