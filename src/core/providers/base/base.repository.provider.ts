export const BASE_PROVIDER_REPOSITORY = 'BASE_PROVIDER_REPOSITORY';

export function BaseRepositoryProvider(useClass) {
  return {
    provide: BASE_PROVIDER_REPOSITORY,
    useClass,
  };
}
