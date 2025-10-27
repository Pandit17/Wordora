import React from 'react'
import { Link } from 'react-router-dom'

// Reusable Book card component used in Home and Browse
export default function BookCard({ book }) {
  return (
    <article className="book-card">
      <img src={book.cover} alt={`${book.title} cover`} className="cover" />
      <div className="info">
        <h3>{book.title}</h3>
        <p className="author">{book.author}</p>
        <p className="rating">Rating: {book.rating}</p>
        <Link to={`/book/${book.id}`} className="details-link">View Details</Link>
      </div>
    </article>
  )
}
