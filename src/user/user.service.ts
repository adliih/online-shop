import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt';
import { UserRole } from './user-role.enum';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser({
    username,
    password,
    roles,
  }: Partial<User>): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);

    const isUsernameExist = await this.userRepository
      .countBy({ username })
      .then((res) => res > 0);

    if (isUsernameExist) {
      throw new BadRequestException('Invalid username');
    }

    const user = this.userRepository.create({
      username,
      password: hashedPassword,
      roles: roles ?? [UserRole.CUSTOMER],
    });

    return this.userRepository.save(user);
  }

  async getUserById(id: number): Promise<User | undefined> {
    return this.userRepository.findOneByOrFail({ id });
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return this.userRepository.findOneByOrFail({ username });
  }
}
