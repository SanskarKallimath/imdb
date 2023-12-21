import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex items-center p-3">
      <img
        className="h-[50px] mx-6"
        src="https://www.freeiconspng.com/thumbs/movie-icon/movie-icon-11.png"
        alt=""
      />
      <Link to={"/"} className="text-3xl font-bold text-sky-600 mx-6">
        Movies
      </Link>
      <Link to={"/watchlist"} className="mx-6 text-3xl font-bold text-sky-600">
        WatchList
      </Link>
    </div>
  );
}
export default Navbar;
