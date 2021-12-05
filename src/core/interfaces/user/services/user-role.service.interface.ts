import { ConnectUserRoleDto } from '../../../../modules/user/environment';

export interface UserRoleServiceInterface {
  connectUserRole(dto: ConnectUserRoleDto): any;
}
