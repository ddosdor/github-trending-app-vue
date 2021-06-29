import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  LayoutHeader,
  LayoutMain,
  LayoutNavigationAndFilters
} from '@shared/layout';

import { MainNavigationComponent } from '@shared/components/main-navigation/main-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutHeader,
    LayoutMain,
    LayoutNavigationAndFilters,
    MainNavigationComponent,
  ],
  imports: [
    CoreModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
