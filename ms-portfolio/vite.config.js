import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react(), svgr()], // Changed from svg() to svgr()
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'ms-portfolio'),
    },
  },
});