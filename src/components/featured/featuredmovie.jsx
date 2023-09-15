import MovieCard from "../ui/moviecard";
// import stranger from "../../assets/stranger.svg";
import favourite from "../../assets/Favorite.svg";
import favactive from "../../assets/Favorite-active.svg";
import imdb from "../../../src/assets/imdb.svg";
import tomato from "../../../src/assets/tomatoes.svg";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

//featured movie card layout
const Featuredmovie = (props) => {
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  const handleLikeClick = (e) => {
    setLiked(!liked);
    e.stopPropagation(); //stop like component from firing the onclick event of parent element
  };

  return (
    <MovieCard
      onClick={() => navigate(`/movies/${props.id}`)}
      key={props.id}
      className="flex flex-col gap-y-3"
    >
      <div className="relative">
        <img
          style={{ backgroundColor: "lightgray" }}
          loading="lazy"
          data-testid="movie-poster"
          src={`${imageUrl}${props.background}`}
          alt=""
        />
        <div className="flex p-4 absolute top-0 w-full justify-between items-center">
          <span id="movietype" className="py-[3px] px-2">
            <p className="text-xs text-[#111827] font-bold">MOVIES</p>
          </span>

          <div onClick={handleLikeClick.bind(null)}>
            <img src={liked ? favactive : favourite} alt="like icon" />
          </div>
        </div>
      </div>

      <div className="font-bold flex flex-col gap-y-3">
        <p data-testid="movie-release-date" className="text-xs text-[#9CA3AF]">
          {props.releasedate}
        </p>
        <p data-testid="movie-title" className="text-lg w-fit text-[#111827]">
          {props.title}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <span className="flex gap-x-[10px] items-center">
          <img src={imdb} alt="" />
          <p className="text-xs">{props.vote_average} / 10</p>
        </span>

        <span className="flex gap-x-[10px] items-center">
          <img src={tomato} alt="rotten tomatoes" />
          <p className="text-xs">97%</p>
        </span>
      </div>

      <div>
        <p id="genres" className="text-xs font-bold text-[#9CA3AF]">
          Action, Adventure, Horror
        </p>
      </div>
    </MovieCard>
  );
};

export default Featuredmovie;

Featuredmovie.propTypes = {
  id: PropTypes.number,
  background: PropTypes.node,
  title: PropTypes.string,
  releasedate: PropTypes.any,
  vote_average: PropTypes.string,
};
