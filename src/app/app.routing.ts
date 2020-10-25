import { Routes } from '@angular/router';
import {
  Base,
  DashboardComponent
} from './@pages/layouts';
import {BlankComponent} from './@pages/layouts/blank/blank.component';
import {AuthGuard} from './auth/auth.guard';

export const AppRoutes: Routes = [
  { path: '',   redirectTo: '/base/dashboard', pathMatch: 'full' },
  {
    path: 'base',
    component: Base,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  },
  {
    path: 'auth',
    component: BlankComponent,
    children: [
      {
        path: '',
        loadChildren: './session/session.module#SessionModule'
      }
    ]
  }
];
