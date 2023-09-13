import Header from "./header";
import Hero from "./hero";
import Wrapper from "../wrapper";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { shortenText } from "../../utils/shortenTextFunc";

const Banner = (props) => {
  const [upcoming, setUpcoming] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const apiUrl = import.meta.env.VITE_UPCOMING_URL;
  const accesstoken = import.meta.env.VITE_ACCESS_TOKEN;
  const imageUrl = import.meta.env.VITE_IMAGE_URL;

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
          console.log(data);
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

  const moveToNextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % upcoming.length);
  };

  useEffect(() => {
    const interval = setInterval(moveToNextItem, 5000);
    return () => clearInterval(interval);
  }, [upcoming]);

  const isValidIndex =
    upcoming.length > 0 && currentIndex >= 0 && currentIndex < upcoming.length;

  return (
    <Wrapper
      style={
        isValidIndex
          ? {
              backgroundImage: `url(${imageUrl}${upcoming[currentIndex].backdrop_path})`,
            }
          : null
      }
      className="banner flex flex-col gap-y-16"
    >
      <Header setSearch={props.setSearch} />
      {isValidIndex && (
        <Hero
          title={shortenText(upcoming[currentIndex].title, 21)}
          description={shortenText(upcoming[currentIndex].overview, 267)}
        />
      )}
    </Wrapper>
  );
};

export default Banner;

Banner.propTypes = {
  setSearch: PropTypes.func,
};
