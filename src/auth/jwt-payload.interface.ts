import { UserRole } from 'src/user/user-role.enum';

export interface JwtPayload {
  sub: number;
  username: string;
  roles: UserRole[];
}
