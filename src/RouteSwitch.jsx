import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";

// Lazy load your page components
const Home = lazy(() => import("./pages/home"));
const Details = lazy(() => import("./pages/details"));
const Search = lazy(() => import("./components/search"));

const RouteSwitch = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
        <Route path="/movies/:id" element={<Suspense fallback={<div>Loading...</div>}><Details /></Suspense>} />
        <Route path="/search" element={<Suspense fallback={<div>Loading...</div>}><Search /></Suspense>} />
      </Routes>
    </>
  );
};

export default RouteSwitch;
