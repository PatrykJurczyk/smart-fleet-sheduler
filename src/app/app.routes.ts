import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadChildren: () => import('./modules/dashboard/dashboard.routing'),
  },
  {
    path: 'create-schedule',
    loadChildren: () => import('./modules/create-schedule/create-schedule.routing'),
  },

  {
    path: 'schedules',
    loadChildren: () => import('./modules/schedules/schedules.routing'),
  },

  {
    path: 'create-form',
    loadChildren: () => import('./modules/create-form/create-form.routing'),
  },

  {
    path: 'forms',
    loadChildren: () => import('./modules/forms/forms.routing'),
  },
  {
    path: 'drivers',
    loadChildren: () => import('./modules/drivers/drivers.routing'),
  },
  {
    path: 'cars',
    loadChildren: () => import('./modules/cars/cars.routing'),
  },
  {
    path: 'files',
    loadChildren: () => import('./modules/files/files.routing'),
  },
  {
    path: 'settings',
    loadChildren: () => import('./modules/settings/settings.routing'),
  },
] as Routes;
