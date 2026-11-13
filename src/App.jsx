import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import CityOfficials from "./pages/CityOfficials";
import CityRules from "./pages/CityRules";
import Contact from "./pages/Contact";
import TouristSpots from "./pages/TouristSpots";
import VoluntaryWorks from "./pages/VoluntaryWorks";
import OlongapoCityMap from "./pages/OlongapoCityMap";

export default function App() {
  return (
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
  );
}
