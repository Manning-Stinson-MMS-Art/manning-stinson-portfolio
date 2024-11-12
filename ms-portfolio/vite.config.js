// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
  plugins: [react(), svgr()],
  
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    // Optional: Add sourcemaps for production
    sourcemap: true,
    // Optional: Add chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },
  
  server: {
    port: 8080,
    // Optional: Auto-open browser
    open: true,
    // Optional: Enable CORS
    cors: true,
    // Optional: Configure HMR
    hmr: {
      overlay: true,
    },
  },
  
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
    // Optional: Add extensions to resolve automatically
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@styles/index" as *;
          @import "@styles/tailwind.css";
        `,
        // Optional: Add sourcemaps
        sourceMap: true,
      },
    },
    // Optional: Configure PostCSS
    postcss: {
      plugins: [
        // Add any PostCSS plugins here
      ],
    },
  },
  
  // Optional: Add optimizations
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});