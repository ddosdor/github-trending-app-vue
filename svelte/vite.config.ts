import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

function resolvePath(dir: string) {
  return path.resolve(__dirname, dir);
}

export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      '@': resolvePath('src'),
    },
  },  
});
