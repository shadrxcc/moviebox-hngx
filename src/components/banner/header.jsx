import logo from "../../assets/tv.svg";
import search from "../../assets/Search.svg";
import menu from "../../assets/Menu.svg";
import { useLocation, useParams } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const { id } = useParams();

  return (
    <header
      className={`${
        location.pathname === `/movie/${id}` ? "md:hidden" : ""
      } text-white py-6 px-4 lg:px-20 flex justify-between items-center`}
    >
      <div className="flex max-w-full gap-x-2 md:gap-x-6 items-center">
        <img className="w-[40px]" src={logo} alt="moviebox logo" />
        <p className="text-lg font-bold leading-6">MovieBox</p>
      </div>

      <form className="hidden md:block" action="search">
        <div className="flex px-[10px] md:w-[25rem] lg:w-[35rem] py-[6px] border rounded-md border-[#D1D5DB] items-center">
          <input
            className="outline-none placeholder:text-white bg-transparent border-none w-full"
            type="search"
            placeholder="What do you want to watch?"
            name="search"
            id="search"
          />
          <img src={search} alt="" />
        </div>
      </form>

      <div className="flex gap-x-4 md:gap-x-7 items-center">
        <img className="md:hidden" src={search} alt="" />
        <p className="text-base hidden md:block font-bold leading-6">Sign in</p>
        <img src={menu} alt="" />
      </div>
    </header>
  );
};

export default Header;
