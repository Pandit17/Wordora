// Configures the Redux store that holds the global application state
import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice.js";

// Creates the Redux store and combines all feature reducers
const store = configureStore({
  reducer: {
    books: booksReducer, // Manages the 'books' state slice
  },
});

// Exports the configured store for use in the app
export default store;
