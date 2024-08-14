import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Landing_MFB/', // Reemplaza {nombre-del-repositorio} por el nombre de tu repositorio
});
