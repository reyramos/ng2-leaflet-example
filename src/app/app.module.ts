import { BrowserModule } from '@angular/platform-browser';
import {
  NgModule,
  ApplicationRef
} from '@angular/core';
import {
  RouterModule
} from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from '../routes';

import '../styles/index.scss';

import { NoContentComponent } from './no-content/no-content.component';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { LeafletDirective } from './leaflet/leaflet.directive';


// Application wide providers
let APP_PROVIDERS = [
  ...ENV_PROVIDERS
];

type StoreType = {
  state: any,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};


if ('development' === ENV) {

  // Development
  APP_PROVIDERS = [
    ...APP_PROVIDERS
  ];


  // providers used to create fake backend
  if (USE_MOCKDATA) {
    APP_PROVIDERS = [
      ...APP_PROVIDERS,
    ];

  }

}


@NgModule({
  bootstrap   : [ AppComponent ],
  declarations: [
    NoContentComponent,
    AppComponent,
    LeafletDirective,
    DemoComponent
  ],
  imports     : [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers   : [
    ...APP_PROVIDERS
  ]
})


export class AppModule {


}
