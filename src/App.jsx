import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./layout/Nav";
import Home from "./pages/Home/Home";

// import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Nav />
      <div>
        <Routes>
          {/* <Route path="/nav" element={<Nav />} /> */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
