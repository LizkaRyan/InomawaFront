﻿import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./dashboard/dashboard.page').then((m) => m.DashboardPage),
      },
      {
        path: 'reservation',
        loadComponent: () => import('./reservation/reservation.page').then( m => m.ReservationPage)
      },
      {
        path: 'profile',
        loadComponent: () => import('./profile/profile.page').then( m => m.ProfilePage)
      },
      {
        path: 'working',
        loadComponent: () => import('./working/working.page').then( m => m.WorkingPage)
      },
    ],
  },
];
