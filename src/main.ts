import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import runtime from 'serviceworker-webpack-plugin/lib/runtime.js';

if ('serviceWorker' in navigator) {
  runtime.register();
}

if (environment.production) {
  enableProdMode();
}


platformBrowserDynamic().bootstrapModule(AppModule);
