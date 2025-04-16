import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',   // Use relative path for GitHub Pages
  
  build: {
    outDir: 'dist',
    emptyOutDir: true,  // Clears the dist folder before each build
    rollupOptions: {
      input: './index.html',
    }
  },
  
  server: {
    open: true  // Automatically open browser
  }
});