import { useState } from "react"

const IncrementByValue = ({ setCount, inputValue, setInputValue }) => {
    const handleIncByValue = () => {
        setCount((prevCount) => prevCount + parseInt(inputValue))
    }
    return (
        <div>
            <input type="number" placeholder="enter number" value={inputValue} onChange={(e) => {
                setInputValue(e.target.value)
            }} />
            <button onClick={handleIncByValue}>inc by value</button>
        </div>
    )
}

export default IncrementByValue