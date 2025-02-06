const Decrement = ({ setCount }) => {
    const handleDecrement = () => {
        setCount((prevCount) => prevCount - 1)
    }
    return (
        <button onClick={handleDecrement}>-</button>
    )
}

export default Decrement