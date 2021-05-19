import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import './assets/theme/index.sass';

import { clickOutside } from './directives';

createApp(App)
  .use(router)
  .directive('click-outside', clickOutside)
  .mount('#app');
