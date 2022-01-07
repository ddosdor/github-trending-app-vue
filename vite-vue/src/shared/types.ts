import { createApp } from 'vue';
import { createRouter } from 'vue-router';

export interface ModuleOption {
  app?: ReturnType<typeof createApp>,
  router?: ReturnType<typeof createRouter>
}
