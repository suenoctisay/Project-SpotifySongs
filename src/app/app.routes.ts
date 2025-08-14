import { MainLayoutComponent } from './core/main-layout/main-layout';
import { Routes } from '@angular/router';

export const app_routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then(c => c.HomeComponent),
  },
  {
    path: 'songs',
    loadComponent: () => import('./pages/songs/songs').then(c => c.SongsComponent),
  },
  {
    path: '',
    loadComponent: () => import('./core/main-layout/main-layout').then(c => c.MainLayoutComponent),
  },
];