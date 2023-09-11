import Sidebar from "../components/layout/sidebar";
import Wrapper from "../components/wrapper";
import watch from "../../src/assets/watch.svg";
import star from "../../src/assets/Star.svg";
import Button from "../components/ui/button";
import tickets from "../../src/assets/TwoTickets.svg";
import list from "../../src/assets/List.svg";

const Details = () => {
  return (
    <Wrapper className="flex">
      <Sidebar />
      <div className="text-black md:ml-[13rem] p-2 md:p-8 overflow-y-auto flex-1">
        <div className="trailer flex flex-col justify-center w-full">
          <div className="flex flex-col items-center">
            <img src={watch} alt="" />
            <p className="text-2xl font-medium text-[#E8E8E8]">Watch Trailer</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-y-4 py-8 md:items-center">
          <div className="flex flex-col md:flex-row gap-y-4 gap-x-4 md:items-center">
            <p className="text-2xl font-medium text-[#404040]">
              Top Gun: Maverick • 2022 • PG-13 • 2h 10m
            </p>
            <div className="flex gap-x-3">
              <button className="tag">Action</button>
              <button className="tag">Drama</button>
            </div>
          </div>

          <div className="flex items-center gap-x-2">
            <img src={star} alt="" />
            <span className="flex items-center gap-x-2">
              <p className="text-[#E8E8E8] font-medium text-2xl">8.5</p>
              <p className="text-[#666] font-medium">|</p>
              <p className="text-xl text-[#666] font-medium">350k</p>
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex-[1.4_1_0]"> 
            <p>
              After thirty years, Maverick is still pushing the envelope as a
              top naval aviator, but must confront ghosts of his past when he
              leads TOP GUN&apos;s elite graduates on a mission that demands the
              ultimate sacrifice from those chosen to fly it.
            </p>

            <p>Director : Joseph Kosinski</p>

            <p>Stars : Tom Cruise, Jennifer Connelly, Miles Teller</p>

            <span className="flex gap-x-6 items-center border border-[#C7C7C7] rounded-[10px]">
              <Button className="bg-buttonred text-white text-xl font-medium">
                Top rated movie #65
              </Button>
              <p>Awards 9 nominations</p>
            </span>
          </div>

          <div className="flex-1">
            <div>
              <Button className="bg-buttonred w-full text-white gap-x-[10px] justify-center text-xl font-medium flex items-center">
                <img src={tickets} alt="" />
                <p>See Showtimes</p>
              </Button>
              <Button className="bg-buttonfaintred w-full text-[#333] justify-center text-xl  gap-x-[10px] font-medium flex items-center">
                <img src={list} alt="" />
                <p>More watch options</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Details;
