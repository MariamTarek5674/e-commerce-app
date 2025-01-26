import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,        // Enable global test API like `describe`, `it`, etc.
    environment: 'jsdom', // Use jsdom for DOM-like environment
    setupFiles: './src/test/setup.js', // Optional: Setup file for global configurations
  },
  coverage: {
    reporter: ['text', 'json', 'html'],
  },
})
