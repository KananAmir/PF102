import { useState } from "react"
import PropTypes from "prop-types"
import ProductList from "../ProductList"
import AddProduct from "../AddProfduct"
import SearchProduct from "../SearchProduct"

function Product({ products, setProducts }) {
    const [searchQuery, setSearchQuery] = useState("")

    const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase().trim()))


    // const handleSearch = (e) => {
    //     setSearchQuery(e.target.value)
    // }
    return (
        <div>
            <h3>Add Product</h3>
            <AddProduct products={products} setProducts={setProducts} />
            <SearchProduct searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            {/* <input type="search" onChange={handleSearch} /> */}
            <h3>Product List</h3>
            <ProductList products={filteredProducts} setProducts={setProducts} />
        </div>
    )
}

Product.propTypes = {
    products: PropTypes.array.isRequired,
    setProducts: PropTypes.func.isRequired,
}

export default Product

