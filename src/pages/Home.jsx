// Landing page that shows a hero and a small featured grid.

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Home() {
  const books = useSelector((state) => state.books.items || []);
  const featured = books.slice(0, 4);

  return (
    <main className="container home-page">
      <section className="hero">
        <h1>Welcome to Wordora</h1>
        <p>Discover timeless classics and modern favorites. Find your next read.</p>
      </section>

      <h2 className="section-heading">Featured Books</h2>

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
