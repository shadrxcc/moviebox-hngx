import logo from "../assets/tv.svg";
import search from "../assets/search.svg";
import menu from "../assets/menu.svg";

const Header = () => {
  return (
    <header className="text-white py-6 px-8 lg:px-20 flex justify-between items-center">
      <div className="flex max-w-full gap-x-6 items-center">
        <img className="w-[40px]" src={logo} alt="moviebox logo" />
        <p className="text-lg font-bold leading-6">MovieBox</p>
      </div>

      <form action="search">
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

      <div className="flex gap-x-7 items-center">
        <p className="text-base font-bold leading-6">Sign in</p>
        <img src={menu} alt="" />
      </div>
    </header>
  );
};

export default Header;
