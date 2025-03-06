const express = require('express')
const mongoose = require("mongoose")
const app = express()
const port = 8000

app.use(express.json())

// const {Schema} = mongoose; 
const Schema = mongoose.Schema;

// const ProductSchema = new Schema({
//     title: String,
//     price: Number,
//     description: String,
//     category: String,
//     image: String
// })

// const RatingSchema = new Schema({
//     rate: {type: Number, required: true},
//     count: {type: Number, required: true}
// })

const ProductSchema = new Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    // raiting: RatingSchema,
})

const Product = mongoose.model("Product", ProductSchema)

//get all products
app.get('/api/products', async (req, res) => {
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
})

//get single product
app.get('/api/products/:id', async (req, res) => {
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
})

//delete product
app.delete("/api/products/:id", async (req, res) => {
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
})

//add product
app.post("/api/products", async (req, res) => {
    const { title, price, description, category, image } = req.body
    try {
        if (!title || !price || !description || !category || !image) {
            return res.status(400).json({
                message: "All fields are required"
            })
        }

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
})

//update product
app.put("/api/products/:id", async (req, res) => {
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
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}, http://localhost:${port}`)
})


mongoose.connect("mongodb+srv://amirovknn:pf102@cluster0.poq88.mongodb.net/pf102Products?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log("Connected to MongoDB");

}).catch((err) => {
    console.log(err);
})
// const PASSWORD = "pf102"
// SQL vs NoSQL

// sequalize
// mongoose