import { useContext } from "react";
import Header from "../components/banner/header";
import Sidebar from "../components/layout/sidebar";
import MovieDetails from "../components/moviedetails/moviedetails";
import Wrapper from "../components/wrapper";
import { SearchContext } from "../components/context/searchcontext";
import Search from "../components/search";

const Details = () => {
  const { search, hideSearch, showSearch } = useContext(SearchContext)
  return (
    <>
    {search && <Search onClose={hideSearch}/>}
      <Header setSearch={showSearch}/>
      <Wrapper className="flex">
        <Sidebar />
        <MovieDetails />
      </Wrapper>
    </>
  );
};

export default Details;
