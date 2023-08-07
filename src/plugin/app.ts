import { createApp } from 'vue';
import App from '@/App.vue';

export const app = createApp(App)
  .use(router)
  .use(prime)
  .use(ToastService)
  .use(store);
