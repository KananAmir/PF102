const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    title: { type: String, required: true, unique: true, trim: true},
    productCount: { type: Number, required: true },
}, {
    versionKey: false,
    timestamps: true
})

const Category = mongoose.model("Category", CategorySchema)

module.exports = Category