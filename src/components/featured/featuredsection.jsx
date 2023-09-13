import { useEffect, useState } from "react";
import Featuredmovie from "./featuredmovie";
import arrow from "../../assets/chevronright.svg";

const Featuredsection = () => {
  const [featured, setFeatured] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;
  const accesstoken = import.meta.env.VITE_ACCESS_TOKEN;

  //fetch from popular movies
  useEffect(() => {
    const getTopRated = async () => {
      try {
        const response = await fetch(`${apiUrl}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accesstoken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setFeatured(data.results);
        } else {
          console.error(
            "Failed to fetch data:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getTopRated();
  }, [apiUrl, accesstoken]);

  return (
    <div className="text-black flex flex-col gap-x-20 gap-y-10 px-4 lg:px-20">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl max-[280]:text-base md:text-[36px] h-fit font-bold">
          Featured Movies
        </h2>

        <span className="flex items-center gap-x-2">
          <p className="text-xl max-[280]:text-base leading-6 text-buttonred">See more</p>
          <img src={arrow} alt="" />
        </span>
      </div>

      <div className="grid gap-y-20 gap-x-20 md:grid-cols-3 xl:grid-cols-4">
        {featured.slice(0, 10).map((movie) => {
          return (
            <Featuredmovie
              key={movie.id}
              id={movie.id}
              vote_count={movie.vote_count}
              releasedate={movie.release_date}
              title={movie.original_title}
              background={movie.poster_path}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Featuredsection;
