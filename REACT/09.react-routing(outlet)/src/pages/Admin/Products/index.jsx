import { useEffect, useState } from "react"
import { endpoints } from "../../../constants"
import { FaTrashCan } from "react-icons/fa6";
import { getData, deleteDataById } from "../../../services/api"
import toast, { Toaster } from "react-hot-toast";
const Products = () => {

    const [products, setProducts] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const handleDelete = async (id) => {
        try {
            const response = await deleteDataById(endpoints.PRODUCTS, id)

            if (response.status === 200) {
                setProducts(products.filter(product => product.id !== id))
                toast.success('Successfully deleted!')

            }
        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        getData(endpoints.PRODUCTS).then((data) => {
            setProducts(data)
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            setIsLoading(false)
        })
    }, [])


    if (isLoading) {
        return (<div style={{ fontSize: "3rem" }}>
            <p>LOADING...</p>
        </div>)
    }


    return (
        <div>
            <h1>Products</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Photo</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        products && products.map((product) => {
                            return (<tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td><img width={100} src={product.image} alt={product.title} /></td>
                                <td>
                                    <div>
                                        <button onClick={() => { handleDelete(product.id) }} >
                                            <FaTrashCan style={{ color: "red" }} />
                                        </button>
                                    </div>
                                </td>
                            </tr>)
                        })}
                </tbody>
            </table>

            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    )
}

export default Products