import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [ViteImageOptimizer()],
  server: {
    proxy: {
      '/api': {
        target: 'https://main.d2k93d841gralt.amplifyapp.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});