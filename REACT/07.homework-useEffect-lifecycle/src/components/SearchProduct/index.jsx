import PropTypes from "prop-types"

function SearchProduct({ searchQuery, setSearchQuery }) {
    return (
        <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products"
        />
    )
}

SearchProduct.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    setSearchQuery: PropTypes.func.isRequired,
}

export default SearchProduct

