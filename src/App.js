import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./Header/Navbar/NavBar";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Logo from "./Header/Logo/Logo";

function App() {
  return (
    <div className="App">
      <Logo />
      <Router>
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
