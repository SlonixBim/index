import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'admin-redirect',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/admin') {
            res.statusCode = 301;
            res.setHeader('Location', '/admin/');
            res.end();
            return;
          }
          if (req.url === '/admin/') {
            req.url = '/admin/index.html';
          }
          next();
        });
      },
    }
  ],
  server: {
    host: true,
  },
  build: {
    chunkSizeWarningLimit: 5000,
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
