import { useState } from "react";
import { useEffect } from "react";
import Blog from "./Blog";
import PropTypes from "prop-types";

function Blogs({ handelBookmark, handelMarkAsRead }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="sm:col-span-2">
      {blogs.map((blog, idx) => (
        <Blog
          handelMarkAsRead={handelMarkAsRead}
          handelBookmark={handelBookmark}
          key={idx}
          blog={blog}
        ></Blog>
      ))}
    </div>
  );
}

Blogs.propTypes = {
  handelBookmark: PropTypes.func.isRequired,
  handelMarkAsRead: PropTypes.func.isRequired,
};

export default Blogs;
