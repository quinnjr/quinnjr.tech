declare const process: any;

// External imports
import {
  BrowserModule,
  BrowserTransferStateModule,
  TransferState,
  makeStateKey
} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InjectionToken, NgModule } from '@angular/core';

import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { StorageModule } from '@ngx-pwa/local-storage';

// App Modules
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { FlashMessageModule } from './flash-message/flash-message.module';
import { NavigationModule } from './navigation/navigation.module';
// import { ProjectsModule } from './projects/projects.module';

// Top-level components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JwtInterceptor } from './jwt.interceptor';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { AdminLoadGuard } from './admin-load.guard';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResumeModule } from './resume/resume.module';

const APOLLO_CACHE = new InjectionToken<InMemoryCache>('apollo-cache');
const STATE_KEY = makeStateKey<any>('apollo.state');

@NgModule({
  imports: [
    // External imports
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // 3rd Party Imports
    StorageModule.forRoot({
      /* eslint @typescript-eslint/naming-convention: off */
      IDBDBName: 'quinnjr.tech',
      LSPrefix: 'quinnjr_tech_'
    }),
    // Site imports
    AdminModule,
    AppRoutingModule,
    FlashMessageModule,
    NavigationModule,
    ResumeModule,
    // ProjectsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent
  ],
  providers: [
    UserService,
    AdminLoadGuard,
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
      provide: APOLLO_CACHE,
      useValue: new InMemoryCache()
    },
    {
      provide: APOLLO_OPTIONS,
      useFactory: (
        httpLink: HttpLink,
        cache: InMemoryCache,
        transferState: TransferState
      ) => {
        const isBrowser = transferState.hasKey<any>(STATE_KEY);

        if (isBrowser) {
          const state = transferState.get<any>(STATE_KEY, null);
          cache.restore(state);
        } else {
          transferState.onSerialize(STATE_KEY, () => cache.extract());
        }

        return {
          cache,
          link: httpLink.create({
            uri: '/graphql'
          })
        };
      },
      deps: [HttpLink, APOLLO_CACHE, TransferState]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
