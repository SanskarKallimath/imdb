import axios from "axios";
import { useEffect, useState } from "react";

function Banner() {
  let [detail, setDetail] = useState(undefined);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=17aa2d9f5d8e31705a353c5f4903489e"
      )
      .then(function (res) {
        //console.log(res);
        // console.log(res.data.results[1].poster_path);
        let data = res.data.results[1];
        setDetail(data);
      });
  }, []);
  if (detail === undefined) {
    return;
  }
  return (
    <div
      className="h-[vh20] md:h-[70vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${detail.poster_path})`,
      }}
    >
      <div className="text-xl text-white bg-gray-900/60 w-full p-4 text-center">
        {detail.title}
      </div>
    </div>
  );
}
export default Banner;
