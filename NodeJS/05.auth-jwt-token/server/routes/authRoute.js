const express = require("express")
const { register, login, verifyAccount } = require("../controllers/authController")

const router = express.Router()


router.post("/register", register)
router.post("/login", login)
router.get("/verify", verifyAccount)


module.exports = router