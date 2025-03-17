const express = require("express")
const { getAllCategories, getCategoryById, deleteCategory, postCategory, editCategory } = require("../controllers/categoryController")
const verify = require("../middlewares/authMiddleware")
const router = express.Router()


router.get("/", verify(["user", "admin"]), getAllCategories)
router.get("/:id", verify(["user", "admin"]), getCategoryById)
// router.delete("/:id", verify, deleteCategory)
// router.post("/", verify,postCategory)
// router.put("/:id",verify, editCategory)
router.delete("/:id", verify(["admin"]), deleteCategory)
router.post("/", verify(["admin"]), postCategory)
router.put("/:id", verify(["admin"]), editCategory)


module.exports = router

// 67d7d783e86a935794da4800