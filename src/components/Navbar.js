import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  const fontStyles = {
    color: "#fff",
    fontSize: "1.5rem",
    marginRight: "2rem",
  };

  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/home" style={fontStyles}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/kids-shoes" style={fontStyles}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/men-shoes" style={fontStyles}>
              MovieQuotes
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/women-shoes" style={fontStyles}>
              Search
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}