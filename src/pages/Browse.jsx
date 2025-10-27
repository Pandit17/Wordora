// Displays all books with live search and category-based filtering.

import React, { useState } from "react";
import { books as booksData } from "../data/books"; 

export default function Browse() {
  // Stores user search query and selected category
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  // Filters books based on query and category
  const filteredBooks = booksData.filter((book) => {
    const matchesQuery =
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === "all" || book.category === category;
    return matchesQuery && matchesCategory;
  });

  // Prevents form submission when pressing Enter inside the search field
  const handleKeyPress = (e) => {
    if (e.key === "Enter") e.preventDefault();
  };

  return (
    <div className="container">
      {/* Search input and category dropdown */}
      <div className="controls">
        <input
          type="text"
          placeholder="🔍 Search by title or author..."
          className="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
          aria-label="Search books"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Filter by category"
        >
          <option value="all">All Categories</option>
          <option value="fiction">Fiction</option>
          <option value="nonfiction">Non-fiction</option>
          <option value="mystery">Mystery</option>
          <option value="romance">Romance</option>
          <option value="fantasy">Fantasy</option>
        </select>
      </div>

      {/* Displays filtered books or a fallback message */}
      <div className="grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.cover} alt={book.title} className="cover" />
              <div className="info">
                <h3>{book.title}</h3>
                <p className="author">{book.author}</p>
                <a href={`/book/${book.id}`} className="details-link">
                  View Details →
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="no-books">❌ No books found matching “{query}”</p>
        )}
      </div>
    </div>
  );
}
