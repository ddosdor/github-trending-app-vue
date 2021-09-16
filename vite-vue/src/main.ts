import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import './assets/style.sass';

import { registerModule } from './shared/utils';
import { TrendingRepositoriesModule } from '@/modules/trendingRespositories';
import { TrendingDevelopersModule } from '@/modules/trendingDevelopers';

const app = createApp(App);

// register all modules
registerModule(app, TrendingRepositoriesModule);
registerModule(app, TrendingDevelopersModule);

// register global router
app.use(router);

// mount app
app.mount('#app');
