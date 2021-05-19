import Repository from '../Repository';
import { Language } from '../types';

interface ILanguagesRepository {
  get(): Promise<Language[]>
}

class LanguagesRepository extends Repository<Language> implements ILanguagesRepository {
  public endpoint = '/languages'
}

export default new LanguagesRepository();
