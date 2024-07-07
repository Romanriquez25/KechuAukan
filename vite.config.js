import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  publicDir: 'public',
  base: '/KechuAukan/', // Asegúrate de que esto coincida exactamente con el nombre del repositorio
});
