import React, { useState } from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY > 75) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav
      className={
        navbar
          ? "navbar fixed-top navbar-expand-lg navbar-light active"
          : "navbar fixed-top navbar-expand-lg navbar-light"
      }
    >
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand" href="#">
          LOGO
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to={"/"}
                className="nav-link active"
                aria-current="page"
                href="index.html"
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link to={"/shop"} className="nav-link" href="./pages/shop.html">
                Shop
              </Link>
              <ul className="menumenu">
                <li className="menu">
                  <Link to={"/porcelanato"} className="dropdown-item">
                    Porcelanatos
                  </Link>
                </li>
                <li className="menu">
                  <Link to={"/revestimiento"} className="dropdown-item">
                    Revestimientos
                  </Link>
                </li>
                <li className="menu">
                  <Link to={"/griferia"} className="dropdown-item">
                    Griferias
                  </Link>
                </li>
                <li className="menu">
                  <Link to={"/mesada"} className="dropdown-item">
                    Mesadas
                  </Link>
                </li>
              </ul>
            </li>
            <CartWidget />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
