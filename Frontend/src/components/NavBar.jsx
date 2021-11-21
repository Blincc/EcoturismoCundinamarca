/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container-fluid">
          <div>
            <Link className="navbar-brand" to="/">
              <h1 className="display-5 fst-italic">
              <img src="https://img.icons8.com/plasticine/96/000000/national-park.png"/>
                Ecoturismo en Cundinamarca
              </h1>
            </Link>
          </div>

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
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/">
                  <h4>
                  <img src="https://img.icons8.com/plasticine/50/000000/street-view.png"/>
                    Inicio
                  </h4>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Lugares">
                  <h4>
                  <img src="https://img.icons8.com/plasticine/50/000000/country.png"/>
                    Lugares por conocer
                  </h4>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Reserva-Viaje">
                  <h4>
                    <img src="https://img.icons8.com/plasticine/50/000000/add-file.png" />
                    Realizar Reservacion
                  </h4>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/VerReservacion">
                  <h4>
                    <img src="https://img.icons8.com/plasticine/50/000000/view.png" />
                    Ver Reservacion
                  </h4>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Equipo-trabajo">
                  <h4>
                    <img src="https://img.icons8.com/plasticine/50/000000/crowd.png" />
                    Equipo de trabajo
                  </h4>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
