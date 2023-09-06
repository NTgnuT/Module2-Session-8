import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
        style={{ background: "black" }}
      >
        <div className="container">
          <a className="navbar-brand" href="#page-top">
            <img src="./img/navbar-logo.svg" alt="..." />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars ms-1" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to={"/"}>
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/Portfolio"}>
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/About"}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/Team"}>
                  Team
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/Contact"}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
