const mongoose = require("mongoose")

// const {Schema} = mongoose; 
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    // raiting: RatingSchema,
}, {
    versionKey: false,
    timestamps: true
})

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product