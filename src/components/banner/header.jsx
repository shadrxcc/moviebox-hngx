import logo from "../../assets/tv.svg";
import search from "../../assets/Search.svg";
import darksearch from "../../assets/darksearch.svg";
import menu from "../../assets/Menu.svg";
import { Link, useLocation, useParams } from "react-router-dom";
import PropTypes from "prop-types";

const Header = (props) => {
  const location = useLocation();
  const { id } = useParams();

  return (
    <>
      {/* header: on details page show only on mobile screens  */}
      <header
        className={`${
          location.pathname === `/movies/${id}` ? "md:hidden" : ""
        } text-white py-6 px-4 lg:px-20 flex justify-between items-center`}
      >
        <Link to={`/`}>
          {" "}
          <div className="flex max-w-full gap-x-2 md:gap-x-6 items-center">
            <img className="w-[40px]" src={logo} alt="moviebox logo" />
            <p
              className={`${
                location.pathname === `/movies/${id}` ||
                location.pathname === `/similar-movies/${id}`
                  ? "text-black"
                  : "text-white"
              } text-lg font-bold leading-6`}
            >
              MovieBox
            </p>
          </div>
        </Link>

        {/* search modal button toggle to show on tab and desktop screens */}
        <button
          onClick={props.setSearch}
          className={`${
            location.pathname === `/similar-movies/${id}` ? "text-black" : ""
          } hidden md:flex px-[10px] md:w-[25rem] lg:w-[35rem] py-[6px] border rounded-md border-[#D1D5DB] justify-between items-center`}
        >
          <p>What do you want to watch?</p>

          <img
            src={
              location.pathname === `/similar-movies/${id}`
                ? darksearch
                : search
            }
            alt=""
          />
        </button>

        <div className="flex gap-x-4 md:gap-x-7 items-center">
          <img
            onClick={props.setSearch}
            className="md:hidden w-7"
            src={
              location.pathname === `/movies/${id}` ||
              location.pathname === `/similar-movies/${id}`
                ? darksearch
                : search
            }
            alt="search icon"
          />

          <p className="text-base hidden md:block font-bold leading-6">
            Sign in
          </p>
          <img src={menu} alt="menu icon" />
        </div>
      </header>
    </>
  );
};

export default Header;

Header.propTypes = {
  setSearch: PropTypes.func,
};
// validating proptypes
