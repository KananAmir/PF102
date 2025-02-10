import PropTypes from "prop-types"
import ProductItem from "../ProductItem"

function ProductList({ products, setProducts }) {
    return (
        <ul>
            {products.map((product) => (
                <ProductItem key={product.id} product={product} setProducts={setProducts} />
            ))}
        </ul>
    )
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    setProducts: PropTypes.func.isRequired,
}

export default ProductList

