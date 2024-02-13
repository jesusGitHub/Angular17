import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

//import {importProvidersFrom } from '@angular/core';

//import {NavComponent} from './app/nav/nav.component';
/*
bootstrapApplication(AppComponent, appConfig,{
  providers: [importProvidersFrom(provideHttpClient)]
}).catch((err) => console.error(err));

*/

bootstrapApplication(AppComponent, appConfig)
.catch((err) => console.error(err));

/*
bootstrapApplication(AppComponent, {providers: [
    provideHttpClient()
  ]});
*/