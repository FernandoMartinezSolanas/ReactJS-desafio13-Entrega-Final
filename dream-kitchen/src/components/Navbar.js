import React, { useState } from "react";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

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
        <NavLink to={"/"} className="navbar-brand" href="#">
          LOGO
        </NavLink>
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
              <NavLink to={"/"} className="nav-link active" aria-current="page">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                to={"/shop"}
                className="nav-link"
                href="./pages/shop.html"
              >
                Shop
              </NavLink>
              <ul className="menumenu">
                <li className="menu">
                  <NavLink to={"/porcelanato"} className="dropdown-item">
                    Porcelanatos
                  </NavLink>
                </li>
                <li className="menu">
                  <NavLink to={"/revestimiento"} className="dropdown-item">
                    Revestimientos
                  </NavLink>
                </li>
                <li className="menu">
                  <NavLink to={"/griferia"} className="dropdown-item">
                    Griferias
                  </NavLink>
                </li>
                <li className="menu">
                  <NavLink to={"/mesada"} className="dropdown-item">
                    Mesadas
                  </NavLink>
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
