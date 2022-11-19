require('dotenv').config();
const express = require("express");
const app = express();

// Routes
app.get("/", (req, res)=>{
    res.send("hello from express")
})

module.exports = app;