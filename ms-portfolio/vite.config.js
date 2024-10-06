import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the output directory if you want to ensure it's correct
    emptyOutDir: true, // Optional: clears the output directory before building
  },
  server: {
    port: 3000, // You can set a custom port for development if needed
  },
})
