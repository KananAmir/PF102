import { Link, NavLink } from "react-router-dom"
import "./index.css"
const Header = () => {
    return (
        <header>
            <nav>
                {/* <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>Contact</Link>
                    </li>
                </ul> */}
                <ul>
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"}>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/books"}>Books</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header