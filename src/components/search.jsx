import { useState } from "react";
import star from "../../src/assets/Star.svg";
import { MdClear } from "react-icons/md";
import { BiLoader } from "react-icons/bi";
import { Link } from "react-router-dom";
import Modal from "./layout/modal";
import PropTypes from "prop-types";

const Search = (props) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const accesstoken = import.meta.env.VITE_ACCESS_TOKEN;
  const imageUrl = import.meta.env.VITE_IMAGE_URL;

  const getResults = async (value) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&page=1`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accesstoken}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setSearchResults(data.results);
      } else {
        console.error(
          "Failed to fetch data:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (value) => {
    setInput(value);
    getResults(value);
    setLoading(true);
  };

  return (
    <Modal onClose={props.onClose}>
      <div>
        <div
          className={`${
            !searchResults ? "" : "bg-white"
          } flex px-2 py-8 shadow-sm justify-center items-center`}
        >
          <div className="md:flex-1"></div>
          <form className="md:block flex-[2_1_0] md:flex-1" action="search">
            <div className="flex px-[10px] m-auto md:w-[25rem] lg:w-[35rem] py-[6px] border rounded-md border-gray-900 items-center">
              <input
                className="outline-none placeholder:text-gray-900 text-gray-900 bg-transparent border-none w-full"
                type="search"
                value={input}
                placeholder="What do you want to watch?"
                name="search"
                onChange={(e) => handleChange(e.target.value)}
                id="search"
              />
            </div>
          </form>

          <MdClear
            onClick={props.onClose}
            className="flex-[0.5_1_0] md:flex-1"
            color="#000"
            size={25}
          />
        </div>

        <div
          className={`${
            searchResults ? "border-x" : ""
          }md:w-[25rem] m-auto lg:w-[35rem]`}
        >
          {loading && (
            <BiLoader
              id="loader"
              className="m-auto mt-10"
              size={30}
              color="#000"
            />
          )}
          <div className="flex bg-white flex-col p-3 gap-y-4">
            {searchResults.map((movie) => (
              <Link to={`/movie/${movie.id}`} key={movie.id}>
                <div
                  key={movie.id}
                  className="text-gray-800 border-b pb-1 flex justify-between items-center"
                >
                  <div className="flex gap-x-3 items-center">
                    <img
                      loading="lazy"
                      className="w-[4em]"
                      src={`${imageUrl}${movie.poster_path}`}
                      alt=""
                    />
                    <div className="flex flex-col">
                      <p>{movie.title}</p>
                      <p>{movie.release_date}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <img src={star} alt="" />
                    <p>{movie.vote_average}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Search;

Search.propTypes = {
  onClose: PropTypes.func,
};
