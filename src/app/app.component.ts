import { Component } from '@angular/core';
import { OktaAuthStateService } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

const oktaConfig = {
  issuer: 'https://dev-47913926.okta.com/oauth2/default',
  clientId: '0oa3vxwlyletYizlh5d7',
  redirectUri: 'http://localhost:4200/implict/callback'
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'okta-practice';
  oktaAuth = new OktaAuth(oktaConfig);
  constructor(public authStateService: OktaAuthStateService) { }

  async login() {
    await this.oktaAuth.signInWithRedirect();
  }

  async logout() {
    await this.oktaAuth.signOut();
  }
}
