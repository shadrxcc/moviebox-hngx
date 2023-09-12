import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/details";
import ScrollToTop from "./utils/ScrollToTop";
import Search from "./components/search";
// import Footer from "./components/layout/footer";

const RouteSwitch = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Details />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      {/* <Footer/> */}
    </>
  );
};

export default RouteSwitch;
