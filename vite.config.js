import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuration for Vite + React + GitHub Pages
export default defineConfig({
  plugins: [react()],
  
  // Important: this tells GitHub Pages where your app is served from
  base: "/Wordora/",
});
