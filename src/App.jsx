import "./App.css";
import Blogs from "./Component/Blogs/Blogs";
import Bookmarks from "./Component/Bookmark/Bookmarks";
import Header from "./Component/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <div className="max-w-7xl mx-auto p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App;
