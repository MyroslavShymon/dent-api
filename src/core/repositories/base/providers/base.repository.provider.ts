import { BASE_PROVIDER_REPOSITORY } from '../tokens';

export function BaseRepositoryProvider(useClass) {
  return {
    provide: BASE_PROVIDER_REPOSITORY,
    useClass,
  };
}
