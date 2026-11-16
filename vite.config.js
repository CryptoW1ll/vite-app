import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: env.VITE_APP_BASE || '/',
    plugins: [react()],
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash].[ext]',
          entryFileNames: 'assets/[name].[hash].js',
        },
      },
    },
    server: {
      fs: {
        deny: ['.env', '.git', 'node_modules', 'secret-folder'],
      },
    },
  };
});
