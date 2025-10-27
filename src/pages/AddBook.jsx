// Simple form to add a book to the Redux store. Uses addBook action.

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice.js";

export default function AddBook() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
    cover: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // create id and dispatch
    const payload = { id: Date.now().toString(), ...form };
    dispatch(addBook(payload));
    // reset form
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
      <section className="hero">
        <h1>Add a New Book</h1>
        <p>Provide the book details below. Cover can be a local path under /public or an online URL.</p>
      </section>

      <form className="add-form" onSubmit={handleSubmit}>
        <label>
          Title
          <input name="title" value={form.title} onChange={handleChange} required />
        </label>

        <label>
          Author
          <input name="author" value={form.author} onChange={handleChange} required />
        </label>

        <label>
          Category
          <input name="category" value={form.category} onChange={handleChange} />
        </label>

        <label>
          Description
          <textarea name="description" value={form.description} onChange={handleChange} />
        </label>

        <label>
          Rating
          <input name="rating" type="number" step="0.1" min="0" max="5" value={form.rating} onChange={handleChange} />
        </label>

        <label>
          Cover (path or URL)
          <input name="cover" value={form.cover} onChange={handleChange} placeholder="/my-cover.jpg or https://..." />
        </label>

        <button type="submit" className="primary">Add Book</button>
      </form>
    </main>
  );
}
