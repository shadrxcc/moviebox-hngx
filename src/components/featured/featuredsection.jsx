import { useEffect, useState } from "react";
import Featuredmovie from "./featuredmovie";

const Featuredsection = () => {
  const [featured, setFeatured] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;
  const accesstoken = import.meta.env.VITE_ACCESS_TOKEN;

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
          console.log(data);
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

  console.log(featured)
  return (
    <div className="text-black flex flex-col gap-x-20 gap-y-10 px-4 lg:px-20">
      <h2 className="text-2xl md:text-[36px] h-fit font-bold">
        Featured Movies
      </h2>
      <div className="grid gap-y-20 gap-x-20 md:grid-cols-3 xl:grid-cols-4">
        {featured.map((movie) => {
        return <Featuredmovie key={movie.id} title={movie.original_title} background={movie.poster_path} />
      })}
      </div>
      
      
    </div>
  );
};

export default Featuredsection;
