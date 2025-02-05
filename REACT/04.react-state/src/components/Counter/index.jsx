import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0)

    const [inputValue, setInputValue] = useState(0)

    const handleIncrement = () => {
        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)
        // console.log(count);

        // setCount((prevCount) => prevCount + 1)
        // setCount((prevCount) => prevCount + 1)
        setCount((prevCount) => prevCount + 1)

    }
    const handleDecrement = () => {
        // setCount(count - 1)
        setCount((prevCount) => prevCount - 1)
    }
    const handleIncByValue = () => {
        setCount((prevCount) => prevCount + parseInt(inputValue))
    }
    const handleReset = () => {
        setCount(0)
        setInputValue("")
    }
    return (
        <>

            <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>

                <button onClick={handleIncrement}>+</button>
                <h2>{count}</h2>
                <button onClick={handleDecrement}>-</button>
                <button onClick={handleReset}>reset</button>
            </div>
            <div>
                <input type="number" placeholder="enter number" value={inputValue} onChange={(e) => {
                    setInputValue(e.target.value)
                }} />
                <button onClick={handleIncByValue}>inc by value</button>
            </div></>
    )
}

export default Counter