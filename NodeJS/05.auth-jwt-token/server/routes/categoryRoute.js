const express = require("express")
const { getAllCategories, getCategoryById, deleteCategory, postCategory, editCategory } = require("../controllers/categoryController")

const router = express.Router()


router.get("/", getAllCategories)
router.get("/:id", getCategoryById)
router.delete("/:id", deleteCategory)
router.post("/", postCategory)
router.put("/:id", editCategory)


module.exports = router