import { APP_INITIALIZER, Injectable } from '@angular/core';
/**
 * Created by reyra on 8/18/2017.
 */


@Injectable()
export class ConfigService {

  private _config: any;

  constructor() {
  }

  load() {
  }

  get config(): any {
    return this._config;
  }
}


export let ConfigServiceProvider = {
  provide   : APP_INITIALIZER,
  useFactory: (configService: ConfigService) => function () {
    return configService.load();
  },
  deps      : [ ConfigService ],
  multi     : true
};


export const MOCK_PROVIDERS = [
  ConfigService,
  ConfigServiceProvider
];
