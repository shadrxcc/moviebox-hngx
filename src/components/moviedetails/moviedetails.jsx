import watch from "../../../src/assets/watch.svg";
import star from "../../../src/assets/Star.svg";
import Button from "../../components/ui/button";
import tickets from "../../../src/assets/TwoTickets.svg";
import list from "../../../src/assets/List.svg";
import arrow from "../../../src/assets/chevronright.svg";
import arrowdown from "../../assets/ExpandArrow.svg";
import listwhite from "../../../src/assets/Listwhite.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Wrapper from "../wrapper";
import { BiLoader } from "react-icons/bi";

const MovieDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const [play, setPlay] = useState(false);
  const [stars, setStars] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [similar, setSimilar] = useState([]);

  const detailUrl = import.meta.env.VITE_MOVIE_DETAILS;
  const accesstoken = import.meta.env.VITE_ACCESS_TOKEN;
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        if (id !== null) {
          const response = await fetch(
            `${detailUrl}${id}?api_key=${apiKey}&append_to_response=videos,credits,similar`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accesstoken}`,
              },
            }
          );
          const data = await response.json();
          setLoading(true);
          setDetails(data);
          const video = data.videos.results[0];
          setVideos(video);
          const star = data.credits.cast.slice(0, 5);
          setStars(star);
          const director = data.credits.crew.find((dir) => {
            return dir.job === "Director";
          });
          setDirectors(director);
          const morelike = data.similar.results.slice(0, 3);
          setSimilar(morelike);
        }
      } catch (err) {
        console.log(err);
        setError("Error getting movie details :(");
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id, accesstoken, apiKey, detailUrl]);

  return (
    <Wrapper>
      <div className="text-black md:ml-[13rem] p-3.5 md:p-8 overflow-y-auto flex-1">
        {/* step back to prev location */}
        <button
          onClick={() => navigate(-1)}
          className="flex md:hidden text-buttonred items-center my-6"
        >
          <img className=" rotate-180" src={arrow} alt="arrow icon" />
          <p className=" underline text-xl">Back</p>
        </button>

        {loading ? (
          <div className="flex items-center w-full justify-center h-full">
            <BiLoader id="loader" className="text-buttonred" size={70} />
          </div>
        ) : error ? (
          <div className="flex justify-center items-center">
            <p className="text-buttonred m-auto text-2xl max-[280]:text-base md:text-[36px]">
              {error}
            </p>
          </div>
        ) : (
          <>
            {play && (
              <iframe
                src={`https://www.youtube.com/embed/${videos.key}`}
                style={{ backgroundColor: "lightgray" }}
                className="w-full border h-[70vh] rounded-xl"
                title=""
              ></iframe>
            )}
            {!play && (
              <div
                style={{
                  backgroundImage: `url(${imageUrl}${details.backdrop_path})`,
                  backgroundColor: "lightgray",
                }}
                className="trailer flex flex-col justify-center w-full"
              >
                <button
                  onClick={() => setPlay(true)}
                  className="flex hover:scale-[1.03] ease-in-out duration-300 transition-all flex-col items-center"
                >
                  <img src={watch} alt="" />
                  <p className="text-2xl font-medium text-[#E8E8E8]">
                    Watch Trailer
                  </p>
                </button>
              </div>
            )}

            <div className="flex flex-col lg:flex-row justify-between gap-y-4 py-8 sm:items-center">
              <div className="flex flex-1 flex-col lg:flex-row gap-y-4 gap-x-4 sm:items-center">
                <div className="flex flex-col lg:flex-row sm:items-center gap-y-2 gap-x-3 md:text-2xl text-xl font-medium text-[#404040]">
                  <div className="flex flex-col sm:items-center gap-x-3 sm:flex-row lg:flex-col xl:flex-row">
                    <p data-testid="movie-title">{details.title} •</p>
                    <p className="text-base" data-testid="movie-release-date">
                      {details.release_date}
                    </p>
                  </div>
                  <div className="flex text-base gap-x-3">
                    {/* •<p>PG-13</p> • */}
                    <p data-testid="movie-runtime">{details.runtime}mins</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-y-3 gap-x-3">
                  {details.genres &&
                    details.genres.map((genre) => (
                      <button key={genre.id} className="tag">
                        {genre.name}
                      </button>
                    ))}
                </div>
              </div>

              <div className="flex items-center gap-x-2">
                <img src={star} alt="star" />
                <span className="flex items-center gap-x-2">
                  {details && details.vote_average !== undefined && (
                    <p className="text-[#E8E8E8] font-medium text-2xl">
                      {details.vote_average.toFixed(1)}
                    </p>
                  )}

                  <p className="text-[#666] font-medium">|</p>
                  <p className="text-xl text-[#666] font-medium">350k</p>
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 gap-x-3 md:flex-row">
              <div className="flex-[1.4_1_0] flex flex-col gap-y-4 lg:gap-y-16">
                <p data-testid="movie-overview" className="lg:text-xl">
                  {details.overview}
                </p>

                <p>
                  Director:{" "}
                  <span className="text-buttonred">{directors.name}</span>
                </p>
                {stars && (
                  <p>
                    Stars:{" "}
                    {stars.map((actor) => {
                      return (
                        <span key={actor.cast_id} className="text-buttonred">
                          {actor.name + " "}
                        </span>
                      );
                    })}
                  </p>
                )}

                <span className="flex gap-x-6 items-center border border-[#C7C7C7] rounded-[10px]">
                  <Button className="bg-buttonred flex-1 text-white text-sm lg:text-xl font-medium">
                    Top rated movie #65
                  </Button>
                  <span className="flex px-0.5 items-center flex-1 justify-between">
                    <p className="text-sm">Awards 9 nominations</p>
                    <img src={arrowdown} alt="arrow icon" />
                  </span>
                </span>
              </div>

              <div className="flex-1 flex flex-col gap-y-8">
                <div className="flex flex-col gap-y-3">
                  <Button className="bg-buttonred w-full text-white gap-x-[10px] justify-center text-base md:text-sm lg:text-xl font-medium flex items-center">
                    <img src={tickets} alt="" />
                    <p>See Showtimes</p>
                  </Button>
                  <Button className="bg-buttonfaintred w-full text-[#333] justify-center text-base md:text-sm lg:text-xl  gap-x-[10px] font-medium flex items-center">
                    <img src={list} alt="" />
                    <p>More watch options</p>
                  </Button>
                </div>
                {similar.length === 0 ? null : (
                  <Link to={`/similar-movies/${id}`}>
                    <div className="relative rounded-[10px]">
                      <div className="flex gap-x-1 rounded-[10px]">
                        {similar.map((mov) => {
                          return (
                            <div
                              className="w-full bg-cover bg-no-repeat rounded-[10px] h-[15em]"
                              style={{
                                backgroundImage: `url(${imageUrl}${mov.poster_path})`,
                                backgroundColor: "lightgray",
                              }}
                              key={mov.id}
                            ></div>
                          );
                        })}
                      </div>

                      <div
                        id="best-movies"
                        className="flex absolute w-full bottom-0 items-center gap-x-3"
                      >
                        <img src={listwhite} alt="" />
                        <p className="text-[#E8E8E8] text-sm font-medium">
                          Similar movies
                        </p>
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default MovieDetails;
