function Header() {
  return (
    <div className="bg-white sticky top-0">
      <div className="max-w-7xl mx-auto p-5 flex justify-between gap-5">
        <h1 className="font-bold text-2xl">Knowledge Cafe</h1>
        <img
          className="w-10 h-10 object-cover rounded-full"
          src="https://i.ibb.co.com/wBS4vmS/Ellipse-1.png"
          alt=""
        />
      </div>
      <hr />
    </div>
  );
}

export default Header;
