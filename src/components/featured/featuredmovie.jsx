import Card from "../ui/card";
import stranger from "../../assets/stranger.svg";
import favourite from "../../assets/Favorite.svg";
import imdb from "../../../src/assets/imdb.svg";
import tomato from "../../../src/assets/tomatoes.svg";

const Featuredmovie = () => {
  return (
    <Card className="w-[250px] flex flex-col gap-y-3">
      <div
        className="w-full bg-no-repeat h-[370px]"
        style={{ backgroundImage: `url(${stranger})` }}
      >
        <div className="flex p-4 justify-between items-center">
          <span id="movietype" className="py-[3px] px-2">
            <p className="text-xs text-[#111827] font-bold">TV SERIES</p>
          </span>

          <img src={favourite} alt="" />
        </div>
      </div>
      <div className="font-bold flex flex-col gap-y-3">
        <p className="text-xs text-[#9CA3AF]">USA, 2016 - Current</p>
        <p className="text-lg text-[#111827]">Stranger Things</p>
      </div>

      <div className="flex items-center justify-between">
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
        <p className="text-xs font-bold text-[#9CA3AF]">
          Action, Adventure, Horror
        </p>
      </div>
    </Card>
  );
};

export default Featuredmovie;
