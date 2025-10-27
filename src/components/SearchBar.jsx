// A reusable search input component for filtering books by title or author.

import React from "react";

export default function SearchBar({ value, onChange, placeholder }) {
  return (
    // Controlled input that triggers onChange when the user types
    <input
      type="search"
      className="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder || "Search by title or author"}
      aria-label="Search books"
    />
  );
}
