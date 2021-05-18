import Repository from '../Repository';
import { TrendingRepo, TrendingRepoFilterParams } from '../types';

interface ITrendingRepo {
  get(params?: TrendingRepoFilterParams): Promise<TrendingRepo[]>
}

class TrendingRepoRepository extends Repository<TrendingRepo> implements ITrendingRepo {
  public endpoint = '/repositories';
}

export default new TrendingRepoRepository();
