import PropTypes from "prop-types"

const Layout = ({ children }) => {


    console.log(children);

    return (
        <>
            <header>header</header>
            <main>
                {children}
            </main>
            <footer>footer</footer>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}
export default Layout