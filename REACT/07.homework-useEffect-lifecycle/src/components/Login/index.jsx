import PropTypes from "prop-types"

function Login({ setIsLogged }) {
    return (
        <button
            onClick={() => setIsLogged(true)}
        >
            Login
        </button>
    )
}

Login.propTypes = {
    setIsLogged: PropTypes.func.isRequired,
}

export default Login

