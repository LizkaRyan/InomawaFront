import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./category/category.page').then((m) => m.CategoryPage),
      },
      {
        path: 'worker',
        loadComponent: () =>
          import('./worker/worker.page').then((m) => m.WorkerPage),
      },
      {
        path: 'request',
        loadComponent: () => import('./request/request.page').then( m => m.RequestPage)
      }
    ],
  }
];
