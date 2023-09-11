import Wrapper from "./Wrapper";
import Header from "./header";
import Hero from "./hero";

const Banner = () => {
  return (
    <Wrapper className="banner flex flex-col gap-y-16">
      <Header />
      <Hero />
    </Wrapper>
  );
};

export default Banner;
