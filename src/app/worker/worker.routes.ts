import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./dashboard/dashboard.page').then((m) => m.DashboardPage),
      },
    ],
  },
  {
    path: 'reservation',
    loadComponent: () => import('./reservation/reservation.page').then( m => m.ReservationPage)
  }
];
