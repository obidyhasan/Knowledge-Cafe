import { useState } from "react";
import "./App.css";
import Blogs from "./Component/Blogs/Blogs";
import Bookmarks from "./Component/Bookmark/Bookmarks";
import Header from "./Component/Header/Header";

function App() {
  const [bookmarks, setBookmark] = useState([]);
  const [markAsRead, setMarkAsRead] = useState(0);

  function handelBookmark(blog) {
    const newBookmarks = [...bookmarks, blog];
    setBookmark(newBookmarks);
  }

  function handelMarkAsRead(blog, id) {
    setMarkAsRead(markAsRead + blog.read_time);
    // Remove to Bookmark with id
    const reamingBookmark = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmark(reamingBookmark);
  }

  return (
    <>
      <Header></Header>
      <div className="max-w-7xl mx-auto p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <Blogs
          handelBookmark={handelBookmark}
          handelMarkAsRead={handelMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} markAsRead={markAsRead}></Bookmarks>
      </div>
    </>
  );
}

export default App;
