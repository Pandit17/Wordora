# Wordora — React Book Management System (Vite)

This project is a **Book Management System** built with **React** and **Vite**, using functional components, routing, and Redux Toolkit for state. Styling is done with plain CSS. It includes search, filter, add, and details functionality.

It fulfills the assignment requirements:
- Vite project (required)
- Components: `Header`, `Layout`, `SearchBar`, `BookCard`, `Home`, `Browse`, `AddBook`, `BookDetails`, `NotFound`
- State & routing: Redux Toolkit for store; React Router DOM for navigation
- Dynamic list rendering with `map()` and unique keys
- Search and filter (by title/author/category) and form to add books
- Plain CSS for styling, with animations and responsive layout

## Live Demo

[https://pandit17.github.io/Wordora/](https://pandit17.github.io/Wordora/)


## Project structure
```

Wordora/
├─ public/
│  ├─ clean-code.jpg
│  ├─ dune.jpg
│  ├─ favicon.ico
│  ├─ martian.jpg
│  ├─ mockingbird.jpg
│  ├─ sapiens.jpg
│  └─ silent-patient.jpg
│
├─ src/
│  ├─ App.jsx
│  ├─ main.jsx
│  ├─ styles.css
│  ├─ data/
│  │  └─ books.js
│  ├─ redux/
│  │  ├─ store.js
│  │  └─ booksSlice.js
│  ├─ components/
│  │  ├─ Header.jsx
│  │  ├─ Layout.jsx
│  │  ├─ SearchBar.jsx
│  │  └─ BookCard.jsx
│  ├─ pages/
│  │  ├─ Home.jsx
│  │  ├─ Browse.jsx
│  │  ├─ AddBook.jsx
│  │  ├─ BookDetails.jsx
│  │  └─ NotFound.jsx
│
├─ .gitignore
├─ README.md
├─ eslint.config.js
├─ index.html
├─ package.json
├─ package-lock.json
└─vite.config.js

````

## Setup & Run (development)
1. Make sure you have Node.js (v16+) and npm installed.  
2. In the project folder, run:
   ```bash
   npm install
   npm run dev
````

3. Open the app:

   ```
   http://localhost:5173
   ```

## Build & Deploy (GitHub Pages)

1. Add the `gh-pages` package as a dev dependency:

   ```bash
   npm install --save-dev gh-pages
   ```
2. Add these scripts to `package.json`:

   ```json
   "scripts": {
     "dev": "vite",
     "build": "vite build",
     "preview": "vite preview",
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Create the production build and publish to GitHub Pages:

   ```bash
   npm run deploy
   ```
4. After deploy, GitHub Pages URL will be:

   ```
   https://<your-username>.github.io/Wordora
   ```

   (Ensure your repo is named `Wordora` and you pushed `main` to GitHub.)

## Notes

* Public folder contains all book cover images and `favicon.ico` so images work without additional configuration.
* When deploying, allow a minute for GitHub Pages to publish; if the demo is not visible immediately, refresh after a short wait.

## Setup & Run (production preview)

```bash
npm run build
npm run preview
```


