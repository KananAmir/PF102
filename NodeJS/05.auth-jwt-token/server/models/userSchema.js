const mongoose = require("mongoose")

const Schema = mongoose.Schema;


const userSchema = new Schema({
    // username: { type: String, required: true, trim: true, unique: true },
    // email: { type: String, required: true, trim: true, unique: true },
    username: { type: String, required: true, trim: true},
    email: { type: String, required: true, trim: true},
    password: { type: String, required: true },
    role: {
        type: String,
        required: true,
        default: "user",
        enum: ["user", "admin"]
    }
}, {
    versionKey: false,
    timestamps: true
})


const User = mongoose.model("User", userSchema)

module.exports = User
