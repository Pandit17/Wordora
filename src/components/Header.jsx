// Defines the top navigation bar with brand name and page links.
// NavLink is used to apply an active class automatically based on the current route.

import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      {/* Application title or brand */}
      <div className="brand">Wordora</div>

      {/* Navigation links for main sections */}
      <nav>
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>
        <NavLink to="/browse" className={({ isActive }) => (isActive ? "active" : "")}>
          Browse
        </NavLink>
        <NavLink to="/add" className={({ isActive }) => (isActive ? "active" : "")}>
          Add Book
        </NavLink>
      </nav>
    </header>
  );
}
