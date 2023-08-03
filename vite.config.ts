import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { URL, fileURLToPath } from 'node:url';
import autoImportComponent from 'unplugin-vue-components/vite';
import autoImport from 'unplugin-auto-import/vite';
import autoRoute from 'unplugin-vue-router/vite';
import { VueRouterAutoImports } from 'unplugin-vue-router';

export default defineConfig({
  plugins: [
    vue(),
    autoImport({
      imports: [
        'vue',
        VueRouterAutoImports,
        'vee-validate',
      ],
      dirs: [
        './src/composable',
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
