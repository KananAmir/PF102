import Blog from "../Blog";
import PropTypes from "prop-types";

const BlogList = ({ blogs }) => {

    return (
        <div style={{ display: "flex", gap: "2rem" }}>
            {
                blogs.map((blog) => {
                    return (
                        <Blog blog={blog} key={blog.id} />
                    );
                })
            }
        </div>
    )
}

BlogList.propTypes = {
    blogs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        title: PropTypes.string,
        content: PropTypes.string,
        date: PropTypes.string,
        author: PropTypes.string,
        image: PropTypes.string,
    }))
}
export default BlogList