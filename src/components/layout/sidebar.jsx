import logo from "../../assets/tv.svg";
import { sidenav } from "../data/sidenav";
import logout from "../../assets/Logout.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="text-black hidden md:flex fixed flex-col justify-evenly rounded-br-[45px] rounded-tr-[45px] px-5 border-r w-fit h-screen">
      <Link to={`/`}> <div className="flex items-center gap-x-6">
        <img className="w-[40px]" src={logo} alt="" />
        <p className="text-lg font-bold leading-6">MovieBox</p>
      </div></Link>
     

      <div>
        <ul className="flex flex-col gap-y-9 justify-center">
          {sidenav.map((link) => {
            return (
              <li className="flex gap-x-[15px] items-center" key={link.id}>
                <img src={link.icon} alt="" />
                <p className="text-xl font-semibold">{link.text}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="quiz flex flex-col justify-center gap-y-2 p-4">
        <p className="text-[15px] font-semibold">
          Play movie quizes and earn free tickets
        </p>
        <p className="text-xs font-medium">50k people are playing now</p>
        <button className="text-xs text-[#BE123C] py-2 px-4 rounded-[30px] bg-buttonfaintred font-medium">
          Start playing
        </button>
      </div>

      <button className="flex items-center">
        <img src={logout} alt="" />
        Log out
      </button>
    </div>
  );
};

export default Sidebar;
