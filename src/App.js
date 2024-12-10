import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Logo from "./Header/Logo/Logo";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
    <div className="app-container">

      <Logo />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
    </div>
  );
}

export default App;
