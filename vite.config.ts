import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { URL, fileURLToPath } from 'node:url';
import autoImportComponent from 'unplugin-vue-components/vite';
import autoImport from 'unplugin-auto-import/vite';
import autoRoute from 'unplugin-vue-router/vite';
import { VueRouterAutoImports } from 'unplugin-vue-router';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    vue(),
    autoImport({
      imports: [
        'vue',
        VueRouterAutoImports,
        'vee-validate',
        'pinia',
      ],
      dirs: [
        './src/composable',
        './src/store',
      ],
      dts: './type/imports.d.ts',
    }),
    autoImportComponent({
      dirs: [
        './src/component',
      ],
      dts: './type/components.d.ts',
    }),
    autoRoute({
      routesFolder: './src/page',
      dts: './type/routes.d.ts',
    }),
    VitePWA(),
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
