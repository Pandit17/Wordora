import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite configuration for React Router + GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: "/Wordora/", // Matches your GitHub repo name exactly

  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
  },

  resolve: {
    alias: {
      "@": "/src",
    },
  },

  server: {
    open: true,
    port: 5173,
    host: true,
  },
});
