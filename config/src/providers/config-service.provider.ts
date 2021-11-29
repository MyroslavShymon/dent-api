import { CONFIG_SERVICE } from '../constants';
import { ConfigService } from '../config.service';

export const ConfigServiceProvider = {
  provide: CONFIG_SERVICE,
  useValue: new ConfigService(process.env),
};
