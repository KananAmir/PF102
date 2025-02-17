import { NavLink } from "react-router-dom"
import "./index.scss"
import { Container } from "@mui/material"
const Header = () => {
    return (
        <header className="border-b">
            <Container>
            <div className="mx-auto px-4 py-4 flex items-center justify-between">
                <NavLink to={"/"} className="text-foreground hover:text-primary">
                    <h1 className="text-xl font-semibold">BookStore</h1>
                </NavLink>

                <nav>
                    <ul className="space-x-6 flex">
                        <li>
                            <NavLink to={"/books"} className="text-foreground hover:text-primary">
                                Books
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/favorites"} className="text-muted-foreground hover:text-primary">
                                Favorites
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/basket"} className="text-muted-foreground hover:text-primary">
                                Basket
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            </Container>
        </header>
    )
}

export default Header