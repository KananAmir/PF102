import axios from "axios"
import PropTypes from "prop-types"
import { BASE_URL } from "../../constants"

function DeleteProduct({ productId, setProducts }) {
    const handleDelete = async () => {
        const resp = await axios.delete(`${BASE_URL}products/${productId}`)
        console.log(resp);

        if (resp.status === 200) {
            setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId))
        }
    }

    return (
        <button onClick={handleDelete}>
            Delete
        </button>
    )
}

DeleteProduct.propTypes = {
    productId: PropTypes.number.isRequired,
    setProducts: PropTypes.func.isRequired,
}

export default DeleteProduct

