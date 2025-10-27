// Redux slice for managing books. Keeps initial data and a simple addBook reducer.

import { createSlice } from "@reduxjs/toolkit";
import initialBooks from "../data/books.js";

const booksSlice = createSlice({
  name: "books",
  initialState: { items: initialBooks },
  reducers: {
    // Adds a new book at the front of the list
    addBook: (state, action) => {
      state.items.unshift(action.payload);
    },
  },
});

// Export action creators and reducer
export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
