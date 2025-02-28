import { Routes } from '@angular/router';
import { VueSubComponent } from './vue-sub.component';

export const VUE_SUB_ROUTES: Routes = [
  {
    path: '',
    component: VueSubComponent,
    children: [
      {
        path: '**',
        component: VueSubComponent,
      }
    ],
  },
];