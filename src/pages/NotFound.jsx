// Fallback route for unknown URLs (404 message).

import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="container notfound-root">
      <h2>404 — Page Not Found</h2>
      <p>The page you are looking for doesn't exist.</p>
      <Link to="/" className="details-link">Go Home</Link>
    </main>
  );
}
