import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";

const Footer = () => {
  return (
    <div className="flex flex-col gap-y-[36px] py-20 items-center">
      <div className="flex gap-x-[48px] items-center">
        <img src={facebook} alt="facebook icon" />
        <img src={instagram} alt="instagram icon" />
        <img src={twitter} alt="twitter icon" />
        <img src={youtube} alt="youtube icon" />
      </div>

      <div className="flex flex-col md:flex-row items-center text-[#111827] text-base md:text-lg font-bold gap-x-[48px]">
        <p>Conditions of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
      </div>

      <div>
        <p className="text-[#6B7280] text-center text-xs md:text-lg font-bold">
          © 2021 MovieBox by Adriana Eka Prayudha & built by shadrxcc ;){" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
