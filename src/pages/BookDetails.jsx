// Displays detailed information about a selected book based on its URL parameter (id).

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function BookDetails() {
  // Extracts the book ID from the URL
  const { id } = useParams();

  // Used to navigate back to the previous page
  const navigate = useNavigate();

  // Retrieves the selected book from Redux store
  const book = useSelector((state) =>
    state.books.items.find((b) => b.id === id)
  );

  // Fallback for invalid or missing book ID
  if (!book) {
    return (
      <main className="container">
        <p className="no-books">Book not found.</p>
      </main>
    );
  }

  return (
    <main className="container">
      {/* Back navigation button */}
      <button className="back" onClick={() => navigate(-1)}>
        ← Back
      </button>

      {/* Book details section */}
      <div className="details-card">
        <img className="cover-large" src={book.cover} alt={book.title} />
        <div>
          <h2>{book.title}</h2>
          <p>
            <strong>Author:</strong> {book.author}
          </p>
          <p>
            <strong>Category:</strong> {book.category}
          </p>
          <p>{book.description}</p>
          <p>
            <strong>Rating:</strong> ⭐ {book.rating}
          </p>
        </div>
      </div>
    </main>
  );
}
