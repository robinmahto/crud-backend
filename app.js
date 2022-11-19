require('dotenv').config();
const express = require("express");
const app = express();
const router = require("./routes/userRoutes")

// Routes
app.use("/", router)

module.exports = app;