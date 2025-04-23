import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/vite-app/',
  
  // build: {
  //   outDir: 'dist',
  //   emptyOutDir: true,  
  //   rollupOptions: {
  //     input: './index.html',
  //   }
  // },
  server: {
    open: true  // Automatically open browser
  }
});