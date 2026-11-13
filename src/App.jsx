import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import CityOfficials from "./pages/CityOfficials";
import CityRules from "./pages/CityRules";
import Contact from "./pages/Contact";
import TouristSpots from "./pages/TouristSpots";
import VoluntaryWorks from "./pages/VoluntaryWorks";
import OlongapoCityMap from "./pages/OlongapoCityMap";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollProgress />
      <ScrollToTop />
      <div key={pathname} className="page-enter flex min-h-screen flex-col">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/officials" element={<CityOfficials />} />
          <Route path="/rules" element={<CityRules />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tourist-spots" element={<TouristSpots />} />
          <Route path="/voluntary-works" element={<VoluntaryWorks />} />
          <Route path="/map" element={<OlongapoCityMap />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <BackToTop />
    </>
  );
}
