import { useParams } from "react-router-dom";
import Featuredmovie from "../components/featured/featuredmovie";
import { useContext, useEffect, useState } from "react";
import Wrapper from "../components/wrapper";
import Header from "../components/banner/header";
import { SearchContext } from "../components/context/searchcontext";
import Search from "../components/search";
import Footer from "../components/layout/footer";

const SimilarMovies = () => {
  const { id } = useParams();
  const [similar, setSimilar] = useState([]);
  const [target, setTarget] = useState([]);

  const { search, hideSearch, showSearch } = useContext(SearchContext)

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
          const filter = data.similar.results.filter((movie) => {
            return movie.poster_path !== null
          })
          setSimilar(filter);
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

  console.log(similar)

  return (
    <>
    {search && <Search onClose={hideSearch} />}
      {" "}
      <Wrapper className={`flex flex-col gap-y-16`}>
        <Header setSearch={showSearch} />
        <div className="px-4 flex flex-col gap-y-10 lg:px-20">
          <h1 className=" text-black text-2xl md:text-[36px] h-fit font-bold">
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
        <Footer/>
      </Wrapper>
    </>
  );
};

export default SimilarMovies;
