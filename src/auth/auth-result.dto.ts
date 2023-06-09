import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../user/user.entity';

@ObjectType()
export class AuthResult {
  @Field(() => User)
  user: User;

  @Field()
  accessToken: string;
}
