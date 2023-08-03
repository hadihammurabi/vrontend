import { createApp } from 'vue';
import routes from './routes';
import App from './App.vue';
import PrimeVue from 'primevue/config';

import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/lara-light-blue/theme.css';
import '@/style/main.css';

createApp(App)
  .use(routes)
  .use(PrimeVue)
  .mount('#app');
