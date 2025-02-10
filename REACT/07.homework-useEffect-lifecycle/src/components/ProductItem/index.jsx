import PropTypes from "prop-types"
import DeleteProduct from "../DeleteProduct"
import "./index.css"
function ProductItem({ product, setProducts }) {
    return (
        // <li style={{ padding: "1rem", backgroundColor: product.isDiscounted ? "teal" : "gray" }}>
        <li className={product.isDiscounted ? "teal" : "gray"}>
            <span>
                {product.name} - ${product.price.toFixed(2)}
            </span>
            <DeleteProduct productId={product.id} setProducts={setProducts} />
        </li>
    )
}

ProductItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        isDiscounted: PropTypes.bool.isRequired,
    }).isRequired,
    setProducts: PropTypes.func.isRequired,
}

export default ProductItem

