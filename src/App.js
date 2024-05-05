import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./Header/Navbar/NavBar";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Logo from "./Header/Logo/Logo";
import Home from "./Pages/Home/Home";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Services from "./Pages/Services/Services";

function App() {
  return (
    <div className="App">
    <div className="app-container">

      <Logo />
      <Router>
      {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} /> */}
        </Routes>
      </Router>
    </div>
    </div>
  );
}

export default App;
