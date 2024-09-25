import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./layout/Nav";
import NavSm from "./layout/NavSm";
import Home from "./pages/Home/Home";
import Services from "./pages/services/Services";
import Footer from "./layout/Footer";
import Footer2 from "./layout/Footer2";
import "flowbite/dist/flowbite.css";
import AboutUs from "./pages/About/AboutUs";
import FAQ from "./pages/FAQ/FAQ";
import Contacts from "./pages/contacts/Contacts";

// import { Dropdown } from "flowbite-react";

// import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Nav />
      <NavSm />
      <div>
        <Routes>
          {/* <Route path="/nav" element={<Nav />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
      <Footer />
      <Footer2 />
    </Router>
  );
}

export default App;
