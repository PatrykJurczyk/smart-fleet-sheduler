import { Routes } from '@angular/router';

export default [
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.routing'),
  },
] as Routes;
