import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { 
  Language,
  SpokenLanguage,
  TrendingDeveloper,
  TrendingRepo,
  TrendingRepoFilterParams,
  TrendingDevelopersFilterParams
} from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/repositories')
  getTrendingRepositories(@Query() params?: TrendingRepoFilterParams): Promise<TrendingRepo[]> {
    return this.appService.getTrendingRepositories(params);
  }

  @Get('/developers')
  getTrendingDevelopers(@Query() params?: TrendingDevelopersFilterParams): Promise<TrendingDeveloper[]> {
    return this.appService.getTrendingDevelopers(params);
  }

  @Get('/languages')
  getLanguages(): Language[] {
    return this.appService.getLanguages();
  }

  @Get('/spoken_languages')
  getSpokenLanguages(): SpokenLanguage[] {
    return this.appService.getSpokenLanguages();
  }
}
