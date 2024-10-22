import { useState } from "react";
import { useEffect } from "react";
import Blog from "./Blog";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="sm:col-span-2">
      {blogs.map((blog, idx) => (
        <Blog key={idx} blog={blog}></Blog>
      ))}
    </div>
  );
}

export default Blogs;
