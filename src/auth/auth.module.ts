import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { JwtStrategy } from './jwt.strategy';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { ConfigModule } from '@nestjs/config';
import configuration from '../config/configuration';

@Module({
  imports: [
    ConfigModule,
    PassportModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: configuration().auth.jwtSecret,
        signOptions: { expiresIn: '1h' },
      }),
    }),
    UserModule,
  ],
  providers: [JwtStrategy, AuthResolver, AuthService],
})
export class AuthModule {}
