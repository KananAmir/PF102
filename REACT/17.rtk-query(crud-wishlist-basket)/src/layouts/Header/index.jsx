import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const favs = useSelector((state)=>state.favorites.items)
  
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav>
        <ul className="flex space-x-6 justify-center items-center">
          <li>
            <NavLink
              to={"/"}
              className="text-lg font-semibold hover:text-yellow-500 transition-all"
            >
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/add"}
              className="text-lg font-semibold hover:text-yellow-500 transition-all"
            >
              Add Category
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/favorites"}
              className="flex items-center text-lg font-semibold hover:text-yellow-500 transition-all"
            >
              Favorites
              <sup className="ml-1 text-red-500">{favs.length}</sup>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/basket"}
              className="flex items-center text-lg font-semibold hover:text-yellow-500 transition-all"
            >
              Basket
              <sup className="ml-1 text-red-500">
                {0}
              </sup>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
