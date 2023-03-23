import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";
import "./NavbarStyles.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            {" "}
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              خانه
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              محصولات
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              سرویس ها
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              ارتباط با ما
            </Link>
          </li>
        </ul>
        <div
          onClick={handleClick}
          className="hamburger"
          style={{ position: "relative" }}
        >
          {click ? (
            <FaTimes
              size={25}
              style={{ color: "#fff", position: "absolute", right: "0" }}
            />
          ) : (
            <FaBars size={25} style={{ position: "absolute", right: "0" }} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
