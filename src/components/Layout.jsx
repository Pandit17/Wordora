// Provides the shared page wrapper: Header, main content area (Outlet), and footer.

import React from "react";
import Header from "./Header.jsx";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="app-root">
      <Header />
      {/* Main page content is centered via .container */}
      <main className="container">
        <Outlet />
      </main>
      <footer className="footer">
        <p>📚 Wordora — Online Book Library • Demo Project</p>
      </footer>
    </div>
  );
}
