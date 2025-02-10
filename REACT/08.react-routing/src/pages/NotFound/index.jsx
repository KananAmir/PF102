import { useNavigate } from "react-router-dom"

const NotFound = () => {
    const nav = useNavigate()


    return (
        <div style={{ height: "50vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <h3>NotFound</h3>
            <button onClick={() => { nav("/") }}>Go Home</button>

        </div >
    )
}

export default NotFound