import { CONFIG_SERVICE } from '../constants';
import { ConfigService } from '../services';

export const ConfigServiceProvider = {
  provide: CONFIG_SERVICE,
  useValue: new ConfigService(process.env),
};
