// Form for adding a new book with validation for cover URL
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
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate image URL or local filename
    if (
      form.cover &&
      !/^https?:\/\/.+\.(jpg|jpeg|png)$/i.test(form.cover) &&
      !/\.(jpg|jpeg|png)$/i.test(form.cover)
    ) {
      alert("Please enter a valid image URL or file name ending with .jpg or .png");
      return;
    }

    const payload = { id: Date.now().toString(), ...form };
    dispatch(addBook(payload));
    alert("✅ Book added successfully!");

    // Reset form
    setForm({
      title: "",
      author: "",
      category: "",
      description: "",
      rating: "",
      cover: "",
    });
  };

  return (
    <main className="container">
      <section className="hero">
        <h1>Add a New Book</h1>
        <p>Provide the book details below. Cover must be a valid image link or local file.</p>
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
          Cover (URL or file name)
          <input
            name="cover"
            value={form.cover}
            onChange={handleChange}
            placeholder="e.g. /dune.jpg or https://example.com/cover.png"
          />
        </label>

        <button type="submit" className="primary">Add Book</button>
      </form>
    </main>
  );
}
