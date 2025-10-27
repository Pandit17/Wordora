import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite configuration optimized for GitHub Pages + React Router (HashRouter)
export default defineConfig({
  plugins: [react()],

  // Base URL for GitHub Pages
  // Replace "Wordora" if your repository name changes
  base: "/Wordora/",

  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
  },

  // Ensures proper file path resolution in production
  resolve: {
    alias: {
      "@": "/src",
    },
  },

  // Custom server configuration for local development
  server: {
    open: true, // Opens browser automatically
    port: 5173,
    host: true,
  },
});
