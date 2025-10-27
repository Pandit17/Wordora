// Top navigation bar using NavLink to show active link state.

import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="brand">Wordora</div>
      <nav>
        {/* NavLink applies active styling automatically */}
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
