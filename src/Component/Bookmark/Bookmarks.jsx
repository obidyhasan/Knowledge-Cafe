import PropTypes from "prop-types";

function Bookmarks({ bookmarks, markAsRead }) {
  return (
    <div className="h-min sm:col-span-2 md:col-span-1">
      <div className="bg-purple-100 border-purple-400 border-2 rounded-md text-center p-4">
        <h1 className="font-bold text-lg text-purple-600">
          Spent time on read : {markAsRead} min
        </h1>
      </div>

      <div className="bg-gray-100 mt-5 rounded-md p-4">
        <h1 className="font-bold mb-5">
          Bookmarked Blogs : {bookmarks.length}
        </h1>
        <div className="space-y-3">
          {bookmarks.map((bookmark, idx) => (
            <div key={idx} className="bg-white p-4 rounded-md">
              <h1 className="font-semibold">{bookmark.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  markAsRead: PropTypes.number.isRequired,
};

export default Bookmarks;
