import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) },
  { path: 'monitor', loadChildren: () => import('./pages/monitor/monitor.routes').then(m => m.MONITOR_ROUTES) },
  { path: 'vue-sub', loadChildren: () => import('./pages/vue-sub/vue-sub.routes').then(m => m.VUE_SUB_ROUTES) },
  { path: 'react-sub', loadChildren: () => import('./pages/react-sub/react-sub.routes').then(m => m.REACT_SUB_ROUTES) }
];
