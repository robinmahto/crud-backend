require('dotenv').config();
const express = require("express");
const app = express();
const router = require("./routes/userRoutes");
const connectDB = require("./config/db");

// database connection
connectDB()

// Routes
app.use("/", router)

module.exports = app;