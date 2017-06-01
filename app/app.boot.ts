import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.modules';

platformBrowserDynamic().bootstrapModule(AppModule);

// import { platformBrowser }    from '@angular/platform-browser';
// import { AppModuleNgFactory } from '../out/app/app.modules.ngfactory';

// console.log('Running AOT compiled');
// platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);