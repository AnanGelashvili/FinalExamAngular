import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { HttpClientModule } from '@angular/common/http';

// Bootstrap the application and provide necessary modules and services
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    { provide: HttpClientModule }, // This ensures HttpClientModule is available for dependency injection
  ],
}).catch((err) => console.error(err));
