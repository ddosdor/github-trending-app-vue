import Repository from '../Repository';
import { TrendingDeveloper, TrendingDevelopersFilterParams } from '../types';

interface ITrendingDevelopersRepository {
  get(params?: TrendingDevelopersFilterParams): Promise<TrendingDeveloper[]>
}

class TrendingDevelopersRepository extends Repository<TrendingDeveloper> implements ITrendingDevelopersRepository {
  public endpoint = '/developers'
}

export default new TrendingDevelopersRepository();
