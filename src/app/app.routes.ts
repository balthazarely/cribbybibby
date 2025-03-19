import { Routes } from '@angular/router';
import { SettingsComponent } from './features/settings/settings.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/counter/counter.module').then((m) => m.CounterModule),
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
];
