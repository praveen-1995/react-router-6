import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* ============Implicit Return========== */}
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "link")}
      >
        Home
      </NavLink>

      {/*============ Explicit Return============ */}
      <NavLink
        to="/about"
        className={({ isActive }) => {
          return isActive ? "active" : "link";
        }}
      >
        About
      </NavLink>
      {/*============= Inline Styling=============== */}
      <NavLink
        to="/products"
        style={({ isActive }) => {
          return { color: isActive ? "#645cff" : "#64748b" };
        }}
      >
        Products
      </NavLink>
    </nav>
  );
};

export default Navbar;
