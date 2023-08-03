import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { URL, fileURLToPath } from 'node:url';
import autoImportComponent from 'unplugin-vue-components/vite';
import autoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [
    vue(),
    autoImport({
      dirs: [
        './src/composable',
      ],
    }),
    autoImportComponent({
      dirs: [
        './src/component',
        './src/page',
      ],
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
    ],
  },
});
