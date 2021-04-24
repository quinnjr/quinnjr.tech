declare var process: any;

// External imports
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { StorageModule } from '@ngx-pwa/local-storage';
import { MarkdownModule } from 'ngx-markdown';

// App Modules
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { FlashMessageModule } from './flash-message/flash-message.module';
import { NavigationModule } from './navigation/navigation.module';
import { ProjectsModule } from './projects/projects.module';

// Top-level components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JwtInterceptor } from './jwt.interceptor';
import { LoginComponent } from './login/login.component';
import { LoadingBarModule } from './loading-bar/loading-bar.module';
import { UserService } from './user.service';
import { AdminGuard } from './admin.guard';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    // External imports
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: process.env.NODE_ENV === 'production'
    }),
    // 3rd Party Imports
    StorageModule.forRoot({
      IDBDBName: 'quinnjr.tech',
      LSPrefix: 'quinnjr_tech_'
    }),
    MarkdownModule.forRoot(),
    // Site imports
    AdminModule,
    AppRoutingModule,
    FlashMessageModule,
    LoadingBarModule,
    NavigationModule,
    ProjectsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent
  ],
  providers: [
    UserService,
    AdminGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: process.env.API_ENTRYPOINT + '/graphql'
          })
        }
      },
      deps: [ HttpLink ]
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
