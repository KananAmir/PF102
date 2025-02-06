import { useEffect, useState } from "react"

const Card = () => {
    const [count, setCount] = useState(0)
    const [inputValue, setInputValue] = useState("")

    // console.log("card component rerendered");

    // useEffect(() => {
    //     console.log("card mounted");

    //     //cleanup function
    //     return () => {
    //         console.log("card unmounted");
    //     }
    // }, [])


    useEffect(() => {
        console.log("card updated");
    }, [inputValue])

    return (
        <div style={{ width: "300px", padding: "1rem", border: "1px solid" }}>
            <h3>Card Title</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis voluptas architecto ullam.</p>

            <button onClick={() => { setCount((prevCount) => prevCount + 1) }}>Count is {count}</button>
            <hr />
            <input type="text" placeholder="type here.." value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
            <hr />
            <p>your value: {inputValue}</p>
        </div>
    )
}

export default Card