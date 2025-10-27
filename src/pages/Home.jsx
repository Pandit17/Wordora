// Landing page displaying the hero section and featured book previews.

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Home() {
  // Retrieve all books from Redux store
  const books = useSelector((state) => state.books.items || []);
  const featured = books.slice(0, 4); // Select first four as featured

  return (
    <main className="container home-page">
      {/* Hero section introducing the app */}
      <section className="hero">
        <h1>Welcome to Wordora</h1>
        <p>Discover timeless classics and modern favorites. Find your next read.</p>
      </section>

      <h2 className="section-heading">Featured Books</h2>

      {/* Display featured books or fallback message */}
      <div className="grid">
        {featured.length === 0 ? (
          <p className="no-books">No featured books.</p>
        ) : (
          featured.map((b) => (
            <article className="book-card" key={b.id}>
              <img className="cover" src={b.cover} alt={b.title} />
              <div className="info">
                <h3>{b.title}</h3>
                <p className="author">{b.author}</p>
                <Link to={`/book/${b.id}`} className="details-link">
                  View Details →
                </Link>
              </div>
            </article>
          ))
        )}
      </div>
    </main>
  );
}
