
const validate = (req, res, next)=>{
    const { title, price, description, category, image } = req.body

    if (!title || !price || !description || !category || !image) {
        return res.status(400).json({
            message: "All fields are required"
        })
    }

    next()
}


module.exports = validate