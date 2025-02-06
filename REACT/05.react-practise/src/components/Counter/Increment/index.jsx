const Increment = ({ setCount }) => {

    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1)
    }
    return (
        <button onClick={handleIncrement}>+</button>
    )
}

export default Increment