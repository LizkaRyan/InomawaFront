import { Routes } from '@angular/router';
import { ServicesPage } from './services.page';

export const routes: Routes = [
  {
    path: 'services',
    component: ServicesPage,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./services.page').then((m) => m.ServicesPage),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];
