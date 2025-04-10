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
        path: 'request/:idCategory',
        loadComponent: () =>
          import('./category/category.page').then((m) => m.CategoryPage),
      },
    ],
  }
];
