
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Qualquer requisição que comece com /api será redirecionada para o Node
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      }
    }
  }
});
