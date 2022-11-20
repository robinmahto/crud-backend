const express = require("express");
const { home, createUser, getUsers, editUsers, deleteUsers } = require('../controllers/userControllers');
const router = express.Router();

router.get("/", home)
router.post("/createuser", createUser)
router.get("/getusers", getUsers)
router.put("/editusers/:id", editUsers)
router.delete("/deleteusers/:id", deleteUsers)

module.exports = router;