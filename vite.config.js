import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // Base must be './' for HashRouter (avoids Vite base URL conflicts)
  base: "./",

  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
