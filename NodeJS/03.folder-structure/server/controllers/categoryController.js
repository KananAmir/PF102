const Category = require("../models/categoryModel")
const Product = require("../models/productModel")

const getAllCategories = async (req, res) => {
 
    try {

        const categories = await Category.find({})
        res.status(200).json({
            message: "Success",
            data: categories,
       
        })
    } catch (error) {
        res.status(500).json({
            message: "Error",
            error: error
        })
    }
}

const getCategoryById = async (req, res) => {
    const { id } = req.params
    try {
        const category = await Category.findById(id)

        if (!category) {
            return res.status(404).json({
                message: "Category not found"
            })
        }

        res.status(200).json({
            message: "Success",
            data: category
        })
    } catch (error) {
        res.status(500).json({
            message: "Error",
            error: error
        })
    }
}

const deleteCategory = async (req, res) => {
    const { id } = req.params
    try {
        const deletedCategory = await Category.findByIdAndDelete(id)
        await Product.deleteMany({ category: {_id: id}})
        if (!deletedCategory) {
            return res.status(404).json({
                message: "Category not found"
            })
        }

        const updatedCategories = await Category.find({})

        res.status(200).json({
            message: "Successfully Deleted!",
            deletedCategory,
            updatedCategories
        })

    } catch (error) {
        res.status(500).json({
            message: "Error",
            error: error
        })
    }
}

const postCategory = async (req, res) => {
    try {
        const newCategory = new Category({ ...req.body })

        await newCategory.save()
        console.log(newCategory);

        res.status(201).json({
            message: "Category Created",
            data: newCategory
        })

    } catch (error) {
        res.status(500).json({
            message: "Error",
            error: error
        })
    }
}

const editCategory = async (req, res) => {
    const { id } = req.params
    // const { title, price, description, category, image } = req.body

    try {
        const updatedCategory = await Product.findByIdAndUpdate(id, { ...req.body })


        if (!updatedCategory) {
            return res.status(404).json({
                message: "Category not found"
            })
        }

        res.status(200).json({
            message: "Category Updated",
            data: updatedCategory
        })

    } catch (error) {
        res.status(500).json({
            message: "Error",
            error: error
        })
    }
}


module.exports = {
   getAllCategories,
   getCategoryById,
   deleteCategory,
   postCategory,
   editCategory
}