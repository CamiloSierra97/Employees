import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <div className="header__logo__container">
          <h1 className="header__logo">
            <i className="bx bxs-shopping-bags"></i>
          </h1>
        </div>
      </NavLink>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <NavLink
              className={({ isActive }) => (isActive ? "link__active" : "link")}
              to="/login"
            >
              <p className="header__item-text">Home</p>
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink
              className={({ isActive }) => (isActive ? "link__active" : "link")}
              to="/purchases"
            >
              <i className="bx bxs-box"></i>
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink
              className={({ isActive }) => (isActive ? "link__active" : "link")}
              to="/cart"
            >
              <i className="bx bx-cart-alt"></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
