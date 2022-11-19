const express = require("express");
const { home, createUser, getUsers } = require('../controllers/userControllers');
const router = express.Router();

router.get("/", home)
router.post("/createuser", createUser)
router.get("/getusers", getUsers)

module.exports = router;