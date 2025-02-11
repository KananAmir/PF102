import { useEffect, useState } from "react";
import { BASE_URL, endpoints } from "../../../constants";
import axios from "axios";
import { Link } from "react-router-dom"
const Products = () => {
    const [products, setProducts] = useState([]);
    const [serachQuery, setSearchQuery] = useState("");
    const [sort, setSort] = useState("default");


    const getProducts = async () => {
        try {
            const response = await axios(`${BASE_URL}${endpoints.PRODUCTS}`);
            setProducts(response.data)
        } catch (error) {
            console.log(error);

        }
    }

    const handleSearch = (e) => {
        const searchValue = e.target.value.trim().toLowerCase()
        setSearchQuery(searchValue)
    }


    const filteredProducts = products.filter((p) => p.title.toLowerCase().includes(serachQuery)).sort((a, b) => {
        switch (sort) {
            case "asc":
                return a.price - b.price
            case "desc":
                return b.price - a.price
            default:
                return 0;
        }
    })

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div id="product">
            <div className="container">
                <div className="products">
                    <h1>Products</h1>

                    <div style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
                        <input type="search" name="" id="" onChange={handleSearch} />
                        <select onChange={(e) => {
                            setSort(e.target.value)
                        }}>
                            <option selected disabled>select sort order</option>
                            <option value="asc">Asc by Price</option>
                            <option value="desc">Desc by Price</option>
                            <option value="default">Desc by Price</option>
                        </select>
                    </div>
                    <section className="product-cards" style={{ display: "flex", flexWrap: "wrap", justifyContent: " space-between" }}>
                        {products.length > 0 && filteredProducts.map((product) => (
                            <div key={product.id} className="product-card" style={{ width: "22%" }}>
                                <Link to={`${product.id}`}><h3>{product.title}</h3></Link>
                                <p>Price: {product.price}</p>
                                <img width={100} src={product.image} alt={product.title} />
                            </div>
                        ))}
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Products