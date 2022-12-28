import React from "react";
import Logo from "../images/logo.png";
import "../styles/navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img className="logo" src={Logo} alt="" />
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          </div>
            <ul className="ul navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/products">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
