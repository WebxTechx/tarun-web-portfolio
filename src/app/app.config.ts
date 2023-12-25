import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  // providers: [provideRouter(routes), { provide: LocationStrategy, useClass: HashLocationStrategy }],
  providers: [provideRouter(routes), { provide: LocationStrategy, useClass: HashLocationStrategy }],
};
