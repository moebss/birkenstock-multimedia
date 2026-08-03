import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/birkenstock-multimedia/',
  server: {
    port: 3014,
    host: true
  },
  preview: {
    port: 3014,
    host: true
  }
});
