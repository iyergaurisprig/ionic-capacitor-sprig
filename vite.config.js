import { defineConfig } from 'vite';

export default defineConfig({
  base: '', // Essential for Android pathing
  build: {
    outDir: 'dist',
    // Forces everything into a single file so Android can't "lose" imports
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});