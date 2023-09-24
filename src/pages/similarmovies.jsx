import { useParams } from "react-router-dom";
import Featuredmovie from "../components/featured/featuredmovie";
import { useEffect, useState } from "react";
import Wrapper from "../components/wrapper";
import Header from "../components/banner/header";

const SimilarMovies = () => {
  const { id } = useParams();
  const [similar, setSimilar] = useState([]);
  const [target, setTarget] = useState([]);

  const detailUrl = import.meta.env.VITE_MOVIE_DETAILS;
  const accesstoken = import.meta.env.VITE_ACCESS_TOKEN;
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        if (id !== null) {
          const response = await fetch(
            `${detailUrl}${id}?api_key=${apiKey}&append_to_response=similar`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accesstoken}`,
              },
            }
          );
          const data = await response.json();
          //   setLoading(true);
          setSimilar(data.similar.results);
          setTarget(data);
          console.log(data);
        }
      } catch (err) {
        console.log(err);
        // setError("Error getting movie details :(");
      } finally {
        // setLoading(false);
      }
    };

    fetchDetails();
  }, [id, accesstoken, apiKey, detailUrl]);

  return (
    <Wrapper className={`flex flex-col gap-y-16`}>
      <Header />
      <div className="px-4 flex flex-col gap-y-10 lg:px-20">
        <h1 className="text-2xl text-black max-[280]:text-base md:text-[36px] h-fit font-bold">
          Similar movies to{" "}
          <span className="text-buttonred">{target.title}</span>
        </h1>
        <div className="grid gap-y-20 gap-x-20 md:grid-cols-3 xl:grid-cols-4">
          {similar.map((movie) => {
            return (
              <Featuredmovie
                key={movie.id}
                id={movie.id}
                vote_average={movie.vote_average.toFixed(1)}
                releasedate={movie.release_date}
                title={movie.original_title}
                background={movie.poster_path}
              />
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default SimilarMovies;
