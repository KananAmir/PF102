const Product = require("../models/productModel")

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json({
            message: "Success",
            data: products
        })
    } catch (error) {
        res.status(500).json({
            message: "Error",
            error: error
        })
    }
}

const getProductById = async (req, res) => {
    const { id } = req.params
    try {
        const product = await Product.findById(id)

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            })
        }

        res.status(200).json({
            message: "Success",
            data: product
        })
    } catch (error) {
        res.status(500).json({
            message: "Error",
            error: error
        })
    }
}

const deleteProduct = async (req, res) => {
    const { id } = req.params
    try {
        const deletedProduct = await Product.findByIdAndDelete(id)

        if (!deletedProduct) {
            return res.status(404).json({
                message: "Product not found"
            })
        }

        const updatedProducts = await Product.find()

        res.status(200).json({
            message: "Successfully Deleted!",
            deletedProduct,
            updatedProducts
        })

    } catch (error) {
        res.status(500).json({
            message: "Error",
            error: error
        })
    }
}

const postProduct = async (req, res) => {
    try {
        const newProduct = new Product({ ...req.body })

        await newProduct.save()
        console.log(newProduct);

        res.status(201).json({
            message: "Product Created",
            data: newProduct
        })

    } catch (error) {
        res.status(500).json({
            message: "Error",
            error: error
        })
    }
}

const editProduct = async (req, res) => {
    const {id} =req.params
    // const { title, price, description, category, image } = req.body

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, {...req.body})

        console.log(updatedProduct);

        if (!updatedProduct) {
           return res.status(404).json({
                message: "Product not found"
            })
        }

        res.status(200).json({
            message: "Product Updated",
            data: updatedProduct
        })
        
    } catch (error) {
        res.status(500).json({
            message: "Error",
            error: error
        })
    }
}


module.exports = {
    getAllProducts,
    getProductById,
    deleteProduct,
    postProduct,
    editProduct
}