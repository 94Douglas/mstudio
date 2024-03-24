import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="btn-container">
        <Link className="btn-navbar" to={"/"}>
          Hem
        </Link>

        <Link className="btn-navbar" to={"/about-us"}>
          Om oss
        </Link>

        <Link className="btn-navbar">Kontakta oss</Link>

        <Link
          className="btn-navbar"
          target="_blank"
          rel="noopener noreferrer"
          to={"https://www.bokadirekt.se/places/m-studio-strandvagen-50691"}
        >
          Boka
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
