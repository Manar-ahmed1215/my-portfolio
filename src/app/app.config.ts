import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';

// app.config.ts
export const appConfig: ApplicationConfig = {
  providers: [
   provideRouter(routes, withInMemoryScrolling({ 
  anchorScrolling: 'enabled', // ده اللي بيخلي السكرول يروح للـ id
  scrollPositionRestoration: 'enabled' 
}))
  ]
};