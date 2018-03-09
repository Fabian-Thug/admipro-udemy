import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grraficas1Component } from './grraficas1/grraficas1.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';



const pagesRoustes: Routes =  [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'progress', component: ProgressComponent},
      { path: 'graficas1', component: Grraficas1Component},
      { path: 'promesas', component: PromesasComponent},
      { path: 'rxjs', component: RxjsComponent},
      { path: 'account-settings', component: AccountSettingsComponent},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ],
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoustes);
