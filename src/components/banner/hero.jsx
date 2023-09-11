import imdb from "../../../src/assets/imdb.svg";
import tomato from "../../../src/assets/tomatoes.svg";
import play from "../../../src/assets/Play.svg";
import Button from "../ui/button";

const Hero = () => {
  return (
    <div className="w-fit px-4 lg:px-20 flex flex-col gap-y-4">
      <h1 className="font-bold w-[7em] max-[280px]:text-[30px] max-[280px]:w-auto text-[48px]">
        John Wick 3 : Parabellum
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
          John Wick is on the run after killing a member of the international
          assassins&apos; guild, and with a $14 million price tag on his head,
          he is the target of hit men and women everywhere.
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
