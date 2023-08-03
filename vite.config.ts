import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@config": path.resolve(__dirname, "src/config"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@modules": path.resolve(__dirname, "node_modules"),
    },
  },
});
