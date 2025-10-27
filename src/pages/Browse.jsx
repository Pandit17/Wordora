// Displays all books with search and category filtering.

import React, { useState } from "react";
import booksData from "../data/books";

export default function Browse() {
  const [query, setQuery] = useState(""); // Stores search input
  const [category, setCategory] = useState("all"); // Stores selected category

  // Filters books based on search query and selected category
  const filteredBooks = booksData.filter((book) => {
    const matchesQuery =
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase());
    const matchesCategory =
      category === "all" || book.category === category;
    return matchesQuery && matchesCategory;
  });

  // Prevents page reload on pressing Enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div className="container">
      {/* Search and category controls */}
      <div className="controls">
        <input
          type="text"
          placeholder="🔍 Search by title or author..."
          className="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="fiction">Fiction</option>
          <option value="nonfiction">Non-fiction</option>
          <option value="mystery">Mystery</option>
          <option value="romance">Romance</option>
          <option value="fantasy">Fantasy</option>
        </select>
      </div>

      {/* Grid of filtered books */}
      <div className="grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.cover} alt={book.title} className="cover" />
              <div className="info">
                <h3>{book.title}</h3>
                <p className="author">{book.author}</p>
                <a href={`/details/${book.id}`} className="details-link">
                  View Details →
                </a>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", width: "100%" }}>
            ❌ No books found matching “{query}”
          </p>
        )}
      </div>
    </div>
  );
}
