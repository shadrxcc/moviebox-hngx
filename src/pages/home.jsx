import { useState } from "react";
import Banner from "../components/banner/banner";
import Featuredsection from "../components/featured/featuredsection";
import Footer from "../components/layout/footer";
import Wrapper from "../components/wrapper";
import Search from "../components/search";

const Home = () => {
  const [search, setSearch] = useState(false);

  const hideSearch = () => {
    setSearch(false);
  };

  const showSearch = () => {
    setSearch(true);
  };
  return (
    <>
      {search && <Search onClose={hideSearch} />}
      <Wrapper className="flex flex-col gap-y-8 lg:gap-y-[70px]">
        <Banner setSearch={showSearch} />
        <Featuredsection />
        <Footer />
      </Wrapper>
    </>
  );
};

export default Home;
