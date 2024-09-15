import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

const proxyObject = {
  target: 'http://localhost:3000',
  ws: true,
  changeOrigin: true,
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    proxy: {
      '/api': proxyObject,
    },
  },
});
