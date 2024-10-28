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
  },
  
  server: {
    port: 8080,
  },
  
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@pages': path.resolve(__dirname, 'src/pages'),
    },
  },
  
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@styles/variables.scss";
          @import "@styles/mixins.scss";
          @import "@styles/base.scss";
          @import "@styles/reset.scss";
          @import "@styles/fonts.scss";
          @import "@styles/typography.scss";
          @import "@styles/utilities.scss";
          @import "@styles/animations.scss";
          @import "@styles/device-styles/x-small.scss";
          @import "@styles/device-styles/small.scss";
          @import "@styles/device-styles/medium.scss";
          @import "@styles/device-styles/large.scss";
          @import "@styles/device-styles/x-large.scss";
          @import "@styles/device-styles/ultra-wide.scss";
        `,
      },
    },
  },
});