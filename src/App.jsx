// Defines top-level routes and attaches the Layout wrapper.

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
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="browse" element={<Browse />} />
        <Route path="book/:id" element={<BookDetails />} />
        <Route path="add" element={<AddBook />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
