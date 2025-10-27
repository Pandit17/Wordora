// Shows detailed information about a single book using the URL param id.

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = useSelector((state) =>
    state.books.items.find((b) => b.id === id)
  );

  if (!book) {
    return (
      <main className="container">
        <p className="no-books">Book not found.</p>
      </main>
    );
  }

  return (
    <main className="container">
      <button className="back" onClick={() => navigate(-1)}>
        ← Back
      </button>

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
