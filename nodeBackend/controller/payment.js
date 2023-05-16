const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const router = express.Router();

router.post("/payment", async function(req, res){
    const{
        id, 
        paymentTime, 
        amount, 
        transactionID 
    } = req.body;
    const table = await prisma.payment.create({
        data:{
            id,
            paymentTime,
            amount,
            transactionID
            },
    });
            
    res.json(table);
});

function membershippayment(params) {

    

}
        
function jobPayment(Client, Professional) {
        


}
        
async function findUserName() {
 
    var today = Date();

    const getMembership = await prisma.membership.findUnique({
        where: {
             due_date:  today
        }
    })

    return getMembership;

}           

module.exports = router;