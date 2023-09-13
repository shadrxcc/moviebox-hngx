import imdb from "../../../src/assets/imdb.svg";
import tomato from "../../../src/assets/tomatoes.svg";
import play from "../../../src/assets/Play.svg";
import Button from "../ui/button";
import PropTypes from "prop-types";

const Hero = (props) => {
  return (
    <div className="w-fit px-4 lg:px-20 flex flex-col gap-y-4">
      <h1 id="movie-title" className="font-bold stroke-black stroke-[2px] w-[7em] max-[280px]:text-[30px] max-[280px]:w-auto text-[48px]">
        {props.title}
      </h1>
      <div className="flex gap-x-8 w-fit items-center">
        <span className="flex gap-x-[10px] items-center">
          <img src={imdb} alt="" />
          <p className="text-xs">86.0 / 100</p>
        </span>

        <span className="flex gap-x-[10px] items-center">
          <img src={tomato} alt="" />
          <p className="text-xs">97%</p>
        </span>
      </div>

      <div>
        <p className="text-sm lg:w-[35%] xl:w-[26%] font-medium">
          {props.description}
        </p>
      </div>

      <Button className="bg-buttonred w-fit">
        <img src={play} alt="" />
        Watch trailer
      </Button>
    </div>
  );
};

export default Hero;

Hero.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
