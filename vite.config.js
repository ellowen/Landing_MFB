import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Reemplaza {nombre-del-repositorio} por el nombre de tu repositorio
  build: {
    outDir: 'dist',
  },
  server: {
    host: '0.0.0.0',
    port: 3055, 
    open: true,
    hmr: {
      host: '127.0.0.1', 
      port: 443, 
    },
   
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:33000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },

});
