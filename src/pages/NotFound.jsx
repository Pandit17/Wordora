// Component displayed when a user visits a non-existent route (404 page).

import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="container notfound-root">
      {/* Main 404 message */}
      <h2>404 — Page Not Found</h2>
      <p>The page you are looking for doesn’t exist or may have been moved.</p>

      {/* Link to return to homepage */}
      <Link to="/" className="details-link">
        Go Home
      </Link>
    </main>
  );
}
