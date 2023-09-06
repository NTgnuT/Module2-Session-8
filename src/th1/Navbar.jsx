import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            type="button"
            id="sidebarCollapse"
            className="btn
                      btn-primary"
          >
            <i className="fa fa-bars" />
            <span className="sr-only">Toggle Menu</span>
          </button>
          <button
            className="btn btn-dark d-inline-block d-lg-none
                      ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle
                      navigation"
          >
            <i className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to={"/"}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/about"}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/portfolio"}>
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/contact"}>
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
