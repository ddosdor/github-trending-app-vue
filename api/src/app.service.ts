import { Injectable } from '@nestjs/common';
import { fetchRepositories, fetchDevelopers } from '@huchenme/github-trending/src/api/fetch';
import { languages, spokenLanguages } from '@huchenme/github-trending';
import { 
  TrendingRepo,
  TrendingDeveloper,
  Language,
  SpokenLanguage,
  TrendingRepoFilterParams,
  TrendingDevelopersFilterParams
} from './types';

@Injectable()
export class AppService {
  async getTrendingRepositories(params?: TrendingRepoFilterParams): Promise<TrendingRepo[]> {
    const _params = {
      ...(params.language && { language: params.language }),
      ...(params.since && { since: params.since }),
      ...(params.spoken_language_code && { spokenLanguage: params.spoken_language_code })
    };
    const result = await fetchRepositories(_params)
    return result;
  }

  async getTrendingDevelopers(params?: TrendingDevelopersFilterParams): Promise<TrendingDeveloper[]> {
    const result = await fetchDevelopers(params)
    return result;
  }

  getLanguages(): Language[] {
    const result = languages;
    return result;
  }
  
  getSpokenLanguages(): SpokenLanguage[] {
    const result = spokenLanguages;
    return result;
  }
}
