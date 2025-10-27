// Imports book cover images from the assets folder for local access
import dune from "../assets/dune.jpg";
import martian from "../assets/martian.jpg";
import sapiens from "../assets/sapiens.jpg";
import mockingbird from "../assets/mockingbird.jpg";
import silentPatient from "../assets/silent-patient.jpg";
import cleanCode from "../assets/clean-code.jpg";

// Exports an array of book objects with details used across the app
export const books = [
  {
    id: 1,
    title: "Dune",
    author: "Frank Herbert",
    rating: 4.8,
    cover: dune,
    description:
      "A science fiction masterpiece about politics, power, and survival on the desert planet Arrakis.",
  },
  {
    id: 2,
    title: "The Martian",
    author: "Andy Weir",
    rating: 4.7,
    cover: martian,
    description:
      "An astronaut stranded on Mars must use his ingenuity and spirit to survive.",
  },
  {
    id: 3,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    rating: 4.6,
    cover: sapiens,
    description:
      "An exploration of how Homo sapiens came to dominate the Earth and shape civilizations.",
  },
  {
    id: 4,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    rating: 4.9,
    cover: mockingbird,
    description:
      "A profound novel about race, justice, and moral growth in the American South.",
  },
  {
    id: 5,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    rating: 4.4,
    cover: silentPatient,
    description:
      "A psychological thriller about a woman’s act of violence and the therapist obsessed with uncovering her motive.",
  },
  {
    id: 6,
    title: "Clean Code",
    author: "Robert C. Martin",
    rating: 4.8,
    cover: cleanCode,
    description:
      "A guide to writing readable, maintainable, and efficient code for software developers.",
  },
];
