import { NavLink } from "react-router-dom"
import "./index.scss"
const AdminHeader = () => {
    return (
        <header className="border-b">
           <div className="container mx-auto px-4 py-4 flex items-center justify-between">
           <h1 className="text-xl font-semibold">BookStore</h1>
                    <nav className="space-x-6">
                    <ul className="space-x-6 flex">
                            <li>
                                <NavLink to={"/admin"} className="text-foreground hover:text-primary" end>Dashbord</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/admin/books"} className="text-foreground hover:text-primary" end>Books</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/admin/books/new"} className="text-foreground hover:text-primary" end>Add Book</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
        </header>
    )
     
}

export default AdminHeader