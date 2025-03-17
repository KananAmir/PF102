const express = require("express")
const { getAllProducts, getProductById, deleteProduct, postProduct, editProduct } = require("../controllers/productController")
const productValidation = require("../middlewares/productValidation")
const imageUpload = require("../middlewares/multerMiddleware")
const validateProduct = require("../middlewares/productValidation")
const router = express.Router()


router.get("/", getAllProducts)
router.get("/:id", getProductById)
router.delete("/:id", deleteProduct)
router.post("/", imageUpload.single("image"), validateProduct, postProduct)
router.put("/:id", editProduct)


module.exports = router