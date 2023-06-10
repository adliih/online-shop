import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JwtPayload } from './jwt-payload.interface';
import { UserService } from '../user/user.service';
import configuration from '../config/configuration';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configuration().auth.jwtSecret,
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this.userService.getUserById(payload.sub);

    if (!user) {
      throw new UnauthorizedException('Invalid token');
    }

    return user;
  }
}
