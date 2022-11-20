const express = require("express");
const { home, createUser, getUsers, editUsers } = require('../controllers/userControllers');
const router = express.Router();

router.get("/", home)
router.post("/createuser", createUser)
router.get("/getusers", getUsers)
router.put("/editusers/:id", editUsers)

module.exports = router;