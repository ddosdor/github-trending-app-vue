import { throwError } from 'rxjs';
import { retry, catchError} from 'rxjs/operators'
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from 'environments/environment';

import { AppConfig } from '@core/types';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private http: HttpClient;
  private environment = environment;
  private configUrl: string;

  constructor(http: HttpClient) { 
    this.http = http;
    this.configUrl = `assets/config/app.config.${this.environment.name}.json`;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Error when getting configuration file: ', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);      
    }

    return throwError(
      'Something went wrong when inicializing the application. Please try again.'
    )
  }

  getAppConfig() {
    return this.http.get<AppConfig>(this.configUrl)
      .pipe(
        retry(3),
        catchError(this.handleError)
      )
  }
}
