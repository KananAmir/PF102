import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

const Home = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <div style={{backgroundColor: theme === "light" ? "#fff" : "#000"}}>
            <h1 style={{color: theme === "light" ? "#000" : "#fff"}} >Home Page</h1>
        </div>
    )
}

export default Home