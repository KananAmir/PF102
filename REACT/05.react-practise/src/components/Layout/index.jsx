
const Layout = ({ children }) => {
    return (
        <>
            <header>I am Header</header>
            <main>
                {children}
            </main>
            <footer>I am Footer</footer>
        </>
    )
}

export default Layout