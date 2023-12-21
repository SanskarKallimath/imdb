import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";
import { useState, useEffect } from "react";

function App() {
  let [watchList, setWatchList] = useState([]);
  let [pageNo, setPageNo] = useState(1);

  let handlePrev = () => {
    if (pageNo > 1) setPageNo(pageNo - 1);
  };

  let handleNext = () => {
    setPageNo(pageNo + 1);
  };

  let handleAddToWatchList = (movieId) => {
    // console.log("Inside add to watchlist");
    // console.log(movieId);
    // watchList.push(movieId); // it will not work since the reference is same

    let newWatchList = [...watchList, movieId];
    localStorage.setItem("movieApp", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  };

  let handleRemoveFromWatchList = (movieObj) => {
    let filteredWatchList = watchList.filter((movie) => {
      return movie.id !== movieObj.id;
    });
    localStorage.setItem("movieApp", JSON.stringify(filteredWatchList));
    setWatchList(filteredWatchList);
  };
  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("movieApp");
    if (!moviesFromLocalStorage) {
      return;
    }
    setWatchList(JSON.parse(moviesFromLocalStorage));
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Movies
                watchList={watchList}
                handleAddToWatchList={handleAddToWatchList}
                handleRemoveFromWatchList={handleRemoveFromWatchList}
                setWatchList={setWatchList}
                pageNo={pageNo}
                handlePrev={handlePrev}
                handleNext={handleNext}
              />
            </>
          }
        ></Route>
        <Route
          path="/watchlist"
          element={
            <WatchList
              watchList={watchList}
              setWatchList={setWatchList}
              handleRemoveFromWatchList={handleRemoveFromWatchList}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
