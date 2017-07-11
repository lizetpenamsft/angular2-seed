import { ValueService } from './services/value.service';
import { ValueComponent } from './values/value.controller';
import { NgModule, APP_INITIALIZER } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { GithubService } from './github/shared/github.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { BaseEndpoint } from './app.constants';
import { OAuthCallbackHandler } from './login-callback/oauth-callback.guard';
import { OAuthCallbackComponent } from './login-callback/oauth-callback.component';
import { OAuthHandshakeModule } from './login-callback/oauth-callback.module';
import { SharedServicesModule } from './services/shared.services.module';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RepoBrowserComponent,
    RepoListComponent,
    RepoDetailComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    ValueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    OAuthHandshakeModule,
    SharedServicesModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    GithubService,
    /*
    {
      provide: APP_INITIALIZER,     
      useFactory: () => {
        // any app initialize code
      },
      
      deps: [],
      multi: true
    },
    */
    { provide: BaseEndpoint, useValue: 'http://localhost:52233' }, // for asp.net core backend
    //{ provide: BaseEndpoint, useValue: 'http://localhost:64897'}, // use asp.net mvc 5 backend
    ValueService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
