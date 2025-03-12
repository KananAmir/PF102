const express = require('express')
const cors = require("cors")
const dotenv = require("dotenv")
const { connectDB } = require('./config/db')
const productRouter = require("./routes/productRoute")
const categoryRouter = require("./routes/categoryRoute")

const path = require('path')
const multer  = require('multer')
const multerErrorHandling = require('./middlewares/multerErrorHandling')


const app = express()

dotenv.config()

app.use(cors())
app.use(express.json())


//static file

// app.use(express.static('uploads'))
// app.use('/static', express.static('uploads'))

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

//intro
// const upload = multer({ dest: 'uploads/' })

// app.post('/imageUpload', upload.single('image'), function (req, res, next) {
//     // req.file is the `avatar` file
//     // req.body will hold the text fields, if there were any
//     console.log(req.file)
//   })

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads/')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//     //   cb(null, file.fieldname + '-' + uniqueSuffix)
//       cb(null, uniqueSuffix + "-" + file.originalname)
//     }
//   })

//   const upload = multer({ 
//     storage: storage, 
//     limits: { fileSize: 1024 * 1024 * 5 }, // 5MB
//     fileFilter: function (req, file, cb) {
//         if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/gif') {
//           cb(null, true)
//         } else {
//           cb(new Error('Only .jpeg | .png | .jpg | .gif  files are allowed'), false)
//         }
//       } 
// })


//   app.post('/imageUpload', upload.single('image'), function (req, res, next) {
//     // req.file is the `avatar` file
//     // req.body will hold the text fields, if there were any
//     console.log(req.file)
//   })

app.use("/api/categories", categoryRouter)

app.use(multerErrorHandling)
app.use("/api/products", productRouter)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}, http://localhost:${PORT}`)
})

connectDB()
