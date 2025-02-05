import PropTypes from "prop-types"

const BookInfo = ({ children }) => {
    console.log(children);

    return (
        <> {children}</>
    )
}

BookInfo.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}
export default BookInfo