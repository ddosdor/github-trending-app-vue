/* eslint-disable no-unused-vars */
import { createApp } from 'vue';
import { RouteRecordRaw } from 'vue-router';
import { ModuleOption } from './types';
import router from '@/router';

export function createModule(routes: RouteRecordRaw[], options: ModuleOption) {
  routes.forEach((route) => router?.addRoute(route));
}

export function registerModule(
  app: ReturnType<typeof createApp>,
  module: (opt: ModuleOption) => void,
): void {
  module({ app, router });
}
