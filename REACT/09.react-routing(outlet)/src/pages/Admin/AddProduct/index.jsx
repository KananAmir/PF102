import { useState } from "react"
import { addNewData } from "../../../services/api"
import { endpoints } from "../../../constants"

import toast, { Toaster } from 'react-hot-toast';


const AddProduct = () => {


    const [product, setProduct] = useState({
        title: "",
        price: 0,
        description: ""
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(product);

        const response = await addNewData(endpoints.PRODUCTS, product)

        console.log(response);

        if (response.status === 201) {
            toast.success('Successfully toasted!')
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Product Name:</label>
                <input type="text" name="name" id="name" value={product.title} onChange={(e) => {
                    setProduct({ ...product, title: e.target.value })
                }} />
                <hr />
                <label htmlFor="price">Product Price:</label>
                <input type="number" name="name" id="price" value={product.price} onChange={(e) => {
                    setProduct({ ...product, price: e.target.value })
                }} />
                <hr />
                <label htmlFor="desc">Product Description:</label>
                <input type="text" name="name" id="desc" value={product.description} onChange={(e) => {
                    setProduct({ ...product, description: e.target.value })
                }} />
                <hr />
                <input type="submit" />
            </form>

            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    )
}

export default AddProduct