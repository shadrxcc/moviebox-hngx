import watch from "../../../src/assets/watch.svg";
import star from "../../../src/assets/Star.svg";
import Button from "../../components/ui/button";
import tickets from "../../../src/assets/TwoTickets.svg";
import list from "../../../src/assets/List.svg";
import best from "../../../src/assets/best.svg";
import arrow from "../../../src/assets/chevronright.svg";
import listwhite from "../../../src/assets/Listwhite.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Wrapper from "../wrapper";

const MovieDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const detailUrl = import.meta.env.VITE_MOVIE_DETAILS;
  const accesstoken = import.meta.env.VITE_ACCESS_TOKEN;
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        if (id !== null) {
          const response = await fetch(`${detailUrl}${id}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accesstoken}`,
            },
          });
          const data = await response.json();
          setDetails(data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchDetails();
  }, [id, accesstoken, detailUrl]);

  return (
    <Wrapper>
      <div className="text-black md:ml-[13rem] p-3.5 md:p-8 overflow-y-auto flex-1">
        {/* step back to prev location */}
        <button
          onClick={() => navigate(-1)}
          className="flex md:hidden text-buttonred items-center my-6"
        >
          <img className=" rotate-180" src={arrow} alt="" />
          <p className=" underline text-xl">Back</p>
        </button>

        <div
          style={{
            backgroundImage: `url(${imageUrl}${details.backdrop_path})`,
            backgroundColor: "lightgray",
          }}
          className="trailer flex flex-col justify-center w-full"
        >
          <div className="flex flex-col items-center">
            <img src={watch} alt="" />
            <p className="text-2xl font-medium text-[#E8E8E8]">Watch Trailer</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-y-4 py-8 lg:items-center">
          <div className="flex flex-1 flex-col lg:flex-row gap-y-4 gap-x-4 lg:items-center">
            <p
              data-testid="movie-title"
              className="md:text-2xl text-xl font-medium text-[#404040]"
            >
              {details.title} • 2022 • PG-13 • 2h 10m
            </p>
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
            <img src={star} alt="" />
            <span className="flex items-center gap-x-2">
              <p className="text-[#E8E8E8] font-medium text-2xl">
                {details.vote_average}
              </p>
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
              Director: <span className="text-buttonred">Joseph Kosinski</span>
            </p>

            <p>
              Stars:{" "}
              <span className="text-buttonred">
                Tom Cruise, Jennifer Connelly, Miles Teller
              </span>
            </p>

            <span className="flex gap-x-6 items-center border border-[#C7C7C7] rounded-[10px]">
              <Button className="bg-buttonred text-white text-sm lg:text-xl font-medium">
                Top rated movie #65
              </Button>
              <p className="text-sm">Awards 9 nominations</p>
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

            <div className="relative">
              <img className="w-full" src={best} alt="" />

              <div
                id="best-movies"
                className="flex absolute w-full bottom-0 items-center gap-x-3"
              >
                <img src={listwhite} alt="" />
                <p className="text-[#E8E8E8] text-sm font-medium">
                  The Best Movies and Shows in September
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MovieDetails;
