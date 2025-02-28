import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import type { RootState } from "../../redux/app/store"
import './index.scss'

const Header = () => {
  const favs = useSelector((state: RootState) => state.favorites.items)

  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
            >
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/add"}
              className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
            >
              Add Category
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/favorites"}
              className={({ isActive }) => `nav-item favorites ${isActive ? "active" : ""}`}
            >
              Favorites
              <sup className="badge">{favs.length}</sup>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/basket"}
              className={({ isActive }) => `nav-item basket ${isActive ? "active" : ""}`}
            >
              Basket
              <sup className="badge">{0}</sup>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
