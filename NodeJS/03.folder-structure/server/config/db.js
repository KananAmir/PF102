const mongoose = require("mongoose")
require("dotenv").config()

const DB = process.env.DB_STRING.replace("<password>", process.env.PASSWORD)

function connectDB() {
    mongoose.connect(DB).then(() => {
        console.log("Connected to MongoDB");
    
    }).catch((err) => {
        console.log(err);
    })
}


module.exports = { connectDB }