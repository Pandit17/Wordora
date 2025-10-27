// Provides the shared structure for all pages, including the header, main content area, and footer.

import React from "react";
import Header from "./Header.jsx";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="app-root">
      {/* Renders the top navigation bar */}
      <Header />

      {/* Displays the routed page content within a centered container */}
      <main className="container">
        <Outlet />
      </main>

      {/* Shared footer visible across all pages */}
      <footer className="footer">
        <p>📚 Wordora — Online Book Library • Demo Project</p>
      </footer>
    </div>
  );
}
