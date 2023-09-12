import Header from "../components/banner/header";
import Sidebar from "../components/layout/sidebar";
import MovieDetails from "../components/moviedetails/moviedetails";
import Wrapper from "../components/wrapper";

const Details = () => {
  return (
    <>
      <Header />
      <Wrapper className="flex">
        <Sidebar />
        <MovieDetails />
      </Wrapper>
    </>
  );
};

export default Details;
