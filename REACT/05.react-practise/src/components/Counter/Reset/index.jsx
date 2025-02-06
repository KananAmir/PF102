import React from 'react'
import PropTypes from 'prop-types'

const Reset = ({ setCount, setInputValue }) => {
    const handleReset = () => {
        setCount(0)
        setInputValue("")
    }
    return (
        <button onClick={handleReset}>reset</button>
    )
}

Reset.propTypes = {
    setCount: PropTypes.func.isRequired,
    setInputValue: PropTypes.func.isRequired,
}
export default Reset