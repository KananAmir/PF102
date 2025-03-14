const express = require("express")
const { getAllProducts, getProductById, deleteProduct, postProduct, editProduct } = require("../controllers/productController")
const productValidation = require("../middlewares/productValidation")
const imageUpload = require("../middlewares/multerMiddleware")
const router = express.Router()


router.get("/", getAllProducts)
router.get("/:id", getProductById)
router.delete("/:id", deleteProduct)
router.post("/", imageUpload.single("image"), postProduct)
router.put("/:id", editProduct)


module.exports = router