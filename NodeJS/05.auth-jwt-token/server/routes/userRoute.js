const express = require("express")
const { getAllUsers, deleteUser, editUser, getUserById } = require("../controllers/userController")

const router = express.Router()


router.get("/", getAllUsers)
router.get("/:id", getUserById)
router.delete("/:id", deleteUser)
router.put("/:id", editUser)


module.exports = router