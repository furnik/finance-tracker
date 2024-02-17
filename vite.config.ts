import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/finance-tracker",
  server: {
    open: true,
    port: 5173,
  },
  optimizeDeps: {
    exclude: ["@react-oauth/google"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
