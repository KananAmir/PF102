import PropTypes from "prop-types"

const Blog = ({ blog }) => {
    return (
        <div style={{ width: "300px", border: "2px solid" }}>
            <img src={blog.image} alt="" />
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <span>{blog.date}</span>
            <p><i> Written by {blog.author}</i></p>
        </div>
    )
}

Blog.propTypes = {
    blog: PropTypes.object
}
export default Blog