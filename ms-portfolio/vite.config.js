import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()], // Use svgr plugin for SVG handling
  build: {
    outDir: 'dist',           // Specify output directory for build
    emptyOutDir: true,        // Clears the output directory before building
  },
  server: {
    port: 8080,               // Set the port for development server
  }
});
