import { useState } from "react";
import { MdClear } from "react-icons/md";
import { BiLoader } from "react-icons/bi";
import { Link } from "react-router-dom";
import Modal from "./layout/modal";
import PropTypes from "prop-types";
import { formatToUTC } from "../utils/formatToUTC";

const Search = (props) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noResult, setNoResult] = useState("");
  const [error, setError] = useState("");

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

        if (data.results.length === 0) {
          setNoResult("No results found.");
        } else {
          setNoResult("");
        }
      } else {
        setNoResult("");
      }
    } catch (error) {
      setLoading(false);
      setNoResult("");
      setError("Network error occurred. Please try again later :)");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (value) => {
    setInput(value);
    getResults(value);
    setLoading(true);
    setError("");
    setNoResult("");
    if (value.trim() === "") {
      setError("");
      setNoResult("");
    } //set error messages to empty when input is empty
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
            (input.trim() !== "" && noResult) ||
            error ||
            searchResults.length > 0
              ? "bg-white"
              : ""
          } max-h-[500px] overflow-y-auto overflow-x-hidden  mx-auto lg:w-[50rem]`}
        >
          {loading && (
            <div className="py-2">
              <BiLoader id="loader" className="m-auto" size={30} color="#000" />
            </div>
          )}

          <div className="flex flex-col p-3 gap-y-4">
            {input.trim() !== "" && noResult && (
              <p className="text-black text-lg font-medium">{noResult}</p>
            )}
            {error && <p className="text-black text-lg font-medium">{error}</p>}

            {searchResults.map((movie) => (
              <Link to={`/movie/${movie.id}`} key={movie.id}>
                <div
                  key={movie.id}
                  className="text-gray-800 border-b pb-1 flex justify-between items-center"
                >
                  <div className="flex gap-x-3 items-center">
                    <img
                      data-testid="movie-poster"
                      loading="lazy"
                      className="w-[4em]"
                      src={`${imageUrl}${movie.poster_path}`}
                      alt=""
                    />
                    <div className="flex flex-col">
                      <p data-testid="movie-title">{movie.title}</p>
                      <p data-testid="movie-release-date">
                        {formatToUTC(movie.release_date)}
                      </p>
                    </div>
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
