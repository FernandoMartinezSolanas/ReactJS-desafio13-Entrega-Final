import React, { useState } from "react";
import CartWidget from "./CartWidget";

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
        <a className="navbar-brand" href="#">
          LOGO
        </a>
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
              <a
                className="nav-link active"
                aria-current="page"
                href="index.html"
              >
                Inicio
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="./pages/shop.html">
                Shop
              </a>
              <ul className="menumenu">
                <li className="menu">
                  <a
                    className="dropdown-item"
                    href="./pages/nosotros.html#historia"
                  >
                    Porcelanatos
                  </a>
                </li>
                <li className="menu">
                  <a
                    className="dropdown-item"
                    href="./pages/nosotros.html#calidad"
                  >
                    Revestimientos
                  </a>
                </li>
                <li className="menu">
                  <a
                    className="dropdown-item"
                    href="./pages/nosotros.html#medioambiente"
                  >
                    Griferias
                  </a>
                </li>
                <li className="menu">
                  <a
                    className="dropdown-item"
                    href="./pages/nosotros.html#medioambiente"
                  >
                    Mesadas
                  </a>
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
