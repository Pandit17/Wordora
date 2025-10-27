// Form component for adding a new book to the Redux store.

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice.js";

export default function AddBook() {
  // Local state to store form input values
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
    cover: "",
  });

  // Hook to dispatch Redux actions
  const dispatch = useDispatch();

  // Handles updates for all input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Creates a unique ID and dispatches the new book to the Redux store
    const payload = { id: Date.now().toString(), ...form };
    dispatch(addBook(payload));

    // Resets the form after submission
    setForm({
      title: "",
      author: "",
      category: "",
      description: "",
      rating: "",
      cover: "",
    });

    alert("Book added!");
  };

  return (
    <main className="container">
      {/* Header section for Add Book page */}
      <section className="hero">
        <h1>Add a New Book</h1>
        <p>
          Provide the book details below. You can use an image URL or a local path
          under <code>/src/assets</code> for the cover.
        </p>
      </section>

      {/* Form for entering book information */}
      <form className="add-form" onSubmit={handleSubmit}>
        <label>
          Title
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Author
          <input
            name="author"
            value={form.author}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Category
          <input
            name="category"
            value={form.category}
            onChange={handleChange}
          />
        </label>

        <label>
          Description
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
          />
        </label>

        <label>
          Rating
          <input
            name="rating"
            type="number"
            step="0.1"
            min="0"
            max="5"
            value={form.rating}
            onChange={handleChange}
          />
        </label>

        <label>
          Cover (path or URL)
          <input
            name="cover"
            value={form.cover}
            onChange={handleChange}
            placeholder="e.g. ./src/assets/book.jpg or https://..."
          />
        </label>

        <button type="submit" className="primary">
          Add Book
        </button>
      </form>
    </main>
  );
}
