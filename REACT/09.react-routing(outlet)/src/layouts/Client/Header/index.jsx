import { NavLink } from "react-router-dom"
import "./index.scss"
const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to={"/"}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/about"}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/products"}>Products</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header