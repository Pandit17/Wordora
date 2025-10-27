// Defines the main application routes and applies the shared Layout component.

import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Browse from "./pages/Browse.jsx";
import BookDetails from "./pages/BookDetails.jsx";
import AddBook from "./pages/AddBook.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      {/* Layout wraps all routes and includes the header/navigation */}
      <Route element={<Layout />}>
        {/* Default route: Home page */}
        <Route index element={<Home />} />
        {/* Displays all books */}
        <Route path="browse" element={<Browse />} />
        {/* Dynamic route for book details using book ID */}
        <Route path="book/:id" element={<BookDetails />} />
        {/* Form to add a new book */}
        <Route path="add" element={<AddBook />} />
        {/* Fallback for any invalid route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
