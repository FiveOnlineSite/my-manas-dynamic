import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AOS from "aos";
import WOW from "wowjs";
import Scope from "./pages/Scope";
import AboutUs from "./pages/AboutUs";
import Scholarship from "./pages/Scholarship";
import Donate from "./pages/Donate";
import Institution from "./pages/Institution";
import Academy from "./pages/Academy";
import ContactUs from "./pages/ContactUs";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Vidhya from "./pages/Vidhya";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-scope" element={<Scope />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/scholarships" element={<Scholarship />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/institutions" element={<Institution />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/vidhya-vanam" element={<Vidhya />} />
        <Route path="/news" element={<News />} />
        <Route path="/news-detail" element={<NewsDetail />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
