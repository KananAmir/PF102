const express = require('express')
const cors = require("cors")
const { v4: uuidv4 } = require('uuid');
const products = require("./db")

const app = express()

const port = 8080
const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    methods: "GET, POST, PUT, DELETE, PATCH",// default
    allowedHeaders: "Content-Type, Authorization", //
    exposedHeaders: "Authorization",
    credentials: true,     
    }
    
    limit = 5
app.use(cors(corsOptions))
app.use(express.json())
// app.use(cors())

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.get('/message', (req, res) => {
//   res.send({
//     message: 'Hello Express!'
//   })
// })
// app.get('/message', (req, res) => {
//   res.send(`<h2>PF102</h2>`)
// })

// app.get('/', (req, res) => {
//   console.log(__dirname);
//   res.sendFile(__dirname + '/views/index.html')
// })


// app.get('/about', (req, res) => {
//   console.log(__dirname);
//   res.sendFile(__dirname + '/views/about.html')
// })


// app.use((req, res)=>{
//     res.sendFile(__dirname + '/views/404.html')
// })

// middleware
// app.get("/", middleware ,()=>{
//     console.log("Home Page");
// })

// global variables: __dirname, __filename, process, module, exports


// products.length = 0

//get all data
app.get("/api/products", (req, res) => {
    // res.json(products)
    const {sort} = req.query

    if(sort !== undefined){
        switch (sort) {
            case "asc":
                const ascByPrice = [...products].sort((a,b)=>a.price - b.price)
                return res.status(200).json({
                    data: ascByPrice
                })
      
            case "desc":
                const descByPrice = [...products].sort((a,b)=>b.price - a.price)
                return res.status(200).json({
                    data: descByPrice
                })
      
            default:
                return res.status(400).json({
                    message: "wrong query!",
                    error: "Invalid query parameter!"
                })
        }
    
    }

    if (products.length === 0) {
        return res.status(404).json({
            data: [],
            total: 0,
            error: "No products found"
        })
    }
    res.status(200).json({
        data: products,
        total: products.length,
        error: null
    })
})

//pagination
app.get("/api/products/page", (req, res) => {
    const {pageNumber, limit} = req.query
    const startIndex = (pageNumber - 1) * limit
    const endIndex = pageNumber * limit

    const pageProducts = products.slice(startIndex, endIndex)
    res.json({
        data: pageProducts,
        total: products.length,
        pageSize: Math.ceil(products.length / limit),
        error: null
    })
})

//search
app.get("/api/products/search", (req, res) => {
   
    // const searchQuery = req.query
    // console.log(searchQuery);

    const {title} = req.query
    
    const filteredProducts = products.filter((product)=> product.title.toLowerCase().includes(title.toLowerCase().trim()))
    
    res.status(200).json({
        data: filteredProducts,
        total: filteredProducts.length,
        error: null,
        message: filteredProducts.length > 0 ? "success" : "no item found for ur query!"
    })
})

// get one data by id
app.get("/api/products/:id", (req, res) => {
    // console.log(req.params.id); 
    const { id } = req.params
    const product = products.find((product) => product.id === id)

    if (!product) {
        return res.status(404).json({
            data: {},
            message: "Product not found",
        })
    }

    res.status(200).json({
            data: product,
            message: "success",
        })

})

app.delete("/api/products/:id", (req, res) => { 
    const {id} = req.params
    const idx = products.findIndex((product) => product.id === id)
    const deleteProduct = products.splice(idx, 1)

    if(idx === -1){
        return res.status(404).json({
            data: {},
            message: "Product not found",
        })
    }
    res.status(200).json({
        message: "Product deleted successfully",
        data: deleteProduct
    })

})
app.post("/api/products", (req, res) => { 
    const {title, description, price, category, image} = req.body

    if (!title || !description || !price || !category || !image) {
        return res.status(400).json({
            message: "Please provide all required fields",
        })
    }

    // const newProducts = {
    //     id: uuidv4(),
    //     title,
    //     description,
    //     price,
    //     category,
    //     image,
    // }
    const newProducts = {
        ...req.body,
        id: uuidv4(),
    }

    products.push(newProducts)

    res.status(201).json({
        message: "Product created successfully",
        data: newProducts
    })
    
    
})

app.put("/api/products/:id", (req, res) => { 
    const {id} = req.params
    const {title, price, description, category, image} = req.body

    const idx = products.findIndex((q)=>q.id === id)

    console.log(idx);

    const updatedProduct = {
        id,
        title,
        price,
        description,
        category,
        image
    }

    if(idx === -1){
        return res.status(404).json({
            message: "Product not found!",
            data: {}
        })
    }

    products[idx] = updatedProduct
    res.status(200).json({
        message: "Product updated successfuly!",
        data: updatedProduct
    })
    
})

app.patch("/api/products/:id", (req, res) => { 
    const  { id } = req.params
    const {title, description, price, category, image} = req.body

    const idx = products.findIndex((q)=>q.id === id)

    if(idx === -1){
        return res.status(404).json({
            message: "Product not found!",
            data: {}
        })
    }

    if(title !== undefined) products[idx].title = title
    if(description !== undefined) products[idx].description = description
    if(price !== undefined) products[idx].price = price
    if(category !== undefined) products[idx].category = category
    if(image !== undefined) products[idx].image = image

    res.status(200).json({
        message: "Product updated successfully!",
        data: products[idx]
    })
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}, http://localhost:${port}/api`)
})