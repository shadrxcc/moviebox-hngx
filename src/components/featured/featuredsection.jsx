import Featuredmovie from "./featuredmovie";

const Featuredsection = () => {
  return (
    <div className="text-black flex flex-col gap-y-10 px-4 lg:px-20">
      <h2 className="text-2xl md:text-[36px] h-fit font-bold">
        Featured Movies
      </h2>
      <Featuredmovie />
    </div>
  );
};

export default Featuredsection;
