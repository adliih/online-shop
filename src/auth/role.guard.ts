import { UserRole } from 'src/user/user-role.enum';
import { AuthenticatedGuard } from './authenticated.guard';
import { ExecutionContext } from '@nestjs/common';

export const RoleGuard = (...requiredRoles: UserRole[]) => {
  return new (class extends AuthenticatedGuard {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> {
      const { user } = this.getRequest(context);

      if (!requiredRoles) {
        return true;
      }

      return requiredRoles.some((role) => user?.roles?.includes(role));
    }
  })();
};
