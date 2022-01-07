import { ModuleOption } from '@/shared/types';
import { createModule } from '@/shared/utils';
import { routes } from './routes';

export function TrendingDevelopersModule({ router }: ModuleOption) {
  createModule(routes, { router });
}
