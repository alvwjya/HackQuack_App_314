const express = require('express');
// import { PrismaClient } from '@prisma/client'
const PrismaClient = require("prisma-client")

const prisma = new PrismaClient()
const app = express()

app.get('/', (req, res) => {
    console.log("Welcome to Redgram");
    res.send("Hello World!!!");
})

app.get('/about', customMiddleware, (req, res) => {
    console.log("about page");
    res.send("About");
})

// This is used to show the port of the server.
app.listen(port, () => {
    console.log("Server is running on port: ", port);
})