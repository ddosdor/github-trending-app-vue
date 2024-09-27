import { NgModule, NO_ERRORS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';

import { AppConfigService } from './app-config.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  LayoutHeaderComponent,
  LayoutMainComponent,
  LayoutNavigationAndFiltersComponent
} from '@shared/layout';

import { MainNavigationComponent } from '@shared/components/main-navigation/main-navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutHeaderComponent,
    LayoutMainComponent,
    LayoutNavigationAndFiltersComponent,
    MainNavigationComponent,
  ],
  imports: [
    CoreModule,
    SharedModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [{
    provide: APP_INITIALIZER,
    multi: true,
    deps: [AppConfigService],
    useFactory: (appConfigService: AppConfigService) => 
      () => appConfigService.getAppConfig()
  }],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
