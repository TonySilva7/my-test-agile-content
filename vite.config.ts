/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@APP': '/src',
    },
  },
  build: {
    chunkSizeWarningLimit: 3000,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react'],
          reactDom: ['react-dom'],
          reactRouterDom: ['react-router-dom'],

          axios: ['axios'],
          reduxToolkit: ['@reduxjs/toolkit'],
          reactRedux: ['react-redux'],
          lucideReact: ['lucide-react'],
        },
      },
    },
  },
});
