import { Routes } from '@angular/router';
import { NoContentComponent } from './app/no-content/no-content.component';
import { DemoComponent } from './app/demo/demo.component';

/**
 * Created by reyra on 8/14/2017.
 */
export const ROUTES: Routes = [
  {
    path: '',
    component: DemoComponent
  },
  {
    path: '**',
    component: NoContentComponent
  },
];
