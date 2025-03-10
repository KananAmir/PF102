const express = require('express')
const cors = require("cors")
const dotenv = require("dotenv")
const { connectDB } = require('./config/db')
const productRouter = require("./routes/productRoute")
const app = express()

dotenv.config()

app.use(cors())
app.use(express.json())

app.use("/api/products", productRouter)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}, http://localhost:${PORT}`)
})

connectDB()
