// Redux slice for managing the collection of books
import { createSlice } from "@reduxjs/toolkit";
import { books as initialBooks } from "../data/books.js";

// Defines a slice of Redux state named 'books'
const booksSlice = createSlice({
  name: "books",
  initialState: { items: initialBooks },

  // Reducer functions for updating state
  reducers: {
    // Adds a new book to the beginning of the list
    addBook: (state, action) => {
      state.items.unshift(action.payload);
    },
  },
});

// Exports the action creator and the reducer
export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
