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
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          LOGO
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="index.html">
                Inicio
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="./pages/shop.html">
                Shop
              </a>
              <ul class="menumenu">
                <li class="menu">
                  <a
                    class="dropdown-item"
                    href="./pages/nosotros.html#historia"
                  >
                    Porcelanatos
                  </a>
                </li>
                <li class="menu">
                  <a class="dropdown-item" href="./pages/nosotros.html#calidad">
                    Revestimientos
                  </a>
                </li>
                <li class="menu">
                  <a
                    class="dropdown-item"
                    href="./pages/nosotros.html#medioambiente"
                  >
                    Griferias
                  </a>
                </li>
                <li class="menu">
                  <a
                    class="dropdown-item"
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
