import React, { useState } from "react";

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
            <li class="nav-item nav-item-cart">
              <svg
                xmlns=" http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-bag"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
