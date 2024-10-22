import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path'; // Required for resolving paths

export default defineConfig({
  plugins: [react(), svgr()], // Use svgr plugin for SVG handling
  build: {
    outDir: 'dist',           // Specify output directory for build
    emptyOutDir: true,        // Clears the output directory before building
  },
  server: {
    port: 8080,               // Set the port for development server
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@pages': path.resolve(__dirname, 'src/pages'), // New alias for pages

    },
  },
});
