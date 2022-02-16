import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OktaAuthGuard, OktaCallbackComponent } from '@okta/okta-angular';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'implict/callback', component: OktaCallbackComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'details', component: DetailsComponent, canActivate: [OktaAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
