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
    loadComponent: () => import('./pages/songs/components/home/home').then(c => c.SongsHomeComponent),
  },
  {
    path: 'playlist',
    loadComponent: () => import('./pages/playlist/components/home/home').then(c => c.PlaylistHomeComponent),
  },



  // {
  //   path: '',
  //   loadComponent: () => import('./core/main-layout/main-layout').then(c => c.MainLayoutComponent),
  // },
];