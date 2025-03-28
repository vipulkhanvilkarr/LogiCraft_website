import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./", // Ensures correct paths in production
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
