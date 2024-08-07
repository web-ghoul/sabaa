import { IS_PUBLIC_KEY, ROLES_KEY } from 'src/auth/roles.decorator';
import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
  import { JwtService } from '@nestjs/jwt';
  import { Request } from 'express';
import { Role } from 'src/enum/role.enum';
import { PermissionService } from 'src/permission/permission.service';

  
  @Injectable()
  export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService, private reflector: Reflector, private permissionService: PermissionService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {

        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
          ]);
          if (isPublic) {
            // 💡 See this condition
            return true;
          }
      const request = context.switchToHttp().getRequest();
      const token = this.extractTokenFromHeader(request);
      if (!token) {
        throw new UnauthorizedException();
      }
      try {
        const payload = await this.jwtService.verifyAsync(token, {
          secret: process.env.Secret_Password,
        });
        if (!payload.role) {
          throw new UnauthorizedException('Role not specified in JWT payload');
        }

        request['user'] = payload;
        const permission = await this.permissionService.findOneByName(
          payload.role,
        );
        const path = request.route.path.split('/')[2];
        let method: string = request.method;
        if (method === 'GET') {
          method = 'read';
        }

        if (permission.permissions.get(path)[method.toLowerCase()] == false) {
          throw new UnauthorizedException();
        }

        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(
          ROLES_KEY,
          [context.getHandler(), context.getClass()],
        );

        if (!requiredRoles) {
          return true;
        }

        return requiredRoles.some((role) => payload.role?.includes(role));
        // 💡 We're assigning the payload to the request object here
        // so that we can access it in our route handlers
      } catch {
        throw new UnauthorizedException();
      }
    }
  
    private extractTokenFromHeader(request: Request): string | undefined {
      const [type, token] = request.headers.authorization?.split(' ') ?? [];
      return type === 'Bearer' ? token : undefined;
    }
  }