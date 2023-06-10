import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { User } from '../user/user.entity';
import { AuthResult } from './auth-result.dto';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthResult)
  async signUp(
    @Args('username') username: string,
    @Args('password') password: string,
  ): Promise<AuthResult> {
    return this.authService.signUp(username, password);
  }

  @Mutation(() => AuthResult)
  async signIn(
    @Args('username') username: string,
    @Args('password') password: string,
  ): Promise<AuthResult> {
    return this.authService.signIn(username, password);
  }

  @Mutation(() => AuthResult)
  async signUpAdmin(
    @Args('username') username: string,
    @Args('password') password: string,
    @Args('secret') secret: string,
  ): Promise<AuthResult> {
    return this.authService.signUpAdmin(username, password, secret);
  }
}
