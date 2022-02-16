import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { DetailsComponent } from './components/details/details.component';
import { OktaAuth } from '@okta/okta-auth-js';

const oktaConfig = {
  issuer: 'https://dev-47913926.okta.com/oauth2/default',
  clientId: '0oa3vxwlyletYizlh5d7',
  redirectUri: 'http://localhost:4200/implict/callback'
}

const oktaAuth = new OktaAuth(oktaConfig);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: { oktaAuth } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
