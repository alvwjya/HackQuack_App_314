const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const { PrismaClient } = require('@prisma/client');

app.use(express.json())
const prisma = new PrismaClient()

app.get('/', (req, res) => {
    console.log("Welcome to Hackquack");
    res.send("Hello World!!!");
})

// This is used to show the port of the server.
app.listen(port, () => {
    console.log("Server is running on port: ", port);
})