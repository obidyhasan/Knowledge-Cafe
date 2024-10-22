import PropTypes from "prop-types";
import { useState } from "react";
import { FaRegBookmark } from "react-icons/fa6";
import { IoBookmark } from "react-icons/io5";

function Blog({ blog, handelBookmark, handelMarkAsRead }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const {
    id,
    cover_img,
    title,
    author_name,
    author_img,
    publish_date,
    read_time,
    tags,
  } = blog;
  return (
    <div>
      <figure className="w-full">
        <img src={cover_img} className="w-full rounded-md" alt="" />
      </figure>
      <div className="mt-5 flex items-center justify-between gap-5 flex-wrap">
        <div className="flex items-center gap-3 flex-wrap">
          <img
            src={author_img}
            className="w-12 h-12 object-cover rounded-full"
            alt=""
          />
          <div>
            <h2 className="text-lg font-bold">{author_name}</h2>
            <h2 className="text-sm font-medium">{publish_date}</h2>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <p>{read_time} min read</p>
          <button
            onClick={() => {
              handelBookmark(blog), setIsBookmarked(!isBookmarked);
            }}
          >
            {isBookmarked ? <IoBookmark /> : <FaRegBookmark />}
          </button>
        </div>
      </div>
      <h2 className="font-bold text-2xl mt-3 mb-3">{title}</h2>
      <div className="flex gap-2 text-gray-600 font-medium">
        {tags.map((tag, index) => (
          <span key={index}>#{tag}</span>
        ))}
      </div>
      <button
        onClick={() => handelMarkAsRead(blog, id)}
        className="font-semibold underline text-purple-500 mb-7 mt-3"
      >
        Mark as read
      </button>
    </div>
  );
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handelBookmark: PropTypes.func.isRequired,
  handelMarkAsRead: PropTypes.func.isRequired,
};

export default Blog;
