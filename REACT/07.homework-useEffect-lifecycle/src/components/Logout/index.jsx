import PropTypes from "prop-types"

function Logout({ setIsLogged }) {
    return (
        <button
            onClick={() => setIsLogged(false)}
        >
            Logout
        </button>
    )
}

Logout.propTypes = {
    setIsLogged: PropTypes.func.isRequired,
}

export default Logout

