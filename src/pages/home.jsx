import { useContext } from "react";
import Banner from "../components/banner/banner";
import Featuredsection from "../components/featured/featuredsection";
import Footer from "../components/layout/footer";
import Wrapper from "../components/wrapper";
import Search from "../components/search";
import { SearchContext } from "../components/context/searchcontext";

const Home = () => {
  const { search, hideSearch, showSearch } = useContext(SearchContext)

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
