import MovieCard from "./MoviesCard";
import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

function Movies(props) {
  let {
    watchList,
    handleAddToWatchList,
    handleRemoveFromWatchList,
    //setWatchList,
    pageNo,
    handleNext,
    handlePrev,
  } = props;
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=17aa2d9f5d8e31705a353c5f4903489e&page=${pageNo}`
      )
      .then(function (res) {
        // console.log(res);
        // console.log(res.data.results);
        setMovies(res.data.results);
      });
  }, [pageNo]);

  return (
    <div className="p-5">
      <div className="text-2xl m-5 font-bold text-center">Trending Movies</div>
      <div className="flex flex-wrap justify-around gap-8">
        {movies.map((movieObj) => {
          // console.log(movieObj);
          return (
            <MovieCard
              key={movieObj.id}
              movieObj={movieObj}
              name={movieObj.title}
              poster_path={movieObj.poster_path}
              watchList={watchList}
              handleAddToWatchList={handleAddToWatchList}
              handleRemoveFromWatchList={handleRemoveFromWatchList}
            />
          );
        })}
      </div>
      <Pagination
        pageNo={pageNo}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
}

export default Movies;
