import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';

// Register all community modules so ag-grid-angular can use community features
ModuleRegistry.registerModules([AllCommunityModule]);

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    ngZoneEventCoalescing: true,
  })
  .catch((err) => console.error(err));
