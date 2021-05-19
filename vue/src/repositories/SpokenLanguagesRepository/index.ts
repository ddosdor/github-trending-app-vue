import Repository from '../Repository';
import { SpokenLanguage } from '../types';

interface ISpokenLanguageRepository {
  get(): Promise<SpokenLanguage[]>
}

class SpokenLanguagesRepository extends Repository<SpokenLanguage> implements ISpokenLanguageRepository {
  public endpoint = '/spoken_languages'
}

export default new SpokenLanguagesRepository();
