import { ModuleOption } from '@/shared/types';
import { createModule } from '@/shared/utils';
import { routes } from './routes';

export function TrendingRepositoriesModule({ router }: ModuleOption) {
  createModule(routes, { router });
}
