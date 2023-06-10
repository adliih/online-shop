import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { JwtPayload } from './jwt-payload.interface';
import { AuthResult } from './auth-result.dto';
import * as bcrypt from 'bcrypt';
import { UserRole } from 'src/user/user-role.enum';
import configuration from 'src/config/configuration';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(username: string, password: string): Promise<AuthResult> {
    const user = await this.userService.createUser({ username, password });
    return { user, accessToken: this.jwtService.sign({ ...user }) };
  }

  async signUpAdmin(
    username: string,
    password: string,
    secret: string,
  ): Promise<AuthResult> {
    const adminSecret = configuration().auth.adminSecret;

    if (!adminSecret || secret !== adminSecret) {
      throw new UnauthorizedException('Invalid Secret');
    }

    const user = await this.userService.createUser({
      username,
      password,
      roles: [UserRole.ADMIN],
    });

    return { user, accessToken: this.jwtService.sign({ ...user }) };
  }

  async signIn(username: string, password: string): Promise<AuthResult> {
    const user = await this.userService
      .getUserByUsername(username)
      .catch(() => {});

    if (!user || !bcrypt.compareSync(password, user.password)) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload: JwtPayload = {
      sub: user.id,
      username: user.username,
      roles: user.roles,
    };

    const accessToken = this.jwtService.sign(payload);

    return {
      user,
      accessToken,
    };
  }
}
