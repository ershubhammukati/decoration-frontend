import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Headers from "./layout/Headers";
import ContactForm from "./components/ContactForm";
import Banner from "./components/Banner";
import Home from "./pages/Home";
import Footer from "./layout/Footer";
import About from "./pages/About"; 
import Rental from "./pages/Rental";
import BackdropDetail from "./pages/details/BackdropDetail";
import PedestalDetail from "./pages/details/PedestalDetail";
import Owner from './components/Owner';
import Prices from './components/Prices';
import GalleryPage from "./pages/GalleryPage";
import ServicePage from "./pages/details/ServicePage";
function App() {
  return (
    <Router>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactForm />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/rental" element={<Rental />} />
        <Route path="/rental/backdrops" element={<BackdropDetail />} />
        <Route path="/rental/pedestals" element={<PedestalDetail />} />
        <Route path="/owner" element={<Owner />} /> 
         <Route path="/prices" element={<Prices />} />
         <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/services/:serviceName" element={<ServicePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
