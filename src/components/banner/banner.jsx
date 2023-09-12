import Header from "./header";
import Hero from "./hero";
import Wrapper from "../wrapper";
import PropTypes from "prop-types";

const Banner = (props) => {
  return (
    <Wrapper className="banner flex flex-col gap-y-16">
      <Header setSearch={props.setSearch} />
      <Hero />
    </Wrapper>
  );
};

export default Banner;

Banner.propTypes = {
  setSearch: PropTypes.func,
};
