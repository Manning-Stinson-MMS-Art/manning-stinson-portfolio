import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';  // Correctly import svgr
import { resolve } from 'path';

export default defineConfig({
  plugins: [react(), svgr()],  // Corrected the syntax for svgr
  build: {
    outDir: 'dist',           // Specify the output directory
    emptyOutDir: true,        // Clears the output directory before building
  },
  server: {
    port: 8080,               // Set custom port for development
  },
  resolve: {
    alias: {
      // Resolve node_modules in the ms-portfolio subdirectory
      '@': resolve(__dirname, 'ms-portfolio'), 
    },
  },
});
