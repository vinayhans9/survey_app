import { defineConfig } from 'vite';
import tsconfigPaths from "vite-tsconfig-paths";
import path from 'path';

export default defineConfig({
  define: {
    "process.env": {
      NODE_ENV: "production"
    }
  },
  plugins: [tsconfigPaths()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  build: {
    lib: {
      entry: "./src/index.tsx",
      name: "widget",
      fileName: (format) => `widget.${format}.js`
    },
    target: "esnext"
  }
});
