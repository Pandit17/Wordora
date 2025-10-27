import React from "react";
import { Link } from "react-router-dom";

// Displays individual book details inside a styled card component
export default function BookCard({ book }) {
  return (
    <article className="book-card">
      {/* Book cover image */}
      <img src={book.cover} alt={`${book.title} cover`} className="cover" />

      {/* Book information section */}
      <div className="info">
        <h3>{book.title}</h3>
        <p className="author">{book.author}</p>
        <p className="rating">Rating: {book.rating}</p>

        {/* Link to detailed book view */}
        <Link to={`/book/${book.id}`} className="details-link">
          View Details
        </Link>
      </div>
    </article>
  );
}
