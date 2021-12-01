import { BASE_PROVIDER_REPOSITORY } from '../tokens/base.repository.token';

export function BaseRepositoryProvider(useClass) {
  return {
    provide: BASE_PROVIDER_REPOSITORY,
    useClass,
  };
}
