import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/details";
import ScrollToTop from "./utils/ScrollToTop";

const RouteSwitch = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie-details" element={<Details />} />
      </Routes>
    </>
  );
};

export default RouteSwitch;
