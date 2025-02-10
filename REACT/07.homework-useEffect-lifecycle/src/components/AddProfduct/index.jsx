"use client"

import { useState } from "react"
import PropTypes from "prop-types"
import axios from "axios"
import { BASE_URL } from "../../constants"
import { nanoid } from "nanoid"

function AddProduct({ products, setProducts }) {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [isDiscounted, setIsDiscounted] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (name && price) {
            const newProduct = {
                id: nanoid(8),
                name,
                price: Number.parseFloat(price),
                isDiscounted,
            }
            const resp = await axios.post(`${BASE_URL}products`, newProduct)

            if (resp.status === 201) {
                setProducts([...products, newProduct])
                setName("")
                setPrice("")
                setIsDiscounted(false)
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Product name"
                required
            />
            <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
                required
            />
            <label>
                <input
                    type="checkbox"
                    checked={isDiscounted}
                    onChange={(e) => setIsDiscounted(e.target.checked)}
                />
                Discounted
            </label>
            <button type="submit">
                Add Product
            </button>
        </form>
    )
}

AddProduct.propTypes = {
    products: PropTypes.array.isRequired,
    setProducts: PropTypes.func.isRequired,
}

export default AddProduct

