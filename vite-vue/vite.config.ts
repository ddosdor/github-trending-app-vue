import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

function resolvePath(dir: string) {
  return path.resolve(__dirname, dir);
}

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@', replacement: resolvePath('src') },
    ],
  },
});
