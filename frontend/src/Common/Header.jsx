import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoImage from "../assets/7c829fba9e354e7d96fe6a44cd79f823.png";
import toggleBars from "../assets/bars-solid.svg";
import "./Header.css";
import Image from "./Image";

const Header = () => {
  // Mobile responsiveness
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header>
      <nav className="header-container">
        <div className="nav-img">
          <Link to={"/home"}>
            <Image src={logoImage} alt={"logo"} className={"logo"} />
          </Link>
        </div>

        <ul className={`nav-links ${navOpen ? "open" : ""}`}>
          <li className="close-menu">
            <button onClick={toggleNav}>Close menu</button>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destinations"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Destinations
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/bookings"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Bookings
            </NavLink>
          </li>
          <li>
            <span className="bordered-link">
              <NavLink
                to="/auth"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Sign In
              </NavLink>
            </span>
          </li>
        </ul>

        <div className="toggle-nav-bar" role="button" onClick={toggleNav}>
          <Image src={toggleBars} alt={"toggle nav bar"} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
