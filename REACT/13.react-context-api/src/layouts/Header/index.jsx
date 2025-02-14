import { NavLink } from "react-router-dom"
import "./index.css"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import { FavoritesContext } from "../../context/FavoritesContext"
const Header = () => {

    const {theme, toggleTheme} = useContext(ThemeContext)
    const {favs} = useContext(FavoritesContext)
 
    
    console.log(theme);
    
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
                    <li>
                        <NavLink to={"/favorites"}>Favorites <sup style={{color: "red"}}>{favs.length}</sup></NavLink>
                    </li>
                    <li>
                        <button onClick={()=>{
                            toggleTheme()
                        }}>{theme === "light" ? "dark" : "light"}</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header