import Sidebar from "../components/layout/sidebar";
import MovieDetails from "../components/moviedetails/moviedetails";
import Wrapper from "../components/wrapper";

const Details = () => {
  return (
    <Wrapper className="flex">
      <Sidebar />
      <MovieDetails />
    </Wrapper>
  );
};

export default Details;
