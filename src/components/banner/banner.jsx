import Header from "./header";
import Hero from "./hero";
import Wrapper from "../wrapper";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { shortenText } from "../../utils/shortenTextFunc";

const Banner = (props) => {
  const [upcoming, setUpcoming] = useState([]); //upcoming movies state
  const [currentIndex, setCurrentIndex] = useState(0); //current upcoming movie index state

  const apiUrl = import.meta.env.VITE_UPCOMING_URL;
  const accesstoken = import.meta.env.VITE_ACCESS_TOKEN;
  const imageUrl = import.meta.env.VITE_IMAGE_URL;

  //fetch upcoming movies
  useEffect(() => {
    const getUpcoming = async () => {
      try {
        const response = await fetch(`${apiUrl}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accesstoken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUpcoming(data.results);
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

    getUpcoming();
  }, [apiUrl, accesstoken]);

  //move to next movie's index function
  const moveToNextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % upcoming.length);
  };

  // move to next movie's id on set interval
  useEffect(() => {
    const interval = setInterval(moveToNextItem, 5000);
    return () => clearInterval(interval);
  }, [upcoming]);

  //check if index is valid
  const isValidIndex =
    upcoming.length > 0 && currentIndex >= 0 && currentIndex < upcoming.length;

  return (
    <Wrapper
      style={
        isValidIndex
          ? {
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url(${imageUrl}${upcoming[currentIndex].backdrop_path})`,
              backgroundColor: "lightgray",
            }
          : null
      }
      className="banner flex flex-col gap-y-16"
    >
      <Header setSearch={props.setSearch} />
      {isValidIndex && (
        <Hero
          id={upcoming[currentIndex].id}
          vote_count={upcoming[currentIndex].vote_count}
          title={shortenText(upcoming[currentIndex].title, 21)}
          description={shortenText(upcoming[currentIndex].overview, 260)}
        />
      )}
    </Wrapper>
  );
};

export default Banner;

Banner.propTypes = {
  setSearch: PropTypes.func,
};
