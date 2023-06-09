import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloWorldController } from './hello-world/hello-world.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { datasourceConfig } from './config/typeorm-datasource.js';

@Module({
  imports: [TypeOrmModule.forRoot(datasourceConfig)],
  controllers: [AppController, HelloWorldController],
  providers: [AppService],
})
export class AppModule {}
