const express = require("express")
const { getAllProducts, getProductById, deleteProduct, postProduct, editProduct } = require("../controllers/productController")
const productValidation = require("../middlewares/productValidation")
const router = express.Router()


router.get("/", getAllProducts)
router.get("/:id", getProductById)
router.delete("/:id", deleteProduct)
router.post("/", productValidation ,postProduct)
router.put("/:id", editProduct)


module.exports = router