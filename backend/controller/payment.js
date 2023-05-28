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

/**
 * A function to be called every time the server goes to the next day
 * The only thing it does is get check to see if the due date for the membership payment is due
 * pushes a new entry into the payment table then sets the due date to when it is next due
*/
async function membershippayment(params) {

    let client = findUserName();
    if (client===null) {
        return;
    }

    const payment = await prisma.payment.create({
        data:{
            payment_time: Date(),
            amount: 240,
            customer_id: client.id
        }
    })

}

/**
 * is meant to be called at the end of a transaction function call and does the same as
 * mebership payment but also pushes the information for the proffesional involved as well 
 */        
async function jobPayment(clientID, proffesionalID,  transactionCost, transactionID) {

    //Grabs the correct Client
    const getClient = await prisma.client.findUnique({
        where:{
            id: clientID
        }
    })

    //Grabs the correct proffesional
    const getProffesional = await prisma.client.findUnique({
        where:{
            id: proffesionalID
        }
    })

    const getTransactiion = await prisma.client.findUnique({
        where:{
            id: transactionID
        }
    })

    //Creates and saves the payment
    //https://www.prisma.io/docs/concepts/components/prisma-schema/data-model was the website page i was using to figure out the
    //Syntax
    const payment = await prisma.payment.create({
        data:{
            payment_time: Date(),
            amount: transactionCost,
            transactionID: getTransactiion.id,
            customer_id: clientID,
            transaction: getTransactiion
        }
    })

}

/**
 * A function to find users who membership is due today
 */
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