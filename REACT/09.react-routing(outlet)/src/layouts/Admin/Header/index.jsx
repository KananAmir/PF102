import { NavLink } from "react-router-dom"
import "./index.scss"
const AdminHeader = () => {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to={"/admin"} end>Dashbord</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/admin/products"} end>Products</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/admin/products/new"} end>Add Product</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default AdminHeader